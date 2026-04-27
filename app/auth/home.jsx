import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar,
  Image,
  Dimensions 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { router } from "expo-router";

const { width } = Dimensions.get('window');

export default function AdGridScreen() {
  
  const demoPosts = [
    {
      id: '1',
      userName: 'રમેશભાઈ પટેલ',
      userPhone: '98765 43210',
      title: 'ગીર ગાય વેચવાની છે (૨ વેતર)',
      price: '૪૫,૦૦૦',
      location: 'અમરેલી',
      time: '૨ કલાક પહેલા',
      category: 'Animal',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2021/2/VC/XQ/YV/123321523/product-jpeg-500x500.jpg',
      userAvatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    {
      id: '2',
      userName: 'મનસુખભાઈ ધારજીયા',
      userPhone: '94282 11000',
      title: 'શુદ્ધ કેસર કેરી (૧૦ કિલો બોક્સ)',
      price: '૮૫૦',
      location: 'તલાલા (ગીર)',
      time: '૧૦ મિનિટ પહેલા',
      category: 'Mango',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/5/306746816/QK/YH/XG/11054378/kesar-mango-500x500.jpg',
      userAvatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png'
    },
    {
      id: '3',
      userName: 'નરેશ ગઢવી',
      userPhone: '85112 83223',
      title: 'મહિન્દ્રા ટ્રેક્ટર વેચવાનું છે',
      price: '૨,૧૦,૦૦૦',
      location: 'રાજકોટ',
      time: '૫ કલાક પહેલા',
      category: 'Vehicle',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/XF/XU/XP/1739504/mahindra-tractor-500x500.png',
      userAvatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFF" />

      {/* --- 1. Main Header --- */}
      <View style={styles.headerContainer}>
        <View style={styles.headerCard}>
          <TouchableOpacity onPress={() => router.replace("/auth/profile")} style={styles.headerIconButton}>
            <Ionicons name="menu" size={30} color="#2E7D32" />
          </TouchableOpacity>
          
          <Text style={styles.headerTitleText}>જાહેરાત</Text>
          
          <View style={styles.headerRightContainer}>
            <Image source={require("../../assets/images/logo1.png")} style={styles.headerLogoSmall} />
          </View>
        </View>
      </View>

      {/* --- 2. Location Filter Bar (Show Selected Location) --- */}
      <View style={styles.filterSection}>
        <TouchableOpacity 
          style={styles.filterBar}
          onPress={() => router.push("/auth/location")}
        >
          <View style={styles.filterLeft}>
            <Ionicons name="location-sharp" size={20} color="#2E7D32" />
            <View style={{marginLeft: 10}}>
                <Text style={styles.filterLabel}>તમારું લોકેશન</Text>
                <Text style={styles.filterValue}>અમરેલી, ગુજરાત</Text>
            </View>
          </View>
          <Ionicons name="chevron-down" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* --- 3. Posts List --- */}
        <View style={styles.postsContainer}>
          {demoPosts.map((post) => (
            <TouchableOpacity key={post.id} style={styles.postCard} activeOpacity={0.9}>
              
              {/* User Header */}
              <View style={styles.postUserHeader}>
                <Image source={{ uri: post.userAvatar }} style={styles.userAvatar} />
                <View style={styles.userTextInfo}>
                  <Text style={styles.userNameText}>{post.userName}</Text>
                  <Text style={styles.userPhoneText}>{post.userPhone}</Text>
                </View>
                {/* Mango Badge if Category is Mango */}
                {post.category === 'Mango' && (
                    <View style={styles.mangoBadge}>
                        <MaterialCommunityIcons name="fruit-cherries" size={14} color="white" />
                        <Text style={styles.mangoBadgeText}>તાજી કેરી</Text>
                    </View>
                )}
              </View>

              {/* Product Image */}
              <Image source={{ uri: post.image }} style={styles.postImage} />

              {/* Product Details */}
              <View style={styles.postInfo}>
                <View style={styles.priceRow}>
                   <View>
                        <Text style={styles.postPrice}>₹ {post.price}</Text>
                        {post.category === 'Mango' && <Text style={styles.unitText}>પ્રતિ બોક્સ</Text>}
                   </View>
                   <TouchableOpacity><Ionicons name="heart-outline" size={26} color="#D32F2F" /></TouchableOpacity>
                </View>
                
                <Text style={styles.postTitle}>{post.title}</Text>
                
                <View style={styles.postFooter}>
                  <View style={styles.locationRow}>
                    <Ionicons name="location" size={16} color="#2E7D32" />
                    <Text style={styles.postLocation}>{post.location}</Text>
                  </View>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.actionRow}>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#2E7D32' }]}>
                  <Ionicons name="call" size={18} color="white" />
                  <Text style={styles.actionButtonText}>ફોન કરો</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#25D366' }]}>
                  <Ionicons name="logo-whatsapp" size={18} color="white" />
                  <Text style={styles.actionButtonText}>WhatsApp</Text>
                </TouchableOpacity>
              </View>

            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* 4. Floating Action Button (Share Style) */}
      <View style={styles.fabContainer}>
        <View style={styles.sellTextContainer}><Text style={styles.sellText}>મિત્રોને શેર કરો</Text></View>
        <TouchableOpacity style={styles.fabGreen} onPress={() => router.push("/auth/post")}>
            <Ionicons name="paper-plane" size={28} color="white" />
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7F5' },
  
  // Header Styles
  headerContainer: { paddingHorizontal: 15, paddingTop: 10, backgroundColor: '#FFF', paddingBottom: 5 },
  headerCard: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 5, height: 50
  },
  headerIconButton: { padding: 5 },
  headerTitleText: { color: '#2E7D32', fontSize: 22, fontWeight: '800', flex: 1, textAlign: 'center' },
  headerRightContainer: { flexDirection: 'row', alignItems: 'center' },
  headerLogoSmall: { width: 40, height: 40, resizeMode: 'contain' },

  // Filter Bar Styles
  filterSection: { paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#FFF', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 2 },
  filterBar: {
    backgroundColor: '#F8F9F8', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 15, paddingVertical: 10, borderRadius: 12, borderWidth: 1, borderColor: '#E0E0E0',
  },
  filterLeft: { flexDirection: 'row', alignItems: 'center' },
  filterLabel: { fontSize: 10, color: '#999', fontWeight: 'bold' },
  filterValue: { fontSize: 14, color: '#2E7D32', fontWeight: 'bold' },

  // Post Card Styles
  postsContainer: { paddingHorizontal: 15, paddingTop: 20 },
  postCard: { backgroundColor: 'white', borderRadius: 20, marginBottom: 25, overflow: 'hidden', elevation: 4, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  postUserHeader: { flexDirection: 'row', padding: 15, alignItems: 'center' },
  userAvatar: { width: 45, height: 45, borderRadius: 22.5, backgroundColor: '#F0F0F0' },
  userTextInfo: { marginLeft: 12, flex: 1 },
  userNameText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  userPhoneText: { fontSize: 13, color: '#666' },
  
  // Mango Special Badge
  mangoBadge: { backgroundColor: '#FF8F00', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 15 },
  mangoBadgeText: { color: 'white', fontSize: 11, fontWeight: 'bold', marginLeft: 4 },

  postImage: { width: '100%', height: 280, resizeMode: 'cover' },
  postInfo: { padding: 15 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  postPrice: { fontSize: 24, fontWeight: '900', color: '#2E7D32' },
  unitText: { fontSize: 12, color: '#666', marginTop: -2 },
  postTitle: { fontSize: 18, color: '#444', marginTop: 8, fontWeight: '600' },
  postFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  postLocation: { fontSize: 14, color: '#777', marginLeft: 4 },
  postTime: { fontSize: 13, color: '#999' },

  actionRow: { flexDirection: 'row', padding: 15, borderTopWidth: 1, borderTopColor: '#F5F5F5', justifyContent: 'space-between' },
  actionButton: { flexDirection: 'row', flex: 0.48, height: 48, borderRadius: 12, justifyContent: 'center', alignItems: 'center', elevation: 2 },
  actionButtonText: { color: 'white', fontWeight: 'bold', marginLeft: 8, fontSize: 15 },

  // FAB
  fabContainer: { position: 'absolute', bottom: 25, right: 20, flexDirection: 'row', alignItems: 'center' },
  fabGreen: { backgroundColor: '#2E7D32', width: 60, height: 60, borderRadius: 30, justifyContent: 'center', alignItems: 'center', elevation: 8 },
  sellTextContainer: { backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20, marginRight: 10, elevation: 5, shadowColor: '#000', shadowOpacity: 0.2 },
  sellText: { fontSize: 14, color: '#2E7D32', fontWeight: 'bold' }
});