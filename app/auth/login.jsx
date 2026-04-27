import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";

export default function LoginScreen() {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.inner}
      >       
        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image 
    source={require("../../assets/images/logo1.png")} 
    style={styles.logo}
    resizeMode="contain"
  />
        </View>

        {/* Instruction Text */}
        <Text style={styles.instructionText}>કૃપા કરી તમારો મોબાઈલ નંબર દાખલ કરો.</Text>

        {/* Input Section */}
        <View style={styles.inputWrapper}>
          <View style={styles.countryCode}>
            <Image 
              source={{ uri: 'https://flagcdn.com/w40/in.png' }} 
              style={styles.flag} 
            />
            <Text style={styles.codeText}>IN +91</Text>
            <Text style={styles.dropdownArrow}>▼</Text>
          </View>
          
          <TextInput
            style={styles.input}
            placeholder="મોબાઈલ નંબર"
            keyboardType="phone-pad"
            maxLength={10}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8} onPress={() => router.push("/auth/verify")}>
          <Text style={styles.buttonText}>એસએમએસ દ્વારા કોડ મેળવો</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center', 
    // ADDED: This pushes everything slightly up from the center
    paddingBottom: 100, 
  },
  header: {
    position: 'absolute',
    top: 50, 
    right: 30,
  },
  versionText: {
    fontSize: 14,
    color: '#333',
  },
  logoContainer: {
    // Keep this clean so it follows the inner container's alignment
    alignItems: 'center',
    marginBottom: 40,
  },
  // ... rest of your code remains exactly the same
  logo: {
    width: 120,
    height: 120,
  },
  brandName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D32F2F', 
    marginTop: -20,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 30,
    color: '#2b2828',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50', 
    width: '100%',
    paddingBottom: 5,
    marginBottom: 40,
  },
  countryCode: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  flag: {
    width: 24,
    height: 16,
    marginRight: 8,
  },
  codeText: {
    fontSize: 18,
    fontWeight: '500',
  },
  dropdownArrow: {
    fontSize: 10,
    marginLeft: 5,
    color: '#666',
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#000',
  },
  button: {
    backgroundColor: '#E7F2E4', 
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  buttonText: {
    color: '#005843',
    fontSize: 18,
    fontWeight: 'bold',
  },
});