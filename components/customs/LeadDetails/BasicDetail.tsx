import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import { IconSymbol } from '@/components/ui/IconSymbol'

const BasicDetail = ({ data }: any) => {
    return (
        <ThemedView style={styles.headerContainer}>
            <ThemedView style={styles.header}>
                <ThemedText type='title' style={styles.headerTitle}></ThemedText>
                <View>
                    <ThemedText type='defaultSemiBold' style={styles.name}>Sarah Johnson</ThemedText>
                    <ThemedText style={styles.description}>Contacted</ThemedText>
                </View>
            </ThemedView>
            <ThemedView style={styles.contact}>
                <ThemedText type='subtitle' style={styles.contactTitle}>Contact Information</ThemedText>
                <ThemedView style={styles.cardBody}>
                    <ThemedView style={styles.details}>
                        <IconSymbol name='phone' color={Colors.dark.tabIconDefault} size={20} />
                        <ThemedText style={styles.value}>+91 8668729638</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.details}>
                        <IconSymbol name='email' color={Colors.dark.tabIconDefault} size={20} />
                        <ThemedText style={styles.value}>sarah.johnson@gmail.com</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.details}>
                        <IconSymbol name='location-pin' color={Colors.dark.tabIconDefault} size={20} />
                        <ThemedText style={styles.value}>Downtown</ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
            <ThemedView style={styles.contact}>
                <ThemedText type='subtitle' style={styles.contactTitle}>Property Information</ThemedText>
                <ThemedView style={styles.cardBody}>
                    <ThemedView style={styles.details}>
                        <IconSymbol name='house.fill' color={Colors.dark.tabIconDefault} size={20} />
                        <ThemedText style={styles.value}>3 BHK Apartment</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.details}>
                        <IconSymbol name='rupee' color={Colors.dark.tabIconDefault} size={20} />
                        <ThemedText style={styles.value}>50,00,000</ThemedText>
                    </ThemedView>
                    <ThemedView style={styles.details}>
                        <IconSymbol name='users' color={Colors.dark.tabIconDefault} size={20} />
                        <ThemedText style={styles.value}>Assigned To: John Doe</ThemedText>
                    </ThemedView>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

export default BasicDetail

const styles = StyleSheet.create({
    headerContainer: {
        gap: 20,
        backgroundColor: Colors.dark.secondary,
    },
    header: {
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        backgroundColor: Colors.dark.secondary,
    },
    name: {
        fontSize: 20,
    },
    description: {
        fontSize: 12
    },
    headerTitle: {
        width: 50,
        borderRadius: 50,
        height: 50,
        backgroundColor: Colors.dark.primary,
    },
    contact: {
        backgroundColor: Colors.dark.secondary,
        gap: 10,
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
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    property: {},
})