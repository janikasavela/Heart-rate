import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState('')
  const [lower, setLower] = useState(0)
  const [upper, setUpper] = useState(0)

  return (
    <View style={styles.container}>
      <Text>Age</Text>
      <TextInput
      keyboardType='number-pad'
      value={age}
      onChangeText={text => { 
        setAge(text)
        setLower(Math.round((220 - text) * 0.65))
        setUpper(Math.round((220 - text) * 0.85))
      }
    }
      ></TextInput>
      <Text>Hr limits</Text>
      <Text>{lower}-{upper}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
