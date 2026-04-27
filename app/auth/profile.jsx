import * as React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

// ગ્રીડ ડેટા (જમણી બાજુના બોક્સ માટે)
const DATA = [
  { id: '1', title: 'ગાય', icon: 'cow' },
  { id: '2', title: 'ઊંટ', icon: 'camel' },
  { id: '3', title: 'ખેત ઓજાર', icon: 'tools' },
  { id: '4', title: 'ટ્રોલી', icon: 'trailer' },
];

// હોમ સ્ક્રીન (ગ્રીડ લેઆઉટ)
function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.gridBox}>
            <MaterialCommunityIcons name={item.icon} size={50} color="#555" />
            <Text style={styles.gridText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// કસ્ટમ ડ્રોઅર (ડાબી બાજુનું મેનુ)
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <View style={styles.profileSection}>
          <Ionicons name="person-circle" size={80} color="#ccc" />
          <Text style={styles.userName}>Nishant Talaviya</Text>
          <Text style={styles.userPhone}>+91 8511283223</Text>
        </View>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100x50' }} // અહીં લોગો મૂકવો
          style={styles.logo} 
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: { backgroundColor: '#2e7d32' },
          headerTintColor: '#fff',
          drawerActiveTintColor: '#2e7d32',
        }}
      >
        <Drawer.Screen name="જાહેરાત" component={HomeScreen} />
        <Drawer.Screen name="સાચવેલી જાહેરાત" component={HomeScreen} />
        <Drawer.Screen name="મોકલેલ જાહેરાત" component={HomeScreen} />
        <Drawer.Screen name="હવામાન" component={HomeScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f0f0', padding: 10 },
  gridBox: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 8,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    elevation: 3, // Android shadow
  },
  gridText: { marginTop: 10, fontSize: 18, fontWeight: 'bold' },
  drawerHeader: {
    backgroundColor: '#888',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: -5,
  },
  profileSection: { flex: 1 },
  userName: { color: '#fff', fontSize: 18, fontWeight: 'bold', marginTop: 5 },
  userPhone: { color: '#fff', fontSize: 14 },
  logo: { width: 80, height: 80, resizeMode: 'contain' }
});