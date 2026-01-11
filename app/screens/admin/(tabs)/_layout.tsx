import React from 'react';
import { Tabs } from 'expo-router';

export default function DashboardLayout() {

  return (
    <Tabs
      screenOptions={{}}>
      <Tabs.Screen
        name="index"
      />

      <Tabs.Screen
        name="users"
      />

    </Tabs>
  );
}