import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/comman'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar style='light'/>
      <Image 
      source={require('../assets/images/welcome.png')}
      style={styles.bgImage}
      resizeMode='cover'
      />

      {/*liner gradient*/}
      <Animated.View entering={FadeInDown.duration(600)} style={{flex:1}}>
        <LinearGradient
            colors={['rgba(255,255,255,0)','rgba(255,255,255,0.5)','white','white']}
            style={styles.gradient}
            start={{x:0.5,y:0}}
            end={{x:0.5, y:0.8}}
        />
        {/*content*/}
        <View style={styles.contentContainer}>
          <Text
            style={styles.title}>
              Pixels

          </Text>
        </View>

      </Animated.View>

    </View>
  )
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  bgImage:{
    width:wp(100),
    height:hp(100),
    position:'absolute'
  },
  gradient:{
    width:wp(100),
    height:hp(65),
    bottom:0,
    position:'absolute'
  }

})

export default WelcomeScreen