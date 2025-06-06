import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

// Custom Tab Bar Component
function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <ThemedView style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        let label;
        if (options.tabBarLabel !== undefined) {
          label = options.tabBarLabel;
        } else if (options.title !== undefined) {
          label = options.title;
        } else {
          label = route.name;
        }

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.innerContainer]}
          >
            {/* <IconSymbol size={20} name={options.tabBarIconName} color={isFocused ? Colors.dark.text.primary : Colors.dark.text.tertiary} /> */}
            <ThemedText 
            style={[styles.tabTitle, { 
              color: isFocused ? Colors.dark.text.primary : Colors.dark.text.tertiary 
              }]}>
              {label}
            </ThemedText>
          </TouchableOpacity>
        );
      })}
    </ThemedView>
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="PendingLeads/index"
        options={{
          title: 'Pending',
          headerShown: false,
          // tabBarIconName: 'today',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="Pending" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ActiveLeads/index"
        options={{
          headerShown: false,
          title: 'Active',
          // tabBarIconName: 'today',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="today" color={color} />,
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: 'All',
          // tabBarIconName: 'paperplane.fill',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  container: { 
    flexDirection: 'row', 
    backgroundColor: Colors.dark.background,
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 40,
    borderRadius: 15
  },
  innerContainer: {    
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'space-evenly', 
    padding: 10,
  },
  tabTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  }
})