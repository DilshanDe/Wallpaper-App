import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { hp, wp } from '../helpers/comman'
import { LinearGradient } from 'expo-linear-gradient'
import Animated, { FadeInDown } from 'react-native-reanimated'
import { theme } from '../constants/theme'

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
          <Animated.Text
            entering={FadeInDown.delay(400).springify()}
            style={styles.title}>
              Pixels

          </Animated.Text>
          <Text
            style={styles.punchline}>
               Every Pixels Tells a Story

          </Text>
          <View>
            <Pressable style={styles.startButton}>
              <Text style={styles.startText}>Start Explore</Text>
            </Pressable>
          </View>
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
  },
  contentContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'flex-end',
    gap:15,
  },
  title:{
    fontSize:hp(9),
    color:theme.colors.neutral(0.9),
    fontWeight:theme.fontWeights.bold,

  },
  punchline:{
    fontSize:hp(3),
    letterSpacing:1,
    marginBottom:10,
    fontWeight:theme.fontWeights.medium,

  },
  startButton:{
    marginBottom:50,
    backgroundColor:theme.colors.neutral(0.9),
    padding:15,
    paddingHorizontal:90,
    borderRadius:theme.radius.xl,
    borderCurve:'continuous',
  },
  startText:{
    color:theme.colors.white,
    fontSize:hp(3),
    fontWeight:theme.fontWeights.medium,
    letterSpacing:1,
  }





  
})

export default WelcomeScreen