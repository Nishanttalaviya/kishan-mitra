import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { router } from "expo-router";

const menuItems = [
  { icon: "🏠", title: "જાહેરાત" },
  { icon: "📰", title: "સાયબલી જાહેરાત" },
  { icon: "🎨", title: "મોડલેલ જાહેરાત" },
  { icon: "📢", title: "ધંધાદારી જાહેરાત" },
  { icon: "🟢", title: "વોટ્સ એપ કરો" },
  { icon: "▶️", title: "યૂટ્યુબ" },
  { icon: "🔔", title: "સૂચનાઓ", badge: 14 },
  { icon: "🌤️", title: "હવામાન" },
  { icon: "🕸️", title: "મિત્રોને આમંત્રિત કરો" },
  { icon: "⭐", title: "પ્લે સ્ટોર રેટિંગ" },
  { icon: "📘", title: "ફેસબુક" },
];

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={styles.container}
    >
      {/* Header */}
      <TouchableOpacity
        style={styles.header}
        onPress={() => {
          props.navigation.closeDrawer();
          router.push("/user/profile");
        }}
      >
        <Image
          source={{ uri: "https://via.placeholder.com/60" }}
          style={styles.profileImage}
        />

        <View style={styles.userInfo}>
          <Text style={styles.name}>Nishant Talaviya</Text>
          <Text style={styles.phone}>+918511283223</Text>
        </View>
        <TouchableOpacity
        onPress={() => {
          props.navigation.closeDrawer();
          router.push("/user/profile");
        }}
      >
        <Text style={styles.editIcon}>✏️</Text>
      </TouchableOpacity>

        <Image
          source={require("../../assets/images/logo1.png")}
          style={styles.logo}
        />
      </TouchableOpacity>

      {/* Menu */}
      <View style={styles.menuContainer}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.icon}>{item.icon}</Text>

            <Text style={styles.menuText}>{item.title}</Text>

            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 0,
    backgroundColor: "#fff",
    flex: 1,
  },

  header: {
    backgroundColor: "#9E9E9E",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 15,
  },

  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 6,
    backgroundColor: "#ddd",
  },

  userInfo: {
    flex: 1,
    marginLeft: 10,
  },

  name: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },

  phone: {
    color: "#fff",
    fontSize: 13,
    marginTop: 5,
  },

  logo: {
    width: 95,
    height: 55,
    resizeMode: "contain",
  },

  menuContainer: {
    marginTop: 5,
    backgroundColor: "#fff",
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 18,
  },

  icon: {
    fontSize: 24,
    width: 35,
  },

  menuText: {
    fontSize: 16,
    color: "#444",
    flex: 1,
    marginLeft: 10,
  },

  badge: {
    backgroundColor: "#29B6F6",
    borderRadius: 12,
    minWidth: 24,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});