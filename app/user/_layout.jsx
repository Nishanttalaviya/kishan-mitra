import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
// કારણ કે બંને એક જ ફોલ્ડરમાં છે, એટલે માત્ર './' આવશે
import CustomBottomTab from './CustomBottomTab';
export default function UserLayout() {
  return (
    <View style={styles.container}>
      {/* આ ભાગમાં તમારા બધા પેજ (Home, Profile) દેખાશે */}
      <View style={styles.content}>
        <Stack screenOptions={{ headerShown: false }} />
      </View>

      {/* આ તમારો ટેબ બાર છે જે હંમેશા નીચે રહેશે */}
      <CustomBottomTab />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F4', // મેઈન બેકગ્રાઉન્ડ કલર
  },
  content: {
    flex: 1, // આનાથી પેજ આખી જગ્યા રોકશે અને Blank નહીં દેખાય
  },
});