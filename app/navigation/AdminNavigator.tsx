import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminDashboard from "../screens/admin/Dashboard/AdminDashboard";

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}