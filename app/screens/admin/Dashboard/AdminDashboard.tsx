import { Text, View, StyleSheet } from "react-native";

export default function AdminDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Admin Dashboard
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                  // Take full screen
    justifyContent: "center", // Center vertically
    alignItems: "center",     // Center horizontally
    backgroundColor: "#f5f5f5", // Light gray background
    padding: 20,
  },
  title: {
    fontSize: 24,            // Bigger text
    fontWeight: "bold",      // Bold
    color: "#333",           // Dark text
    textAlign: "center",
  },
});