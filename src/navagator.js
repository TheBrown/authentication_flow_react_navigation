import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import OtherScreen from "./screens/OtherScreen";
import ProfileScreen from "./screens/ProfileScreen";
import DrawerNavigator from "./screens/DrawerNavigator";

import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SignInScreen from "./screens/SignInScreen";

import TestTitle from './screens/DrawerScreen/TestTitle';
import TestTitle1 from './screens/DrawerScreen/TestTitle1';

const AppStack = createStackNavigator(
  {
    Home: HomeScreen,
    Other: OtherScreen,
    Profile: ProfileScreen,
    Drawer: DrawerNavigator
  },
  {
    initialRouteName: "Home"
  }
);

const DrawerStack = createDrawerNavigator({
  Test: TestTitle,
  Test1: TestTitle1,
  Test2: AppStack
}, {
  initialRouteName: "Test2"
});
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: DrawerStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
