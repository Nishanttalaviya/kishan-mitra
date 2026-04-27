import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { router } from "expo-router";

export default function Landing() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      {/* Background Image */}
      <Image
        source={require("../assets/images/logo.png")} // replace with your background image
        style={styles.background}
  resizeMode="contain"
      />

      {/* Dark overlay */}
      <View style={styles.overlay} />

      {/* Content */}
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Login or Sign Up to Continue using our app.
          </Text>
        </View>

       <TouchableOpacity
  style={styles.button}
  onPress={() => router.replace("/auth/login")}>
  <Text style={styles.buttonText}>Get Started →</Text>
</TouchableOpacity>

      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  content: {
    flex: 1,
    justifyContent: "space-between",
    padding: 30,
  },
  title: {
    marginTop: 70,
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 16,
    color: "#ddd",
    width: "85%",
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#E7F2E4', 
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  buttonText: {
    color: '#005843',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
