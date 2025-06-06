import { Linking, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { Colors } from '@/constants/Colors'
import { ThemedText } from '@/components/ThemedText'
import { IconSymbol } from '@/components/ui/IconSymbol'

const QuickActions = ({ data }: any) => {

  const onScheduleClick = () => {
    alert("Schedule Clicked")
  };

  const onClickCall = () => {
    const url = `tel:${8668729638}`;
    Linking.openURL(url).catch((err) => {
      console.error("Failed to make a call:", err);
    });
  };

  const onSendMessage = () => {
    const url = `sms:${8668729638}?body=${encodeURIComponent("message")}`;
    Linking.openURL(url).catch((err) => {
      console.error('Failed to send SMS:', err);
    });
  };

  const list = [
    {
      id: 1,
      title: 'Schedule Client',
      icon: 'schedule',
      onclick: onScheduleClick
    },
    {
      id: 2,
      title: 'Call',
      icon: 'phone',
      onclick: onClickCall
    },
    {
      id: 3,
      title: 'Send Message',
      icon: 'message',
      onclick: onSendMessage
    },
  ]

  return (
    <ThemedView style={styles.actionContainer}>
      <ThemedText type='subtitle' style={styles.actionTitle}>Quick Actions</ThemedText>
      <ThemedView style={styles.innerContainer}>
        {
          list.map((item) => (
            <TouchableOpacity key={item.id} onPress={() => item.onclick()} style={styles.items}>
              <IconSymbol name={item.icon} size={20} color={Colors.dark.text.secondary} />
              <ThemedText>{item.title}</ThemedText>
            </TouchableOpacity>))
        }
      </ThemedView>
    </ThemedView>
  )
}

export default QuickActions

const styles = StyleSheet.create({
  actionContainer: {
    backgroundColor: Colors.dark.secondary,
    gap: 20,
  },
  actionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  innerContainer: {
    backgroundColor: Colors.dark.secondary,
    gap: 10,
  },
  items: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
    borderRadius: 10,
    backgroundColor: Colors.dark.tertiary,
  },
})