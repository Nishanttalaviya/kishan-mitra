import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

// સિંગલ ઓપ્શન કમ્પોનન્ટ (નીચેના લિસ્ટ માટે)
const ProfileOption = ({ icon, title }) => (
  <TouchableOpacity style={styles.optionItem}>
    <View style={styles.optionLeft}>
      <Ionicons name={icon} size={24} color="#2E7D32" />
      <Text style={styles.optionText}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#CCC" />
  </TouchableOpacity>
);

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* પ્રોફાઈલ સેક્શન */}
        <View style={styles.profileSection}>
          
          {/* બેક બટન - ડાબી બાજુ સેટ કરેલ છે */}
          <TouchableOpacity 
            onPress={() => router.back()} 
            style={styles.backButton}
          >
            <Ionicons name="arrow-back" size={26} color="#2E7D32" />
          </TouchableOpacity>

          <View style={styles.imageContainer}>
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              style={styles.profileImage}
            />
            <TouchableOpacity style={styles.editIcon}>
              <Ionicons name="camera" size={20} color="#FFF" />
            </TouchableOpacity>
          </View>
          
          <Text style={styles.userName}>Nishant Talaviya</Text>
          <Text style={styles.userPhone}>+91 85112 83223</Text>
        </View>

        {/* ઈન્ફોર્મેશન સેક્શન */}
        <View style={styles.infoSection}>
          <ProfileOption icon="person-outline" title="એડિટ પ્રોફાઈલ" />
          <ProfileOption icon="notifications-outline" title="નોટિફિકેશન" />
          <ProfileOption icon="shield-checkmark-outline" title="પ્રાઈવસી પોલિસી" />
          <ProfileOption icon="help-circle-outline" title="મદદ અને સપોર્ટ" />
          
          {/* લોગઆઉટ બટન */}
         <TouchableOpacity
  style={[styles.optionItem, { borderBottomWidth: 0 }]}
  onPress={() => router.push("/")}
>
            <View style={styles.optionLeft}>
              <Ionicons name="log-out-outline" size={24} color="#D32F2F" />
              <Text style={[styles.optionText, { color: '#D32F2F' }]}>લોગઆઉટ</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#D32F2F" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#F5F7F5' 
  },
  profileSection: { 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    paddingVertical: 40, 
    borderBottomLeftRadius: 35, 
    borderBottomRightRadius: 35, 
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    position: 'relative', // આનાથી બેક બટન આ સેક્શનની અંદર સેટ થશે
  },
  backButton: { 
    position: 'absolute', 
    left: 20, 
    top: Platform.OS === 'android' ? 25 : 10, // એન્ડ્રોઇડમાં ઉપરથી થોડી વધુ જગ્યા
    padding: 8,
    zIndex: 10,
  },
  imageContainer: { 
    position: 'relative',
    marginTop: 10
  },
  profileImage: { 
    width: 110, 
    height: 110, 
    borderRadius: 55, 
    borderWidth: 3, 
    borderColor: '#2E7D32' 
  },
  editIcon: { 
    position: 'absolute', 
    bottom: 5, 
    right: 5, 
    backgroundColor: '#2E7D32', 
    padding: 8, 
    borderRadius: 20, 
    borderWidth: 2, 
    borderColor: '#FFF' 
  },
  userName: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#333', 
    marginTop: 15 
  },
  userPhone: { 
    fontSize: 14, 
    color: '#666', 
    marginTop: 5 
  },
  infoSection: { 
    marginTop: 25, 
    backgroundColor: '#FFF', 
    marginHorizontal: 15, 
    borderRadius: 20, 
    paddingHorizontal: 15, 
    elevation: 3,
    marginBottom: 30
  },
  optionItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingVertical: 18, 
    borderBottomWidth: 1, 
    borderBottomColor: '#F0F0F0' 
  },
  optionLeft: { 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  optionText: { 
    fontSize: 16, 
    color: '#333', 
    marginLeft: 15, 
    fontWeight: '500' 
  }
});