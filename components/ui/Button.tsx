import { StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native"
import { ThemedView } from "../ThemedView"
import { ThemedText } from "../ThemedText"
import { Colors } from "@/constants/Colors"

const Button = (props: TouchableOpacityProps & { title: string, leftAccessory?: React.ReactNode, rightAccessory?: React.ReactNode }) => {
  return (
    <TouchableOpacity {...props} style={[styles.button, props.style]}>
      <ThemedView style={styles.buttonContent}>
        {props.leftAccessory && <ThemedView style={styles.accessory}>{props.leftAccessory}</ThemedView>}
        <ThemedText type="defaultSemiBold" style={[styles.buttonText]}>{props.title}</ThemedText>
        {props.rightAccessory && <ThemedView style={styles.accessory}>{props.rightAccessory}</ThemedView>}
      </ThemedView>
    </TouchableOpacity>
  )
}

export default Button


const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.dark.primary,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonContent: {
    flexDirection: 'row',
    backgroundColor: "transparent",
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.dark.text.primary,
    fontSize: 16,
  },
  accessory: {
    backgroundColor: "transparent",
    marginHorizontal: 5,
  },
})