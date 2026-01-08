import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";

export default function FarmerDashboard() {
    return (
        <View style={styles.container}>
            {/* Change the top status bar */}

            <StatusBar
                // @ts-ignore
                barStyle="light-content"
                backgroundColor="#6200EE"
            />
            <Text style={styles.title}>
                Farmer Dashboard
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