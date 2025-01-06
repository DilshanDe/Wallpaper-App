import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <Image 
      source={require('../assets/images/welcome.png')}
      style={styles.bgImage}
      resizeMode='cover'
      />
    </View>
  )
}

const styles=StyleSheet.create({

})

export default WelcomeScreen