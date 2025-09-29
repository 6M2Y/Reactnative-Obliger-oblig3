import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View>
      <Text style={styles.footerHeaderText}>Åpningstider</Text>

      <Text style={styles.footerText}>Man-tors: 16.00-00.00</Text>
      <Text style={styles.footerText}>Fre-lør: 16.00-01.00</Text>
      <Text style={styles.footerText}>Søndag: STENGT</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  /* footer style */
  footer: {
    height: 50,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerHeaderText: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  footerText: {
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
