import { Drawer } from "expo-router/drawer";
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Platform, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import { DrawerActions } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function MainLayout() {
  const navigation = useNavigation();

  // ૧. કસ્ટમ બોક્સ હેડર ફંક્શન (ફક્ત હોમ માટે)
  const CustomBoxHeader = (title) => (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBox}>
        <TouchableOpacity 
          onPress={() => router.push("/user/profile")} 
          style={styles.iconButton}
        >
          <Ionicons name="menu" size={28} color="#555" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{title}</Text>

        <TouchableOpacity 
          onPress={() => router.push("/user/profile")}
          style={styles.iconButton}
        >
          <Image 
            source={require("../../assets/images/logo1.png")} 
            style={styles.headerLogoSmall} 
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShown: true }}>
        
        {/* હોમ પેજ - અહીં જ હેડર દેખાશે */}
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "હોમ",
            header: () => CustomBoxHeader("જાહેરાત"),
          }}
        />

        {/* પોસ્ટ પેજ - અહીં headerShown: false કરવાથી એરર અને વધારાનું હેડર બંને જશે */}
        <Drawer.Screen
          name="post"
          options={{
            drawerLabel: "જાહેરાત આપો",
            headerShown: false, 
          }}
        />

        {/* પ્રોફાઈલ પેજ - અહીં પણ હેડર બંધ */}
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: "પ્રોફાઈલ",
            headerShown: false,
          }}
        />
        <Drawer.Screen
  name="location" // અથવા તમારી ફાઈલનું જે નામ હોય તે (દા.ત. 'user/location')
  options={{
    drawerLabel: "લોકેશન",
    headerShown: false, // આનાથી લોકેશન પેજ પરથી પણ હેડર નીકળી જશે
  }}
/>

      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#F5F7F5',
    paddingTop: Platform.OS === 'android' ? 40 : 0,
  },
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginVertical: 10,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  iconButton: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    flex: 1,
  },
  headerLogoSmall: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});