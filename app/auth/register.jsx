import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  SafeAreaView, 
  ScrollView,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function App() {
  const [agree, setAgree] = useState(false);

  // Input Field Component
  const InputField = ({ label, value, isPicker = false, placeholder = "" }) => (
    <View style={styles.inputContainer}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <TouchableOpacity activeOpacity={isPicker ? 0.7 : 1} style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder={placeholder}
          editable={!isPicker}
          placeholderTextColor="#999"
        />
        {isPicker && (
          <Ionicons name="chevron-forward" size={20} color="#333" />
        )}
      </TouchableOpacity>
      <View style={styles.underline} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#E7F2E4" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>નોંધણી</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* અગાઉના ફિલ્ડ્સ */}
        <InputField label="નામ" value="Nishant" />
        <InputField label="અટક" value="Talaviya" />
        <InputField label="મોબાઈલ નંબર" value="+918511283223" />
        <InputField label="રાજ્ય" value="ગુજરાત" isPicker={true} />
        <InputField label="જીલ્લો" value="ગીર સોમનાથ" isPicker={true} />

        {/* નવા ઉમેરાયેલા ફિલ્ડ્સ (બીજા ફોટા મુજબ) */}
        <InputField label="તાલુકા" value="તલાલા" isPicker={true} />
        <InputField label="ગામ" value="માધુપુર જાંબુર" isPicker={true} />
        <InputField label="સરનામું" value="Madhupur Gir" />

        {/* Terms and Conditions Section */}
        <View style={styles.checkboxSection}>
          <TouchableOpacity 
            style={[styles.checkbox, agree && styles.checkboxChecked]} 
            onPress={() => setAgree(!agree)}
          >
            {agree && <Ionicons name="checkmark" size={16} color="white" />}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            હું તમામ નિયમો અને શરતોને પાલનકર્તા છું.
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.linkText}>
            નિયમો અને શરતો વાંચવા માટે અહીં ક્લિક કરો.
          </Text>
        </TouchableOpacity>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={() => router.push("/auth/condition")}>
          <Text style={styles.submitButtonText}>નોંધણી</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#E7F2E4',
    paddingTop: 15,
    paddingBottom: 15,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#005843',
    fontSize: 22,
    fontWeight: 'bold',
  },
  
  scrollContent: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#888',
    fontSize: 16,
    marginBottom: 5,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    fontSize: 18,
    color: '#000',
    paddingVertical: 5,
    flex: 1,
  },
  underline: {
    height: 1,
    backgroundColor: '#ccc',
    marginTop: 2,
  },
  checkboxSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 2,
    borderColor: '#777',
    borderRadius: 3,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#005843',
    borderColor: '#005843',
  },
  checkboxText: {
    color: '#E53935', // લાલ રંગ જેવો ફોટામાં છે
    fontSize: 14,
    fontWeight: '500',
  },
  linkText: {
    color: '#FF5722', // ઓરેન્જ રંગ જેવો ફોટામાં છે
    marginTop: 15,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
  },
  submitButton: {
    backgroundColor: '#E7F2E4',
    padding: 15,
    borderRadius: 5,
    marginTop: 30,
    alignItems: 'center',
     borderWidth: 1,
     borderColor: '#4CAF50',
  },
  submitButtonText: {
    color: '#005843',
    fontSize: 18,
    fontWeight: 'bold',
  },
});