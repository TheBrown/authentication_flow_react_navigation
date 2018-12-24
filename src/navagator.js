import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";

import HomeScreen from "./screens/HomeScreen";
import OtherScreen from "./screens/OtherScreen";
import AuthLoadingScreen from "./screens/AuthLoadingScreen";
import SignInScreen from "./screens/SignInScreen";

const AppStack = createStackNavigator({ Home: HomeScreen, Other: OtherScreen });
const AuthStack = createStackNavigator({ SignIn: SignInScreen });

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
