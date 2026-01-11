import CustomButton from "@/components/ui/CustomButton";
import { getAuth } from "@react-native-firebase/auth";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";

export default function ProfileScreen() {

  const auth = getAuth();
  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (e: any) {
      Alert.alert("Sign out error", e.message);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
      <TouchableOpacity style={{ backgroundColor: 'red', padding: 16, marginTop: 16, borderRadius:10 }}
        onPress={() => {handleSignOut();}}>
        <Text style={{color: '#fff'}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold" },
});