import { View, Text, StyleSheet, Image } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        <Text style={styles.textLogo}>ELD</Text>
        <Text>Restuarant</Text>
      </View>
      <Image
        source={require('../asset/menu-burger.png')}
        style={styles.menuIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  /* Header styles */
  menuIcon: {
    width: 24,
    height: 24,
  },
  logoContainer: {
    alignItems: 'center',
  },
  textLogo: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    marginVertical: 10,
  },
});
