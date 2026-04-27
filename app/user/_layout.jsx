import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function UserLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,

        tabBarActiveTintColor: "#2f6f4e",
        tabBarInactiveTintColor: "gray",

        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          height: 65,
          borderRadius: 40,
          backgroundColor: "#f2f2f2",
          elevation: 10,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "home") iconName = "home-outline";
          if (route.name === "bag") iconName = "bag-handle-outline";
          if (route.name === "cart") iconName = "cart-outline";
          if (route.name === "profile") iconName = "person-outline";

          return <Ionicons name={iconName} size={26} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="home" />

      <Tabs.Screen
        name="bag"
        options={{ href: null }}   // page vagar icon show
      />

      <Tabs.Screen
        name="cart"
        options={{ href: null }}
      />

      <Tabs.Screen
        name="profile"
        options={{ href: null }}
      />
    </Tabs>
  );
}