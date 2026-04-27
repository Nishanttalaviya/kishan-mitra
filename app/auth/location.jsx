import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TouchableOpacity, 
  SafeAreaView, 
  FlatList, 
  TextInput,
  StatusBar
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

export default function LocationFilterScreen() {
  const [step, setStep] = useState(1);
  const [search, setSearch] = useState('');
  const [selection, setSelection] = useState({
    state: '',
    district: '',
    taluka: '',
    village: ''
  });

  const data = {
    1: ['ગુજરાત', 'મહારાષ્ટ્ર', 'રાજસ્થાન'],
    2: ['અમરેલી', 'રાજકોટ', 'ભાવનગર', 'જુનાગઢ', 'જામનગર'],
    3: ['બાબરા', 'ધારી', 'સાવરકુંડલા', 'લાઠી', 'ખાંભા'],
    4: ['પીપળવા', 'ખીજડીયા', 'ચરખડીયા', 'વાંકીયા', 'લુણકી']
  };

  const handleSelect = (item) => {
    if (step === 1) setSelection({ ...selection, state: item });
    else if (step === 2) setSelection({ ...selection, district: item });
    else if (step === 3) setSelection({ ...selection, taluka: item });
    else if (step === 4) {
      setSelection({ ...selection, village: item });
      router.back();
      return;
    }
    setStep(step + 1);
    setSearch('');
  };

  // ઉપરના સ્ટેપ્સમાં નામ બતાવવા માટેનું લોજિક
  const getStepDisplay = (s) => {
    if (s === 1) return selection.state || "રાજ્ય";
    if (s === 2) return selection.district || "જિલ્લો";
    if (s === 3) return selection.taluka || "તાલુકો";
    if (s === 4) return selection.village || "ગામ";
  };

  const goBack = () => {
    if (step > 1) setStep(step - 1);
    else router.back();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={26} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>લોકેશન ફિલ્ટર</Text>
        <TouchableOpacity onPress={() => {setStep(1); setSelection({state:'', district:'', taluka:'', village:''})}}>
          <Text style={styles.resetTopText}>રીસેટ</Text>
        </TouchableOpacity>
      </View>

      {/* --- Dynamic Progress Steps (તમારા પ્રશ્ન મુજબ ફેરફાર) --- */}
      <View style={styles.progressWrapper}>
        {[1, 2, 3, 4].map((s) => (
          <View key={s} style={styles.stepContainer}>
            <View style={[
              styles.stepBox, 
              step === s ? styles.currentStepBox : (step > s ? styles.completedStepBox : styles.inactiveStepBox)
            ]}>
              <Text style={[
                styles.stepText, 
                step >= s ? styles.activeText : styles.inactiveText
              ]}>
                {getStepDisplay(s)}
              </Text>
            </View>
            {s < 4 && <Ionicons name="chevron-forward" size={14} color="#CCC" style={{marginHorizontal: 4}} />}
          </View>
        ))}
      </View>

      {/* Search Bar */}
      <View style={styles.searchWrapper}>
        <View style={styles.searchBox}>
          <Ionicons name="search" size={20} color="#999" />
          <TextInput 
            placeholder="અહીં શોધો..." 
            style={styles.searchInput}
            value={search}
            onChangeText={setSearch}
          />
        </View>
      </View>

      {/* List */}
      <FlatList 
        data={data[step].filter(item => item.includes(search))}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cardItem} onPress={() => handleSelect(item)}>
            <Text style={styles.itemLabel}>{item}</Text>
            <Ionicons name="add-circle-outline" size={22} color="#2E7D32" />
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F5' },
  
  header: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    padding: 15, backgroundColor: '#FFF', elevation: 2 
  },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  backBtn: { padding: 5 },
  resetTopText: { color: '#D32F2F', fontWeight: 'bold', fontSize: 14 },

  // Progress Tracker (નામ બતાવવા માટેની સ્ટાઈલ)
  progressWrapper: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
    paddingVertical: 15, backgroundColor: '#FFF', borderBottomWidth: 1, borderBottomColor: '#EEE'
  },
  stepContainer: { flexDirection: 'row', alignItems: 'center' },
  stepBox: { 
    paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8, 
    borderWidth: 1, minWidth: 60, alignItems: 'center' 
  },
  currentStepBox: { backgroundColor: '#E8F5E9', borderColor: '#2E7D32' },
  completedStepBox: { backgroundColor: '#2E7D32', borderColor: '#2E7D32' },
  inactiveStepBox: { backgroundColor: '#F9F9F9', borderColor: '#EEE' },
  
  stepText: { fontSize: 11, fontWeight: 'bold' },
  activeText: { color: '#FFF' }, // પૂરા થયેલા સ્ટેપ માટે સફેદ ટેક્સ્ટ
  inactiveText: { color: '#999' },
  
  // Current Step Text color override
  activeText: { color: 'white' }, 

  searchWrapper: { padding: 15 },
  searchBox: { 
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', 
    borderRadius: 10, paddingHorizontal: 10, height: 45, elevation: 1
  },
  searchInput: { flex: 1, marginLeft: 10 },

  cardItem: { 
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginBottom: 8, elevation: 1
  },
  itemLabel: { fontSize: 16, color: '#333', fontWeight: '500' }
});