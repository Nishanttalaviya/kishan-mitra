import { Drawer } from "expo-router/drawer";
import {
  StyleSheet,
  SafeAreaView,
  Platform,
  Image,
  Text,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerToggleButton } from "@react-navigation/drawer";
import CustomDrawerContent from "./CustomDrawerContent";

export default function Layout() {
  const CustomBoxHeader = () => (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerBox}>
        
        {/* Drawer Menu Button */}
        <DrawerToggleButton tintColor="#2E7D32" />

        <Text style={styles.headerTitle}>જાહેરાત</Text>

        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.headerLogoSmall}
        />
      </View>
    </SafeAreaView>
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          header: () => <CustomBoxHeader />,
          overlayColor: "rgba(0,0,0,0.3)",
        }}
      >
        <Drawer.Screen name="home" />
        <Drawer.Screen name="post" />
       <Drawer.Screen
  name="profile"
  options={{
    drawerItemStyle: { display: "none" },
    headerShown: false,
  }}
/>
        <Drawer.Screen name="location" />
      </Drawer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: "#F5F7F5",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  headerBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#FFFFFF",
    marginHorizontal: 15,
    marginVertical: 10,
    height: 60,
    borderRadius: 15,
    paddingHorizontal: 10,
    elevation: 5,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E7D32",
    flex: 1,
    textAlign: "center",
  },
  headerLogoSmall: {
    width: 35,
    height: 35,
    resizeMode: "contain",
  },
});