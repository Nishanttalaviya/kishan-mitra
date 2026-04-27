import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ScrollView, 
  SafeAreaView, 
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function PostAdScreen() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [weight, setWeight] = useState('');
  const [description, setDescription] = useState('');
  const [selectedVariety, setSelectedVariety] = useState('કેસર');

  // કેરીની જાતો
  const mangoVarieties = ['કેસર', 'હાફુસ', 'લંગડો', 'રાજાપુરી', 'જમાદાર', 'પાયરી'];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="close" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>કેરીની જાહેરાત આપો</Text>
        <View style={{ width: 28 }} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
          
          {/* --- Image Upload Section --- */}
          <Text style={styles.sectionTitle}>ફોટા ઉમેરો (બોક્સ અથવા કેરીના)</Text>
          <View style={styles.imageUploadRow}>
            <TouchableOpacity style={styles.imagePicker}>
              <Ionicons name="camera" size={32} color="#2E7D32" />
              <Text style={styles.imagePickerText}>ફોટો પાડો</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.imagePicker}>
              <Ionicons name="images" size={32} color="#2E7D32" />
              <Text style={styles.imagePickerText}>ગેલરી</Text>
            </TouchableOpacity>
          </View>

          {/* --- Mango Variety Selection --- */}
          <Text style={styles.sectionTitle}>કેરીની જાત પસંદ કરો</Text>
          <View style={styles.categoryRow}>
            {mangoVarieties.map((item) => (
              <TouchableOpacity 
                key={item} 
                style={[styles.categoryBtn, selectedVariety === item && styles.activeCategoryBtn]}
                onPress={() => setSelectedVariety(item)}
              >
                <Text style={[styles.categoryBtnText, selectedVariety === item && styles.activeCategoryText]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* --- Input Fields --- */}
          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>જાહેરાતનું ટાઇટલ</Text>
            <TextInput 
              style={styles.input} 
              placeholder="દા.ત. શુદ્ધ ગીરની કેસર કેરી"
              value={title}
              onChangeText={setTitle}
            />
          </View>

          <View style={styles.rowInputs}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.inputLabel}>કિંમત (₹)</Text>
              <TextInput 
                style={styles.input} 
                placeholder="ભાવ"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
              />
            </View>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.inputLabel}>વજન (બોક્સ/કિલો)</Text>
              <TextInput 
                style={styles.input} 
                placeholder="દા.ત. 10kg"
                value={weight}
                onChangeText={setWeight}
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.inputLabel}>વધુ વિગત (વર્ણન)</Text>
            <TextInput 
              style={[styles.input, styles.textArea]} 
              placeholder="કેરી વિશે વધુ માહિતી (મીઠાશ, સાઈઝ વગેરે)..."
              multiline={true}
              numberOfLines={4}
              value={description}
              onChangeText={setDescription}
            />
          </View>

          {/* --- Location Info --- */}
          <View style={styles.locationInfo}>
            <Ionicons name="location" size={18} color="#2E7D32" />
            <Text style={styles.locationInfoText}>તમારું લોકેશન: અમરેલી, ગુજરાત</Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

      {/* --- Post Button --- */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.postBtn} onPress={() => alert('કેરીની જાહેરાત સબમિટ થઈ ગઈ!')}>
          <Text style={styles.postBtnText}>જાહેરાત પ્રસિદ્ધ કરો</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  header: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', 
    padding: 15, borderBottomWidth: 1, borderBottomColor: '#EEE', backgroundColor: '#FFF'
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32' },
  scrollContent: { padding: 20 },
  
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 12 },
  
  imageUploadRow: { flexDirection: 'row', gap: 15, marginBottom: 25 },
  imagePicker: { 
    flex: 1, height: 100, borderRadius: 12, backgroundColor: '#F9F9F9', 
    borderWidth: 1, borderColor: '#E0E0E0', borderStyle: 'dashed',
    justifyContent: 'center', alignItems: 'center' 
  },
  imagePickerText: { fontSize: 12, color: '#666', marginTop: 5 },

  categoryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginBottom: 25 },
  categoryBtn: { 
    paddingHorizontal: 15, paddingVertical: 8, borderRadius: 10, 
    borderWidth: 1, borderColor: '#DDD', backgroundColor: '#F9F9F9' 
  },
  activeCategoryBtn: { backgroundColor: '#FF8F00', borderColor: '#FF8F00' },
  categoryBtnText: { color: '#666', fontWeight: '500', fontSize: 13 },
  activeCategoryText: { color: '#FFF' },

  inputGroup: { marginBottom: 20 },
  rowInputs: { flexDirection: 'row', justifyContent: 'space-between' },
  inputLabel: { fontSize: 14, color: '#666', marginBottom: 8, fontWeight: '500' },
  input: { 
    borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 10, 
    paddingHorizontal: 15, height: 50, fontSize: 16, backgroundColor: '#FAFAFA' 
  },
  textArea: { height: 100, paddingTop: 12, textAlignVertical: 'top' },

  locationInfo: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#E8F5E9', 
    padding: 12, borderRadius: 8, marginTop: 10 
  },
  locationInfoText: { fontSize: 13, color: '#2E7D32', marginLeft: 8, fontWeight: '500' },

  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#EEE' },
  postBtn: { 
    backgroundColor: '#2E7D32', height: 55, borderRadius: 12, 
    justifyContent: 'center', alignItems: 'center', elevation: 2 
  },
  postBtnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});