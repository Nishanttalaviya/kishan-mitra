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
import { Ionicons } from '@expo/vector-icons';
import { router } from "expo-router";

const { width } = Dimensions.get('window');

export default function AdGridScreen() {
  
  const demoPosts = [
    {
      id: '1',
      userName: 'રમેશભાઈ પટેલ',
      userPhone: '98765 43210',
      title: 'ગીર ગાય વેચવાની છે',
      price: '૪૫,૦૦૦',
      location: 'અમરેલી',
      time: '૨ કલાક પહેલા',
      image: 'https://5.imimg.com/data5/ANDROID/Default/2021/2/VC/XQ/YV/123321523/product-jpeg-500x500.jpg',
      userAvatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    },
    {
      id: '2',
      userName: 'નરેશ ગઢવી',
      userPhone: '85112 83223',
      title: 'મહિન્દ્રા ટ્રેક્ટર વેચવાનું છે',
      price: '૨,૧૦,૦૦૦',
      location: 'રાજકોટ',
      time: '૫ કલાક પહેલા',
      image: 'https://5.imimg.com/data5/SELLER/Default/2022/9/XF/XU/XP/1739504/mahindra-tractor-500x500.png',
      userAvatar: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E8F5E9" />

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

      {/* --- 2. Location Filter Bar (Header ni niche and Post ni upar) --- */}
      <View style={styles.filterSection}>
        <TouchableOpacity 
          style={styles.filterBar}
          onPress={() => console.log("Open Location Selection")}
        >
          <View style={styles.filterLeft}>
            <Ionicons name="location-sharp" size={20} color="#2E7D32" />
            <Text style={styles.filterText}>તમારું શહેર પસંદ કરો (બધા શહેરો)</Text>
          </View>
          <Ionicons name="chevron-down" size={20} color="#666" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 100 }}>
        
        {/* --- 3. Posts List --- */}
        <View style={styles.postsContainer}>
          {demoPosts.map((post) => (
            <TouchableOpacity key={post.id} style={styles.postCard} activeOpacity={0.9}>
              
              <View style={styles.postUserHeader}>
                <Image source={{ uri: post.userAvatar }} style={styles.userAvatar} />
                <View style={styles.userTextInfo}>
                  <Text style={styles.userNameText}>{post.userName}</Text>
                  <Text style={styles.userPhoneText}>{post.userPhone}</Text>
                </View>
                <TouchableOpacity><Ionicons name="ellipsis-vertical" size={20} color="#666" /></TouchableOpacity>
              </View>

              <Image source={{ uri: post.image }} style={styles.postImage} />

              <View style={styles.postInfo}>
                <View style={styles.priceRow}>
                   <Text style={styles.postPrice}>₹ {post.price}</Text>
                   <TouchableOpacity><Ionicons name="heart-outline" size={26} color="#D32F2F" /></TouchableOpacity>
                </View>
                <Text style={styles.postTitle}>{post.title}</Text>
                <View style={styles.postFooter}>
                  <View style={styles.locationRow}>
                    <Ionicons name="location" size={16} color="#2E7D32" /><Text style={styles.postLocation}>{post.location}</Text>
                  </View>
                  <Text style={styles.postTime}>{post.time}</Text>
                </View>
              </View>

              <View style={styles.actionRow}>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#2E7D32' }]}>
                  <Ionicons name="call" size={18} color="white" /><Text style={styles.actionButtonText}>ફોન કરો</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: '#25D366' }]}>
                  <Ionicons name="logo-whatsapp" size={18} color="white" /><Text style={styles.actionButtonText}>WhatsApp</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Floating Button */}
      <View style={styles.fabContainer}>
        <View style={styles.sellTextContainer}><Text style={styles.sellText}>વેચવા માટે જાહેરાત કરો</Text></View>
        <TouchableOpacity style={styles.fabGreen}><Ionicons name="camera" size={30} color="white" /></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#E8F5E9' },
  
  // 1. Header Styles
  headerContainer: { paddingHorizontal: 15, paddingTop: 10 },
  headerCard: {
    backgroundColor: 'white', height: 60, borderRadius: 15,
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 12, elevation: 4,
  },
  headerIconButton: { padding: 5 },
  headerTitleText: { color: '#2E7D32', fontSize: 20, fontWeight: '700', flex: 1, textAlign: 'center' },
  headerRightContainer: { flexDirection: 'row', alignItems: 'center' },
  headerLogoSmall: { width: 35, height: 35, resizeMode: 'contain' },

  // 2. Filter Bar Styles (New)
  filterSection: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  filterBar: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#C8E6C9', // આછો લીલો બોર્ડર
  },
  filterLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 10,
    fontSize: 14,
    color: '#444',
    fontWeight: '500',
  },

  // 3. Post Card Styles
  postsContainer: { paddingHorizontal: 15 },
  postCard: { backgroundColor: 'white', borderRadius: 15, marginBottom: 20, overflow: 'hidden', elevation: 3 },
  postUserHeader: { flexDirection: 'row', padding: 12, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#F0F0F0' },
  userAvatar: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#EEE' },
  userTextInfo: { marginLeft: 12, flex: 1 },
  userNameText: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  userPhoneText: { fontSize: 13, color: '#666' },
  postImage: { width: '100%', height: 250, resizeMode: 'cover' },
  postInfo: { padding: 15 },
  priceRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  postPrice: { fontSize: 22, fontWeight: 'bold', color: '#2E7D32' },
  postTitle: { fontSize: 18, color: '#444', marginTop: 5, fontWeight: '500' },
  postFooter: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  locationRow: { flexDirection: 'row', alignItems: 'center' },
  postLocation: { fontSize: 14, color: '#666', marginLeft: 4 },
  postTime: { fontSize: 13, color: '#999' },
  actionRow: { flexDirection: 'row', padding: 10, borderTopWidth: 0.5, borderTopColor: '#F0F0F0', justifyContent: 'space-between' },
  actionButton: { flexDirection: 'row', flex: 0.48, height: 45, borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  actionButtonText: { color: 'white', fontWeight: 'bold', marginLeft: 8 },

  fabContainer: { position: 'absolute', bottom: 20, right: 20, flexDirection: 'row', alignItems: 'center' },
  fabGreen: { backgroundColor: '#008054', width: 65, height: 65, borderRadius: 32.5, justifyContent: 'center', alignItems: 'center', elevation: 8 },
  sellTextContainer: { backgroundColor: 'white', paddingHorizontal: 15, paddingVertical: 10, borderRadius: 25, marginRight: 10, elevation: 3 },
  sellText: { fontSize: 13, color: '#D32F2F', fontWeight: 'bold' }
});