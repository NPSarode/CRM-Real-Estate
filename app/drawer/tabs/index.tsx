import { FlatList, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native'
import React, { useState } from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { Colors } from '@/constants/Colors'
import { SideNavHeader } from '@/components/customs/Layout/SideNavHeader'
import { router, useNavigation } from 'expo-router'
import Screen from '@/components/customs/Layout/Screen'
import Card from '@/components/ui/Card'
import { useQuery } from '@tanstack/react-query'
import { getLeadsByUser } from '@/service/Leads'

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
  {
    id: '2',
    name: 'John Doe',
    pivot: 'Interested',
    mobile_number: '+91 9876543210',
    email: 'john.doe@gmail.com',
    location: 'Uptown',
    budget: '75,00,000',
    last_contact: '3/10/2024',
    requirement: 'Looking for a modern apartment'
  },
  {
    id: '3',
    name: 'Jane Smith',
    pivot: 'Contacted',
    mobile_number: '+91 8765432109',
    email: 'jane.smith@gmail.com',
    location: 'Midtown',
    budget: '60,00,000',
    last_contact: '3/12/2024',
    requirement: 'Looking for a house with a garden'
  },
  {
    id: '4',
    name: 'Michael Brown',
    pivot: 'Interested',
    mobile_number: '+91 7654321098',
    email: 'michael.brown@gmail.com',
    location: 'Suburbs',
    budget: '80,00,000',
    last_contact: '3/14/2024',
    requirement: 'Looking for a spacious villa'
  },
  {
    id: '5',
    name: 'Emily Davis',
    pivot: 'Contacted',
    mobile_number: '+91 6543210987',
    email: 'emily.davis@gmail.com',
    location: 'Downtown',
    budget: '55,00,000',
    last_contact: '3/11/2024',
    requirement: 'Looking for a condo with amenities'
  },
  {
    id: '6',
    name: 'David Wilson',
    pivot: 'Interested',
    mobile_number: '+91 5432109876',
    email: 'david.wilson@gmail.com',
    location: 'Uptown',
    budget: '70,00,000',
    last_contact: '3/13/2024',
    requirement: 'Looking for a penthouse'
  },
  {
    id: '7',
    name: 'Sophia Martinez',
    pivot: 'Contacted',
    mobile_number: '+91 4321098765',
    email: 'sophia.martinez@gmail.com',
    location: 'Midtown',
    budget: '65,00,000',
    last_contact: '3/16/2024',
    requirement: 'Looking for a townhouse'
  },
  {
    id: '8',
    name: 'James Anderson',
    pivot: 'Interested',
    mobile_number: '+91 3210987654',
    email: 'james.anderson@gmail.com',
    location: 'Suburbs',
    budget: '85,00,000',
    last_contact: '3/17/2024',
    requirement: 'Looking for a luxury apartment'
  },
  {
    id: '9',
    name: 'Olivia Thomas',
    pivot: 'Contacted',
    mobile_number: '+91 2109876543',
    email: 'olivia.thomas@gmail.com',
    location: 'Downtown',
    budget: '50,00,000',
    last_contact: '3/18/2024',
    requirement: 'Looking for a family-friendly neighbourhood'
  },
  {
    id: '10',
    name: 'William Jackson',
    pivot: 'Interested',
    mobile_number: '+91 1098765432',
    email: 'william.jackson@gmail.com',
    location: 'Uptown',
    budget: '75,00,000',
    last_contact: '3/19/2024',
    requirement: 'Looking for a modern apartment'
  },
  {
    id: '11',
    name: 'Ava White',
    pivot: 'Contacted',
    mobile_number: '+91 9876543211',
    email: 'ava.white@gmail.com',
    location: 'Midtown',
    budget: '60,00,000',
    last_contact: '3/20/2024',
    requirement: 'Looking for a house with a garden'
  },
  {
    id: '12',
    name: 'Liam Harris',
    pivot: 'Interested',
    mobile_number: '+91 8765432101',
    email: 'liam.harris@gmail.com',
    location: 'Suburbs',
    budget: '80,00,000',
    last_contact: '3/21/2024',
    requirement: 'Looking for a spacious villa'
  },
  {
    id: '13',
    name: 'Isabella Clark',
    pivot: 'Contacted',
    mobile_number: '+91 7654321092',
    email: 'isabella.clark@gmail.com',
    location: 'Downtown',
    budget: '55,00,000',
    last_contact: '3/22/2024',
    requirement: 'Looking for a condo with amenities'
  },
  {
    id: '14',
    name: 'Noah Lewis',
    pivot: 'Interested',
    mobile_number: '+91 6543210983',
    email: 'noah.lewis@gmail.com',
    location: 'Uptown',
    budget: '70,00,000',
    last_contact: '3/23/2024',
    requirement: 'Looking for a penthouse'
  },
  {
    id: '15',
    name: 'Mia Robinson',
    pivot: 'Contacted',
    mobile_number: '+91 5432109874',
    email: 'mia.robinson@gmail.com',
    location: 'Midtown',
    budget: '65,00,000',
    last_contact: '3/24/2024',
    requirement: 'Looking for a townhouse'
  },
  {
    id: '16',
    name: 'Lucas Walker',
    pivot: 'Interested',
    mobile_number: '+91 4321098765',
    email: 'lucas.walker@gmail.com',
    location: 'Suburbs',
    budget: '85,00,000',
    last_contact: '3/25/2024',
    requirement: 'Looking for a luxury apartment'
  },
  {
    id: '17',
    name: 'Charlotte Hall',
    pivot: 'Contacted',
    mobile_number: '+91 3210987656',
    email: 'charlotte.hall@gmail.com',
    location: 'Downtown',
    budget: '50,00,000',
    last_contact: '3/26/2024',
    requirement: 'Looking for a family-friendly neighbourhood'
  },
  {
    id: '18',
    name: 'Henry Allen',
    pivot: 'Interested',
    mobile_number: '+91 2109876547',
    email: 'henry.allen@gmail.com',
    location: 'Uptown',
    budget: '75,00,000',
    last_contact: '3/27/2024',
    requirement: 'Looking for a modern apartment'
  },
  {
    id: '19',
    name: 'Amelia Young',
    pivot: 'Contacted',
    mobile_number: '+91 1098765438',
    email: 'amelia.young@gmail.com',
    location: 'Midtown',
    budget: '60,00,000',
    last_contact: '3/28/2024',
    requirement: 'Looking for a house with a garden'
  },
  {
    id: '20',
    name: 'Alexander King',
    pivot: 'Interested',
    mobile_number: '+91 9876543219',
    email: 'alexander.king@gmail.com',
    location: 'Suburbs',
    budget: '80,00,000',
    last_contact: '3/29/2024',
    requirement: 'Looking for a spacious villa'
  },
];

const AllLeads = () => {
  const navigate = useNavigation<any>()

  const { data: leads } = useQuery({
    queryKey: ['leads'],
    queryFn: () => getLeadsByUser(1)
  })

  console.log({ leads })

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    const newData = data.filter(item =>
      item.name.toLowerCase().includes(text.toLowerCase()) ||
      item.email.toLowerCase().includes(text.toLowerCase()) ||
      item.mobile_number.includes(text)
    );
    setFilteredData(newData);
  };

  const renderItem = ({ item }: any) => (
    <Card onPress={() => router.push(`/LeadDetails/${item.id}`)} touchable>
      <ThemedView style={styles.innerContainer}>
        <ThemedView style={styles.cardHeader}>
          <View >
            <ThemedText type="defaultSemiBold" style={styles.title}>
              {item.name}
            </ThemedText>
            <ThemedText type="subtitle" style={styles.label}>
              {item.pivot}
            </ThemedText>
          </View>
          <View>
            <IconSymbol color={Colors.dark.primary} name='users' size={50} />
          </View>
        </ThemedView>
        <ThemedView style={styles.cardBody}>
          {/* <ThemedView style={styles.details}>
            <IconSymbol name='phone' color={Colors.dark.tabIconDefault} size={20} />
            <ThemedText style={styles.value}>{item.mobile_number}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.details}>
            <IconSymbol name='email' color={Colors.dark.tabIconDefault} size={20} />
            <ThemedText style={styles.value}>{item.email}</ThemedText>
          </ThemedView> 
          <ThemedView style={styles.details}>
            <IconSymbol name='location-pin' color={Colors.dark.tabIconDefault} size={20} />
            <ThemedText style={styles.value}>{item.location}</ThemedText>
          </ThemedView> */}
          <ThemedView style={styles.details}>
            <IconSymbol name='rupee' color={Colors.dark.tabIconDefault} size={20} />
            <ThemedText style={styles.value}>{item.budget}</ThemedText>
          </ThemedView>
          <ThemedView style={styles.details}>
            <IconSymbol name='timelapse' color={Colors.dark.tabIconDefault} size={20} />
            <ThemedText style={styles.value}>Last Contact: {item.last_contact}</ThemedText>
          </ThemedView>
        </ThemedView>

        {/* <ThemedText style={styles.cardFooter}>{item.requirement}</ThemedText> */}
      </ThemedView>
    </Card>
  );

  return (
    <Screen useSafeAreaView style={{ paddingHorizontal: 15 }} useKeyboardAvoidingView>
      <SideNavHeader title={`All Leads (${data.length})`} onMenuPress={() => navigate.openDrawer()} />
      <ThemedView style={$inputContainer}>
        <TextInput
          style={[$input, $shadow]}
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder={"Search leads..."}
          placeholderTextColor={Colors.dark.text.secondary}
          keyboardType="email-address"
          secureTextEntry
        />
      </ThemedView>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        windowSize={10}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        removeClippedSubviews={true}
      />
    </Screen>
  );
}

export default AllLeads

const styles = StyleSheet.create({
  listContainer: {
    paddingBottom: 20,
  },
  innerContainer: {
    width: '100%',
    backgroundColor: 'transparent',
    borderRadius: 8,
    overflow: 'hidden',
  },
  cardHeader: {
    width: '100%',
    flexShrink: 1,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  label: {
    fontSize: 12,
    borderRadius: 10,
    paddingHorizontal: 8,
    backgroundColor: "#a855f7",
    fontWeight: "bold",
    marginRight: "auto",
    marginTop: 5
  },
  title: {
    fontSize: 18,
  },
  description: {
    fontSize: 12,
    color: Colors.dark.icon,
  },
  cardBody: {
    backgroundColor: "transparent",
    gap: 5,
  },
  details: {
    backgroundColor: "transparent",
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  value: {
    fontSize: 12,
    fontWeight: '300',
  },
  cardFooter: {
    color: Colors.dark.text.tertiary,
    marginTop: 20,
    fontSize: 14,
    borderTopColor: Colors.dark.text.tertiary,
    borderTopWidth: 1,
    paddingTop: 10,
  },
})


const $inputContainer: ViewStyle = {
  width: '100%',
  marginBottom: 10,
}
const $label: TextStyle = {
  marginBottom: 5,
  color: Colors.dark.text.secondary,
}
const $input: TextStyle = {
  height: 50,
  borderRadius: 10,
  padding: 10,
  backgroundColor: Colors.dark.secondary,
  color: Colors.dark.text.secondary,
}
const $shadow: TextStyle = {
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 2,
  elevation: 2,
}
