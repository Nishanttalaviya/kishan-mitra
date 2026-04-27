import React from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
ScrollView
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

const products = [
  { id: "1", name: "Elegant", price: "$99", image:require("../../assets/images/elegant.png") },
  { id: "2", name: "Synthy", price: "$90", image: require("../../assets/images/synthyl.png") },
  { id: "3", name: "Cyclops", price: "$95", image: require("../../assets/images/cyclops.png") },
  { id: "4", name: "Elegant", price: "$99", image: require("../../assets/images/elegant.png") },
];

export default function Product(){

const { id } = useLocalSearchParams();
const router = useRouter();

const product = products.find(p => p.id === id);

return(

<View style={styles.container}>

<ScrollView>

{/* HEADER */}
<View style={styles.header}>
<TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="arrow-back" size={24}/>
</TouchableOpacity>

<Text style={styles.headerTitle}>{product.name}</Text>

<View style={{width:24}}/>
</View>


{/* PRODUCT IMAGE */}

<View style={styles.imageContainer}>
<Image source={product.image} style={styles.image}/>
</View>


{/* DETAILS */}

<View style={styles.detailBox}>

<View style={styles.row}>
<Text style={styles.name}>{product.name}</Text>

<View style={styles.icons}>
<Ionicons name="heart-outline" size={22}/>
<Ionicons name="share-social-outline" size={22}/>
</View>
</View>

<View style={styles.priceRow}>
<Text style={styles.price}>{product.price}</Text>
<Text style={styles.oldPrice}>$500</Text>
<Text style={styles.off}>1% off</Text>
</View>

<Text style={styles.descTitle}>Description:</Text>

<Text style={styles.desc}>
Used for the better growth and to kill the worms.
</Text>

{/* BUY BUTTON */}

<TouchableOpacity style={styles.buyBtn}>
<Text style={styles.buyText}>Buy Now</Text>
</TouchableOpacity>

</View>

</ScrollView>


{/* ADD TO CART */}

<View style={styles.cartBar}>

<View>
<Text>$0</Text>
<Text style={{color:"#888"}}>Price</Text>
</View>

<TouchableOpacity style={styles.cartBtn}>
<Text style={{color:"#fff"}}>Add To Cart</Text>
</TouchableOpacity>

</View>

</View>

);
}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#e8f0ea"
},

header:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
padding:15
},

headerTitle:{
fontSize:18,
fontWeight:"bold"
},

imageContainer:{
alignItems:"center",
marginTop:20
},

image:{
width:200,
height:200,
resizeMode:"contain"
},

detailBox:{
backgroundColor:"#fff",
marginTop:20,
borderTopLeftRadius:25,
borderTopRightRadius:25,
padding:20
},

row:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center"
},

name:{
fontSize:20,
fontWeight:"bold"
},

icons:{
flexDirection:"row",
gap:10
},

priceRow:{
flexDirection:"row",
alignItems:"center",
marginTop:10,
gap:10
},

price:{
fontSize:22,
fontWeight:"bold"
},

oldPrice:{
textDecorationLine:"line-through",
color:"red"
},

off:{
color:"green"
},

descTitle:{
marginTop:15,
fontWeight:"bold"
},

desc:{
color:"#666",
marginTop:5
},

buyBtn:{
backgroundColor:"#cfe3d6",
padding:12,
borderRadius:20,
alignItems:"center",
marginTop:15
},

buyText:{
color:"#2f6f4e",
fontWeight:"bold"
},

cartBar:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:15,
backgroundColor:"#fff"
},

cartBtn:{
backgroundColor:"#2f6f4e",
paddingHorizontal:40,
paddingVertical:12,
borderRadius:25
}

});