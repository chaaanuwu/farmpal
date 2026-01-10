import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdminTabs from "./AdminTabs";

const Stack = createNativeStackNavigator();

export default function AdminNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AdminDashboard"
        component={AdminTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
