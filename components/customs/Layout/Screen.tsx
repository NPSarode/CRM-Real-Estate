import { ThemedView } from "@/components/ThemedView"
import React from "react"
import { KeyboardAvoidingView, Platform, StyleSheet, ViewStyle, View, Dimensions } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"


const { height } = Dimensions.get("screen")

interface ScreenProps {
    children: React.ReactNode
    style?: ViewStyle
    useScrollView?: boolean
    useSafeAreaView?: boolean
    useKeyboardAvoidingView?: boolean
  }
  
  const Screen: React.FC<ScreenProps> = ({
    children,
    style,
    useScrollView = false,
    useSafeAreaView = false,
    useKeyboardAvoidingView = false
  }) => {
    const Container = useScrollView ? ScrollView : ThemedView
    const Wrapper = useKeyboardAvoidingView ? KeyboardAvoidingView : ThemedView

    return (
      <ThemedView style={[styles.container, style]}>
        {useSafeAreaView ? (
          <SafeAreaView style={{flex: 1, width: '100%'}}>
            <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1, width: '100%' }}>
              <Container 
                contentContainerStyle={styles.wrapperContainer}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
              >
                {children}
              </Container>
            </Wrapper>
          </SafeAreaView>
        ) : (
          <Wrapper behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={[style]}>
            <Container 
              contentContainerStyle={styles.wrapperContainer}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            >
              {children}
            </Container>
          </Wrapper>
        )}
      </ThemedView>
    )
  }

  export default Screen;
  
  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      paddingHorizontal: 30, 
      height: height
    },
    wrapperContainer: {
      flex: 1,
      paddingHorizontal: 15,
    }
  })