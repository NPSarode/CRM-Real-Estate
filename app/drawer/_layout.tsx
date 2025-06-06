import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { ThemedView } from '@/components/ThemedView';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { router } from 'expo-router';

function CustomDrawerContent(props:any) {

  const handleLogout = () => {
    // Implement your logout logic here
    router.dismissAll()
  };


  return (
    <ThemedView style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        {/* Custom User Profile Section */}
        <ThemedView style={styles.profileContainer}>
          <Image
            source={{ uri: 'https://kneocloud.com/Uploads/nikhil.sarode@kneoautomation.com.jpeg' }} // Replace with actual user image URL
            style={styles.profileImage}
          />
          <ThemedText style={styles.profileName}>Nikhil Sarode</ThemedText>
          <ThemedText style={styles.profileEmail}>nikhilsarode@gmail.com</ThemedText>
        </ThemedView>

        {/* Drawer Items */}
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <IconSymbol name="logout" color={Colors.dark.icon} size={20} />
        <ThemedText style={styles.logoutText}>Logout</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
      <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />} >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Dashboard',
            title: 'Overview',
            headerShown: false,
            swipeEnabled: true,
            drawerIcon: ({ color, size }) => (
              <IconSymbol name='house.fill' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="tabs" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Leads',
            title: 'Leads',
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <IconSymbol name='users' color={color} size={size} />
            ),
          }}
        />
        {/* <Drawer.Screen
          name="Leads/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Leads',
            title: 'Leads',
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <IconSymbol name='users' color={color} size={size} />
            ),
          }}
        /> */}
        <Drawer.Screen
          name="Properties/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Properties',
            title: 'Properties',
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <IconSymbol name='estate' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Appointments/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Appointments',
            title: 'Appointments',
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <IconSymbol name='calendar' color={color} size={size} />
            ),
          }}
        />
        <Drawer.Screen
          name="Settings/index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            headerShown: false,
            drawerIcon: ({ color, size }) => (
              <IconSymbol name='settings' color={color} size={size} />
            ),
          }}
        />
      </Drawer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}


const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: Colors.dark.background, // Light background color
    marginBottom: 10,
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.dark.text.primary,
  },
  profileEmail: {
    fontSize: 14,
    color: Colors.dark.text.primary,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 40,
    // marginBottom: 20,
    borderTopWidth: 1,
    borderTopColor: Colors.dark.text.tertiary,
  },
  logoutText: {
    fontSize: 16,
    color: Colors.dark.text.secondary,
    marginLeft: 10,
  },
});