import useAuth from "@/hooks/useAuth";
import { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AdminNavigator from "./AdminNavigator";
import AuthNavigator from "./AuthNavigator";
import FarmerNavigator from "./FarmerNavigator";

export default function RootNavigator() {
  const [role, setRole] = useState<string | null>(null);

  const { user, loading } = useAuth();

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
  if (role === "farmer") return <FarmerNavigator />;
  if (role === "admin" || "owner") return <AdminNavigator />;

  return <FarmerNavigator />;
}
