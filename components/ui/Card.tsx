import { StyleSheet, ViewProps, TouchableOpacity } from "react-native";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";


interface CustomCardProps extends ViewProps {
    children: React.ReactNode;
    touchable?: boolean;
  }
  
  const Card: React.FC<CustomCardProps> = ({ children, style, touchable = false, ...props }) => {
    const content = (
      <ThemedView style={[styles.card, style]}>
        {children}
      </ThemedView>
    );
  
    if (touchable) {
      return (
        <TouchableOpacity {...props}>
          {content}
        </TouchableOpacity>
      );
    }
  
    return content;
  };

  export default Card;
  
  const styles = StyleSheet.create({
    card: {
      padding: 20,
      borderRadius: 10,
      marginBottom: 10,
      backgroundColor: Colors.dark.secondary,
      shadowColor: Colors.dark.background,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 2,
    },
  });
