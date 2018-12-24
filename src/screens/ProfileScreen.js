import React, { Component } from "react";
import { Text, View, Button, AsyncStorage } from "react-native";

export default class ProfileScreen extends Component {
  
    static navigationOptions = {
        title: "yolo"
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate("Auth");
      };
    render() {
    return (
      <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
        <Text> Hello My Profile </Text>
        <Button
          onPress={this._signOutAsync}
          title="Sign out"
        />
      </View>
    );
  }
}
