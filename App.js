import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
      <View style={styles.secondaryContainer}>
        <Text style={{fontSize: 30, color: '#1E90FF', fontWeight: 'bold', textAlign: 'right'}}>Adria Maria Vieira dos Santos</Text>
        <Text style={{fontSize: 25, color: '#8A2BE2', fontStyle: 'Italic', borderWidth: 1, borderColor: '#FF1493'}}>Computador: 01</Text> 
        <Text style={{fontSize: 25, color: '#8A2BE2', fontStyle: 'Italic', borderWidth: 1, borderColor: '#C71585'}}>Idade: 16 anos</Text> 
        <Text style={{fontSize: 20, color: 'black', backgroundColor: '#FF1493', textAlign: 'center'}}>Sala: 7</Text> 
      </View>
      <View style={{ backgroundColor: 'gray', width: '100%', height: 60 }}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});