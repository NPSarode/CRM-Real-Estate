import { Dimensions, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { router } from 'expo-router'
import Button from '@/components/ui/Button'
import Screen from '@/components/customs/Layout/Screen'

const { height } = Dimensions.get('window')

const Welcome = () => {
  return (
    <Screen >
      <ThemedView style={$main}>
        <ThemedView style={$logo}>
          <IconSymbol name='estate' color={Colors.dark.primary} size={100} />
        </ThemedView>
        <ThemedView style={$description}>
          <ThemedText type="title" style={$title}>Real Estate CRM</ThemedText>
          <ThemedText type='subtitle' style={$subtitle}>Your all in one solution for managing properties, leads and growing your real estate buisiness</ThemedText>
        </ThemedView>
          <Button 
          title="Get Started" 
          onPress={() => { router.push('/login') }}
          rightAccessory={<IconSymbol name='chevron.right' color={Colors.dark.text.primary} size={20} />} 
          />
      </ThemedView>
    </Screen>
  )
}

export default Welcome

const $main: ViewStyle = {
  alignItems: 'center',
  justifyContent: 'space-evenly',
  height: height - 300
}

const $logo: ViewStyle = {
  backgroundColor: "#1B223B",
  padding: 10,
  borderRadius: 10,
}

const $description: ViewStyle = {
  gap: 10,
}

const $title: TextStyle = {
  textAlign: 'center',
  color: Colors.dark.text.primary,
}

const $subtitle: TextStyle = {
  textAlign: 'center',
  color: Colors.dark.text.primary,
}
