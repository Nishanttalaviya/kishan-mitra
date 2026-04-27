import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView, 
  StatusBar 
} from 'react-native';
import { router } from "expo-router";

export default function TipsScreen() {
  
  // Bullet point component - અંદર ડિફાઇન કર્યું જેથી કોડ ચોખ્ખો રહે
  const BulletItem = ({ children }) => (
    <View style={styles.bulletPointRow}>
      <Text style={styles.bulletPoint}>•</Text>
      <Text style={styles.mainDescription}>{children}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#E7F2E4" />
      
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>છેતરપિંડી અટકાવવા માટેની ટિપ્સ</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.normalText}>
          અને સ્થળની તપાસ કે ખાતરી કરીને જ વ્યવહાર કરવો. જેથી નુકશાનીનો ભય ન રહે.
        </Text>

        <BulletItem>
          સસ્તું અને મફતની લાલચમાં ન ફસાવ, ઠગ લોકો તમારા કરતા હોશિયાર હોય છે તેવું માનો અને સમજણ થી કોઈપણ વહેવાર કરો. આવા કોઈ ઠગ આર્મીના નામે, ઘરમાં કોઈને બીમારી છે અથવા રૂપિયાની તાત્કાલિક જરૂરિયાત છે અને ઓછી કિંમતે અથવા જે આપો તે કિંમતે માલ આપવાની વાતો કરી લોકોને છેતરવાનું માત્ર કામ કરે છે. માટે આવી કોઈપણ પોસ્ટ એપ્લિકેશનમાં દેખાય તો નીચેના વોટ્સ એપ નંબર પર ફોટો અથવા સ્ક્રીનશોટ તુરંત મોકલો.
        </BulletItem>

        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            વધુ માહિતી માટે હેલ્પલાઈન નંબર: <Text style={styles.boldText}>+91 88112 83223</Text>
          </Text>
          <Text style={styles.warningText}>
            (આ નંબર પીપળાના પાને એપ્લિકેશન નો હેલ્પલાઈન નંબર છે, જાહેરાત નો નંબર નથી.)
          </Text>
        </View>

        <Text style={styles.specialNoteTitle}>ખાસ નોંધ :</Text>

        <BulletItem>
          કોઈપણ વસ્તુની લે-વેચ <Text style={styles.mediumBold}>રૂબરૂ મળીને</Text> જ કરવાનો આગ્રહ રાખો.
        </BulletItem>

        <BulletItem>
          મુલાકાત કરી અને માલ - વસ્તુ <Text style={styles.mediumBold}>ચેક કર્યા વગર</Text> એડવાન્સ રકમનો વહેવાર ન કરો.
        </BulletItem>

        <BulletItem>
          કંઈપણ લે-વેચ કરવા માટે જાહેર સ્થળોએ જ મુલાકાત ગોઠવો.
        </BulletItem>

        <BulletItem>
          લે-વેચ અને મુલાકાત કરવા એકલા જવાનું ટાળો.
        </BulletItem>

        <BulletItem>
          પોલીસ, આર્મી કે કસ્ટમ અધિકારી તરીકે આવતા ફોનથી સતર્ક રહો.
        </BulletItem>

        <BulletItem>
          વાહન ખરીદતી વખતે તે વાહનના તમામ દસ્તાવેજો અને તે વાહન પરની લોન અથવા દેવાનો ઈતિહાસ તપાસવાની <Text style={styles.mediumBold}>એકમાત્ર જવાબદારી ખરીદનારની છે.</Text>
        </BulletItem>

        <BulletItem>
          પેમેન્ટ લેવા માટે સામેની વ્યક્તિને બેંક ખાતા નંબર અને IFSC કોડ સિવાય કોઈ પણ વિગત આપવી નહિ.
        </BulletItem>

        <Text style={styles.thankYouText}>આભાર</Text>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <TouchableOpacity 
          style={styles.bottomButton} 
          onPress={() => router.back()} // અથવા તમારી જરૂરિયાત મુજબનું નેવિગેશન
        >
          <Text style={styles.bottomButtonText}onPress={() => router.push("/auth/home")}>હું ઉપરના મુદ્દાઓનું ધ્યાન રાખીશ.</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#E7F2E4',
    paddingVertical: 15,
    alignItems: 'center',
  },
  headerTitle: {
    color: '#005843',
    fontSize: 20,
    fontWeight: '600',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  normalText: {
    fontSize: 18,
    color: '#444',
    lineHeight: 28,
    marginBottom: 20,
  },
  bulletPointRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  bulletPoint: {
    fontSize: 24,
    color: '#444',
    marginRight: 8,
    lineHeight: 28,
  },
  mainDescription: {
    flex: 1,
    fontSize: 17,
    color: '#444',
    lineHeight: 26,
  },
  infoSection: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  infoText: {
    fontSize: 17,
    color: '#444',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: '700',
    color: '#000',
  },
  warningText: {
    fontSize: 16,
    color: '#D32F2F',
    lineHeight: 24,
    fontWeight: '500',
  },
  specialNoteTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 15,
  },
  mediumBold: {
    fontWeight: '700',
    color: '#000',
  },
  thankYouText: {
    fontSize: 18,
    color: '#444',
    marginTop: 20,
    textAlign: 'center',
  },
  footer: {
    padding: 15,
    backgroundColor: '#fff',
    borderTopWidth: 0.5,
    borderTopColor: '#eee',
  },
  bottomButton: {
    backgroundColor: '#E7F2E4',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  bottomButtonText: {
    color: '#005843',
    fontSize: 18,
    fontWeight: '700',
  },
});