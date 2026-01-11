import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import AdminDashboard from "../../screens/admin/(tabs)/index";
import UsersScreen from "../../screens/admin/(tabs)/users";
import ReportsScreen from "../../screens/admin/(tabs)/reports";
import { Colors } from "@/constants/theme";
import ProfileScreen from "@/app/screens/admin/(tabs)/profile";

const Tab = createBottomTabNavigator();

export default function AdminTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.light.successGreen,
        tabBarInactiveTintColor: "#888",
        tabBarStyle: {
          height: 75,
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#ddd",
          paddingTop: 8,
          paddingBottom:  8,
        },
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={AdminDashboard}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size || 28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Users"
        component={UsersScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="people" size={size || 28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Reports"
        component={ReportsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text" size={size || 28} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" size={size || 28} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}