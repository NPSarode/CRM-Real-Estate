import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { Colors } from '@/constants/Colors';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SideNavHeader } from '@/components/customs/Layout/SideNavHeader';
import { useNavigation } from 'expo-router';
import Screen from '@/components/customs/Layout/Screen';
import Card from '@/components/ui/Card';

const data = [
  { id: '1', label: 'Active Leads', count: '245', growth: '+12.5%', icon: 'users' },
  { id: '2', label: 'Listed Properties', count: '130', growth: '+5.0%', icon: 'estate' },
  { id: '3', label: 'Appointments', count: '89', growth: '-2.3%', icon: 'calendar' },
  { id: '4', label: 'Closed Deal', count: '103', growth: '10.3%', icon: 'trend-up' },
];

const Dashboard = () => {
  const navigate = useNavigation();

  const renderItem = ({ item }: any) => (
    <Card>
      <ThemedView style={styles.innerContainer}>
        <ThemedView style={styles.textContainer}>
          <ThemedText type="subtitle" style={styles.label}>
            {item.label}
          </ThemedText>
          <ThemedText type="title" style={styles.title}>
            {item.count}
          </ThemedText>
          <ThemedText type="link" style={styles.description}>{item.growth} vs last month</ThemedText>
        </ThemedView>
        <ThemedView style={styles.icon}>
          <IconSymbol name={item.icon} color={Colors.dark.primary} size={70} />
        </ThemedView>
      </ThemedView>
    </Card>
  );

  return (
    <Screen useSafeAreaView style={{paddingHorizontal: 15}}>
      <SideNavHeader title={"OverView"} onMenuPress={() => navigate.openDrawer()} />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </Screen>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  innerContainer: {
    width: '100%',
    backgroundColor: '#202936',
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  textContainer: {
    flexShrink: 1,
    maxWidth: '70%',
    minWidth: '50%',
    padding: 10,
    backgroundColor: '#202936',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    color: Colors.dark.icon,
    marginBottom: 10,
  },
  title: {
    color: Colors.dark.text.primary,
    marginBottom: 10,
  },
  description: {
    fontSize: 12,
    color: Colors.dark.icon,
  },
  icon: {
    maxWidth: '30%',
    minWidth: '50%',
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});
