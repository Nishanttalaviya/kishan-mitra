import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { router } from "expo-router";

export default function OTPScreen() {
  const [otp, setOtp] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={styles.inner}
      >
        {/* Top Version Text */}
        <View style={styles.header}>
        </View>

        {/* Logo Section */}
        <View style={styles.logoContainer}>
          <Image 
            source={require("../../assets/images/logo1.png")} 
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        {/* Instruction Text */}
        <Text style={styles.instructionText}>
          કૃપા કરીને એસએમએસમાં પ્રાપ્ત કરેલ ચકાસણી કોડ દાખલ કરો.
        </Text>

        {/* OTP Input Section */}
        <View style={styles.otpWrapper}>
          <TextInput
            style={styles.otpInput}
            placeholder="X X X X X X"
            placeholderTextColor="#999"
            keyboardType="number-pad"
            maxLength={6}
            value={otp}
            onChangeText={setOtp}
            letterSpacing={10} // Creates the spacing between digits
          />
          {/* Vertical divider line in center */}
          <View style={styles.centerLine} />
        </View>

        {/* Next Button */}
        <TouchableOpacity style={styles.button} activeOpacity={0.8}onPress={() => router.push("/auth/register")}>
          <Text style={styles.buttonText}>આગળ</Text>
        </TouchableOpacity>

        {/* Resend Link */}
        <TouchableOpacity style={styles.resendContainer}>
          <Text style={styles.resendText}>કોડ ફરીથી મોકલો</Text>
        </TouchableOpacity>

        {/* Footer Toast/Message */}
        <View style={styles.toast}>
          <Text style={styles.toastText}>
            6 અંકનો ચકાસણી કોડ તમારા મોબાઇલ નંબર પર મોકલ્યો છે.
          </Text>
        </View>
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
    justifyContent: 'center', // Centers everything vertically
    paddingBottom: 50,        // Shifts everything slightly up
  },
  header: {
    position: 'absolute',
    top: 10,
    right: 30,
  },
  versionText: {
    fontSize: 14,
    color: '#333',
  },
  logoContainer: {
    marginBottom: 40,
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 40,
    color: '#2b2828',
    lineHeight: 28,
  },
  otpWrapper: {
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: '#4CAF50',
    marginBottom: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  otpInput: {
    fontSize: 24,
    textAlign: 'center',
    width: '100%',
    paddingVertical: 10,
    color: '#333',
    fontWeight: 'bold',
  },
  centerLine: {
    position: 'absolute',
    height: '60%',
    width: 2,
    backgroundColor: '#4CAF50',
    top: '20%',
  },
  button: {
    backgroundColor: '#E7F2E4', // Solid green from image
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  buttonText: {
    color: '#005843',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resendContainer: {
    marginTop: 30,
    marginBottom: 20,
  },
  resendText: {
    color: '#005843',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toast: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 5,
    width: '110%', // Wider to match full screen width if needed
    position: 'absolute',
    bottom: 20,
  },
  toastText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
  },
});