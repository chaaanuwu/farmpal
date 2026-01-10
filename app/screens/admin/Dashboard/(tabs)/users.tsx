import { View, Text, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function UsersScreen() {
  const uid = auth().currentUser?.uid;
  console.log(uid);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Users Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold' },
});