import { StyleSheet, TouchableOpacity, TextInput, ViewStyle, TextStyle, } from 'react-native'
import React, { useMemo, useRef } from 'react'
import { SideNavHeader } from '@/components/customs/Layout/SideNavHeader'
import { router, useNavigation } from 'expo-router'
import Screen from '@/components/customs/Layout/Screen'
import Card from '@/components/ui/Card'
import BasicDetail from '@/components/customs/LeadDetails/BasicDetail'
import Notes from '@/components/customs/LeadDetails/Notes'
import { ThemedView } from '@/components/ThemedView'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from '@/constants/Colors'
import QuickActions from '@/components/customs/LeadDetails/QuickActions'
import { IconSymbol } from '@/components/ui/IconSymbol'
import BottomSheet, {  BottomSheetView } from '@gorhom/bottom-sheet'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/ui/Button'

const formFields = [
  {
    id: '1',
    label: "Contact Number",
    placeholder: "Enter your contact number...",
    keyboardType: "phone-pad",
  },
  {
    id: '2',
    label: "Enter location",
    placeholder: "Enter your location...",
  },
  {
    id: '3',
    label: "Email",
    placeholder: "Enter your email...",
    keyboardType: "email-address",
  },
  {
    id: '4',
    label: "Notes",
    placeholder: "Enter your notes...",
    multiline: true,
  },
];


const data = [
  {
    id: '1',
    name: 'Sarah Johnson',
    pivot: 'Contacted',
    mobile_number: '+91 8668729638',
    email: 'sarah.johnson@gmail.com',
    location: 'Downtown',
    budget: '50,00,000',
    last_contact: '3/15/2024',
    requirement: 'Looking for family-friendly neighbourhood'
  },
]


const LeadDetails = () => {
  const navigate = useNavigation()
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%', '93%'], []);

  return (
    <Screen useSafeAreaView useScrollView useKeyboardAvoidingView style={{ paddingHorizontal: 5 }}>
      <SideNavHeader icon='chevron.left' title={"Lead Details"} onMenuPress={() => router.push('/drawer/tabs')} />
      <ScrollView showsVerticalScrollIndicator={false} >
        <Card>
          <BasicDetail data={data} />
        </Card>
        <Card>
          <Notes data={data} />
        </Card>
        <Card>
          <QuickActions data={data} />
        </Card>
      </ScrollView>
      <TouchableOpacity style={styles.editButton} onPress={() => bottomSheetRef.current?.expand()}>
        <IconSymbol name='edit' size={20} color={Colors.dark.text.primary} />
      </TouchableOpacity>

      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        containerHeight={500}
        detached={true}
        backgroundStyle={{ backgroundColor: Colors.dark.secondary, borderRadius: 15 }}
        overDragResistanceFactor={1}
        enablePanDownToClose={true} // Added property
      >
        <BottomSheetView style={styles.contentContainer}>
          <ThemedText type='subtitle' style={styles.formTitle}>Edit Lead Details</ThemedText>
          <ThemedView style={$formWrapper}>
            {formFields.map((field) => (
              <ThemedView key={field.id} style={$inputContainer}>
                <ThemedText style={$label}>{field.label}</ThemedText>
                <TextInput
                  style={[$input]}
                  placeholderTextColor={Colors.dark.text.primary}
                  secureTextEntry
                  {...field}
                />
              </ThemedView>
            ))}
          </ThemedView>
          <Button
            title='Update'
          />
        </BottomSheetView>
      </BottomSheet>
    </Screen>
  );
}

export default LeadDetails

const styles = StyleSheet.create({
  editButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: Colors.dark.background,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.dark.background,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  contentContainer: {
    flex: 1,
    zIndex: 1000,
    backgroundColor: Colors.dark.secondary,
    justifyContent: 'flex-start',
    paddingHorizontal: 15
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.dark.text.primary,
  },
  submitButton: {
    marginTop: 20,
    padding: 15,
    backgroundColor: Colors.dark.primary,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: Colors.dark.text.primary,
    fontWeight: 'bold',
  }
})



const $formWrapper: ViewStyle = {
  width: '100%',
  gap: 20,
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: Colors.dark.secondary,
  paddingBottom: 20
}

const $inputContainer: ViewStyle = {
  width: '100%',
  backgroundColor: Colors.dark.secondary
}
const $label: TextStyle = {
  marginBottom: 5,
  color: Colors.dark.text.secondary,
}
const $input: TextStyle = {
  height: 50,
  borderRadius: 10,
  padding: 10,
  backgroundColor: Colors.dark.background,
  color: Colors.dark.text.primary,
}
