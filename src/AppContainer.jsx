import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./view/HomeView";
import ProfileView from "./view/ProfileView";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import LoginForm from "./view/LoginView/LoginForm";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator  initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileView} />
      <Tab.Screen name="Login" component={LoginForm} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeTabs" component={MyTabs} />

        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileView} />
        <Stack.Screen name="Login" component={LoginForm} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppContainer;
