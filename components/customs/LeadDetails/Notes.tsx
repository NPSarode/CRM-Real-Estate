import { StyleSheet } from 'react-native'
import React from 'react'
import { ThemedView } from '@/components/ThemedView'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
import Input from '@/components/ui/Input'

const Notes = ({ data }: any) => {
    return (
        <ThemedView style={styles.headerContainer}>
            <ThemedView style={styles.contact}>
                <ThemedText type='subtitle' style={styles.contactTitle}>Notes</ThemedText>
                <ThemedView style={styles.contents}>
                    <ThemedText style={styles.contentsText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione molestias explicabo quas voluptatibus mollitia soluta autem ipsam sed aut?
                    </ThemedText>
                </ThemedView>
            </ThemedView>
        </ThemedView>
    )
}

export default Notes

const styles = StyleSheet.create({
    headerContainer: {
        gap: 20,
        backgroundColor: Colors.dark.secondary,
    },
    contact: {
        backgroundColor: Colors.dark.secondary,
        gap: 10,
    },
    contactTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    contents: {
        backgroundColor: Colors.dark.tertiary,
        padding: 10,
        borderRadius: 10
    },
    contentsText: {
        fontSize: 14,
    },
})