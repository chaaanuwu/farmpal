import useAuth from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { ActivityIndicator, View } from "react-native";
import AdminNavigator from "./admin/AdminNavigator";
import AuthNavigator from "./AuthNavigator";
import FarmerNavigator from "./FarmerNavigator";

export default function RootNavigator() {
  const [role, setRole] = useState<string | null>(null);

  const { user, loading } = useAuth();

  useEffect(() => {
    if (user) {
      const ref = firestore().collection('users').doc(user.uid);
      ref.get().then(doc => {
        if (doc.exists()) {
          // doc exists
          const data = doc.data();
          setRole(data?.role ?? null);
        }
      });
    }
  }, [user]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#6200EE" />
      </View>
    );
  }

  if (!user) return <AuthNavigator />;
  if (["farmer"].includes(role ?? "")) return <FarmerNavigator />;
  if (["admin", "owner"].includes(role ?? "")) return <AdminNavigator />;
  
  return null;
}