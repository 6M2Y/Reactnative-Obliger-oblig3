import { View, Text, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './src/components/Header';
import ButtonComponent from './src/components/ButtonComponent';
import Infosection from './src/components/Infosection';
import Footer from './src/components/Footer';

export default function App() {
  const actionBtns = [
    {
      title: 'BOOK BORD',
      action: () => Alert.alert('Booking er under utvikling!'),
    },
    {
      title: 'MENYER',
      action: () => Alert.alert('Menyer er under utvikling!'),
    },
    {
      title: 'LOKALER',
      action: () => Alert.alert('Lokaler er under utvikling!'),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      {/* Header section*/}
      <Header /> {/* Header component */}
      {/* Content section */}
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Julen nærmer seg med stormskritt – sikre dere plass nå!
        </Text>

        {/* button component */}
        {actionBtns.map((button, index) => (
          <ButtonComponent
            key={index}
            title={button.title}
            action={button.action}
          />
        ))}
      </View>
      {/* Info section */}
      <Infosection /> {/* Infosection component */}
      {/* Footer section */}
      <Footer /> {/* Footer component */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },

  /* content styles */
  content: {
    marginVertical: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },

  contentText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    paddingHorizontal: 30,
    paddingVertical: 10,
    backgroundColor: '#f0f0f0',
    lineHeight: 30,
  },
});
