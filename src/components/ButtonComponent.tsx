import { Text, Pressable, StyleSheet } from 'react-native';

export default function ButtonComponent({
  title,
  action,
}: {
  title: string;
  action: () => void;
}) {
  return (
    <Pressable onPress={action} style={styles.btn}>
      <Text>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btn: {
    marginVertical: 15,
    paddingHorizontal: 16,
    borderColor: '#0b0c0bff',
    borderWidth: 1,
    paddingVertical: 10,
    borderRadius: 5,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
});
