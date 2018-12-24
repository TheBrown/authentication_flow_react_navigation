import React from "react";
import { AsyncStorage, Button, StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Welcome to the app!"
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Button title="Show me more of the app" onPress={this._showMoreApp} />
        </View>
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </View>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate("Other");
  };

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate("Auth");
  };
}
