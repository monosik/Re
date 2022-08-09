import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import AppStack from "./navigation/AppStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView>
          <StatusBar style="auto"/>
          <AppStack/>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
