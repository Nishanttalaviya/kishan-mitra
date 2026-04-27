import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const categories = [
  { id: "1", name: "Pesticides", image:require("../../assets/images/pestiside.png") },
  { id: "2", name: "Grains", image: require("../../assets/images/grains.png") },
  { id: "3", name: "Herbs", image: require("../../assets/images/herbales.png") },
];

const products = [
  { id: "1", name: "Elegant", price: "$99", image:require("../../assets/images/elegant.png") },
  { id: "2", name: "Synthy", price: "$90", image: require("../../assets/images/synthyl.png") },
  { id: "3", name: "Cyclops", price: "$95", image: require("../../assets/images/cyclops.png") },
  { id: "4", name: "Elegant", price: "$99", image: require("../../assets/images/elegant.png") },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity>
            <Ionicons name="menu" size={24} color="#2f6f4e" />
          </TouchableOpacity>

          <View style={styles.searchBox}>
            <Ionicons name="search" size={18} color="#888" />
            <TextInput
              placeholder="Hinted search text"
              style={styles.searchInput}
            />
          </View>

          <TouchableOpacity>
            <Ionicons name="heart-outline" size={22} color="#2f6f4e" />
          </TouchableOpacity>
        </View>

        {/* BANNER SECTION */}
<View style={styles.bannerContainer}>
  <Image
    source={require("../../assets/images/homepage.png")}
    style={styles.bannerImage}
  />
</View>

        {/* CATEGORIES */}
        <View style={styles.categoryHeader}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <Text style={styles.viewAll}>View All →</Text>
        </View>

       <FlatList
  data={categories}
  horizontal
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.categoryCard}>
      <Image source={item.image} style={styles.categoryImg} />
      <Text>{item.name}</Text>
    </View>
  )}
/>

        {/* PRODUCTS */}
        <Text style={styles.sectionTitle}>Trending</Text>

        <FlatList
  data={products}
  numColumns={2}
  scrollEnabled={false}
  keyExtractor={(item) => item.id}
  columnWrapperStyle={{ justifyContent: "space-between" }}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={styles.productCard}
      onPress={() =>
        router.push({
          pathname: "/user/product",
          params: {
            name: item.name,
            price: item.price,
          },
        })
      }
    >
      <Image source={item.image} style={styles.productImg} />
      <Text style={styles.productName}>{item.name}</Text>
      <Text style={styles.productPrice}>{item.price}</Text>
    </TouchableOpacity>
  )}
/>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8f0ea",
    paddingHorizontal: 15,
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    height: 40,
  },
  searchInput: {
    marginLeft: 5,
    flex: 1,
  },

  
bannerContainer: {
  width: "100%",
  marginVertical: 10,
},

bannerImage: {
  width: "100%",
  height: 180,          // you can adjust (160–220)
  resizeMode: "cover",  // or "contain"
  borderRadius: 20,
},

  /* CATEGORY */
  categoryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  viewAll: {
    color: "#2f6f4e",
  },
  categoryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dce9df",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryImg: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 5,
  },
  categoryText: {
    fontSize: 14,
  },

  /* PRODUCT */
  productCard: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
  },
  productImg: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },
  productName: {
    fontWeight: "bold",
    marginTop: 5,
  },
  productPrice: {
    color: "#2f6f4e",
    marginTop: 3,
  },

  /* BOTTOM NAV */
  
});