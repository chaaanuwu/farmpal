import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FarmerDashboard from "../screens/farmer/Dashboard/FarmerDashboard";

const Stack = createNativeStackNavigator();

export default function FarmerNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="FarmerDashboard" component={FarmerDashboard} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}