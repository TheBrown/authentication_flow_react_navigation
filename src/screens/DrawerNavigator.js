import React, { Component } from "react";
import { Text, View } from "react-native";

import { createDrawerNavigator } from "react-navigation";

import TestTitle from "./DrawerScreen/TestTitle";
import TestTitle1 from "./DrawerScreen/TestTitle1";

const AppDrawer = createDrawerNavigator({
  TestTitle: { screen: TestTitle },
  TestTitle1: { screen: TestTitle1 }
});

export default AppDrawer;
