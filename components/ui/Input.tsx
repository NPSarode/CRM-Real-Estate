import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry, style, ...props }) => {
  return (
    <ThemedView style={styles.inputContainer}>
      {label && <ThemedText style={styles.label}>{label}</ThemedText>}
      <TextInput
        style={[styles.input, styles.shadow, style]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={Colors.dark.text.secondary}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </ThemedView>
  );
};

export default Input;


const styles = StyleSheet.create({
  inputContainer: {
    margin: 10,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    color: Colors.dark.text.secondary,
  },
  input: {
    height: 50,
    borderRadius: 10,
    padding: 10,
    backgroundColor: Colors.dark.secondary,
    color: Colors.dark.text.secondary,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
