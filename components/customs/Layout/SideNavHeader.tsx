import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { ThemedView } from '@/components/ThemedView';

export function SideNavHeader({ title, onMenuPress, icon = "menu" }: Readonly<{ title: string; onMenuPress: () => void, icon?: string }>) {
  return (
    <ThemedView style={styles.headerContainer}>
      <TouchableOpacity onPress={onMenuPress}>
        <IconSymbol name={icon} color="#fff" size={24} />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});
