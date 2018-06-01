import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import Button from "react-native-button"
import { Actions as RouteActions } from "react-native-router-flux"

class WelcomeScene extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Welcome Scene</Text>
        <Button style={styles.button} onPress={RouteActions.tabbar}>
          Get Started
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "red"
  },
  button: {
    color: "blue"
  }
})

export default WelcomeScene
