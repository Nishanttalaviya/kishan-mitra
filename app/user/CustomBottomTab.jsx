import React from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text, 
  Dimensions, 
  Platform 
} from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { router, usePathname } from 'expo-router';

const { width } = Dimensions.get('window');

const CustomBottomTab = () => {
  const pathname = usePathname();

  const isHome = pathname.includes('/home');
  const isProfile = pathname.includes('/profile');

  return (
    <View style={styles.navWrapper}>
      <View style={styles.navContainer}>
        
        {/* Home */}
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => router.replace("/user/home")}
        >
          <Feather name="home" size={24} color={isHome ? "#2E7D32" : "#94a3b8"} />
          <Text style={[styles.navLabel, { color: isHome ? "#2E7D32" : "#94a3b8" }]}>Home</Text>
        </TouchableOpacity>
        
        {/* વચ્ચે પ્લસ બટન માટે જગ્યા */}
        <View style={{ width: 80 }} />

        {/* Profile */}
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => router.replace("/user/profile")}
        >
          <Feather name="user" size={24} color={isProfile ? "#2E7D32" : "#94a3b8"} />
          <Text style={[styles.navLabel, { color: isProfile ? "#2E7D32" : "#94a3b8" }]}>Profile</Text>
        </TouchableOpacity>
      </View>

      {/* Floating Center Button (+) */}
      <TouchableOpacity 
        style={styles.mainFab} 
        activeOpacity={0.9}
        onPress={() => router.push("/user/post")}
      >
        <View style={styles.fabInnerCircle}>
          <MaterialCommunityIcons name="plus" size={35} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navWrapper: {
    position: 'absolute',
    bottom: 0,
    width: width,
    alignItems: 'center',
    // નીચેથી થોડી જગ્યા રાખવી હોય તો (નહીતર 0 કરી શકો)
    paddingBottom: Platform.OS === 'ios' ? 25 : 10, 
    zIndex: 1000,
  },
  navContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // 'width' વધારીને 100% કરી જેથી સાઈડમાં જગ્યા ન રહે
    width: '100%', 
    height: 70,
    // બોર્ડર રેડિયસ માત્ર ઉપરના ખૂણે આપવી હોય તો (તમારા ફોટા મુજબ)
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    // --- Border Color અહીં એડ કર્યો છે ---
    borderWidth: 1,
    borderColor: '#E0E0E0', 
    // Shadows
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  navLabel: {
    fontSize: 11,
    marginTop: 2,
    fontWeight: '600',
  },
  mainFab: {
    position: 'absolute',
    // બટનને બારની લાઈન પર સેટ કરવા માટે
    top: -25, 
    alignSelf: 'center',
    zIndex: 1100,
  },
  fabInnerCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#2E7D32',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: 'white', // બાર સાથે મેચ કરવા સફેદ બોર્ડર
    elevation: 5,
    shadowColor: '#2E7D32',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  }
});

export default CustomBottomTab;