import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View, Image, ScrollView, Switch } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/constants/Colors";
import { SideNavHeader } from "@/components/customs/Layout/SideNavHeader";
import { useNavigation } from "expo-router";
import Screen from "@/components/customs/Layout/Screen";
import Input from "@/components/ui/Input";

const Settings = () => {
  const navigate = useNavigation()
  const [profileImage, setProfileImage] = useState('https://kneocloud.com/Uploads/nikhil.sarode@kneoautomation.com.jpeg');

  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.status !== "granted") {
      alert("Permission to access the media library is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1], // Crop to a square
      quality: 1, // High quality
    });

    if (!result.canceled) {
      setProfileImage(result?.assets[0]?.uri);
    }
  };

  return (
    <Screen useSafeAreaView useKeyboardAvoidingView useScrollView style={{paddingHorizontal: 5}}>
      <SideNavHeader title={"Setting"} onMenuPress={() => navigate.openDrawer()} />
      <ScrollView>
      <ThemedView style={styles.container}>

        <ThemedView style={styles.profile}>
          <ThemedText type="title" style={styles.profileTitle}>
            Profile Information
          </ThemedText>

          <View style={styles.profileHeader}>
            <TouchableOpacity style={styles.profilePhoto} onPress={pickImage}>
              {profileImage ? (
                <Image source={{ uri: profileImage }} style={styles.profileImage} />
              ) : (
                <IconSymbol color={Colors.dark.text.primary} name="add-a-photo" size={18} style={styles.profilePhotoIcon} />
              )}
            </TouchableOpacity>
            <ThemedView>
              <ThemedText type="subtitle" style={styles.profileName}>
                Nikhil Sarode
              </ThemedText>
              <ThemedText style={styles.profileDescription}>
                Senior Real Estate Agent
              </ThemedText>
            </ThemedView>
            <ThemedView style={styles.profileForm}></ThemedView>
          </View>

          {/* <View style={styles.profileForm}>
            <ThemedView style={styles.fields}>
                <ThemedText type="subtitle" style={styles.fieldLabel}>Full Name</ThemedText>
                <ThemedText type="title" style={styles.fieldValue}>Nikhil Sarode</ThemedText>
            </ThemedView>
            <ThemedView style={styles.fields}>
                <ThemedText type="subtitle" style={styles.fieldLabel}>Email</ThemedText>
                <ThemedText type="title" style={styles.fieldValue}>nikhil.sarode@gmail.com</ThemedText>
            </ThemedView>
          </View> */}

        </ThemedView>

        <ThemedView style={styles.profile}>
          <ThemedText type="title" style={styles.profileTitle}>
            Notification Settings
          </ThemedText>
          <View style={styles.profileForm}>
            <View style={styles.notificationContainer}>
              <IconSymbol name="notifications" size={25} color={Colors.dark.tabIconDefault} />
              <View style={styles.notification}>
                <ThemedText type="defaultSemiBold" style={styles.notificationHeader}>Email Notifications</ThemedText>
                <ThemedText style={styles.notificationDescription}>Recieve email updates about your account</ThemedText>
              </View>
              <Switch value={true} />
            </View>
            <View style={styles.notificationContainer}>
              <IconSymbol name="email" size={25} color={Colors.dark.tabIconDefault} />
              <View style={styles.notification}>
                <ThemedText type="defaultSemiBold" style={styles.notificationHeader}>Push Notifications</ThemedText>
                <ThemedText style={styles.notificationDescription}>Recieve push notification in your device</ThemedText>
              </View>
              <Switch value={true} />
            </View>
            <View style={styles.notificationContainer}>
              <IconSymbol name="message" size={25} color={Colors.dark.tabIconDefault} />
              <View style={styles.notification}>
                <ThemedText type="defaultSemiBold" style={styles.notificationHeader}>SMS Notifications</ThemedText>
                <ThemedText style={styles.notificationDescription}>Recieve text message for important updates</ThemedText>
              </View>
              <Switch value={true} />
            </View>
          </View>
        </ThemedView>

        {/* <ThemedView style={styles.security}></ThemedView> */}
      </ThemedView>
      </ScrollView>
    </Screen>

  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
  },
  profile: {
    backgroundColor: Colors.dark.secondary,
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 8,
    gap: 20,
  },
  profileTitle: {
    fontSize: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  profilePhoto: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.dark.primary,
    justifyContent: "center",
    alignItems: "center",
    overflow: "visible",
  },
  profilePhotoIcon: {
    position: "absolute",
    bottom: 0,
    right: 0,
    borderRadius: 50,
    backgroundColor: 'transparent',
    padding: 3
  },
  profileImage: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
  },
  profilePhotoPlaceholder: {
    fontSize: 12,
    textAlign: "center",
  },
  profileName: {
    backgroundColor: Colors.dark.secondary,
    fontWeight: "700"
  },
  profileDescription: {
    backgroundColor: Colors.dark.secondary,
    color: Colors.dark.text.secondary,
    fontSize: 14,
    fontWeight: "ultralight"
  },
  profileForm: {
    gap: 15
  },
  fields: {
    backgroundColor: Colors.dark.tertiary,
    padding: 10,
    borderRadius: 12
  },
  notificationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.dark.tertiary,
    borderRadius: 15,
    padding: 10,
  },
  notification: {
    width: "65%",
  },
  notificationHeader: {
    fontSize: 16,
  },
  notificationDescription: {
    fontSize: 12,
    color: Colors.dark.text.tertiary,
    lineHeight: 14,
  },
  fieldLabel: {
    fontSize: 14,
  },
  fieldValue: {
    fontSize: 16,
  },
});
