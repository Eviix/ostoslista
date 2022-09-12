import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [text, setText] = useState('');
  const [data, setData] = useState([]);

  const add = () => {
    setData([...data, { key: text }]);
    setText('');
  }

  const clear = () => {
    setData([])
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <View style={styles.buttons}>
        <Button onPress={add} title="Add item" />
        <Button onPress={clear} title="Clear item" />

      </View>
      <Text>Shopping list</Text>
      <FlatList
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>} />
      <StatusBar style="auto" />
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
  buttons: {
    width: 100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: 75,
    marginBottom: 50,
  },
  input: {
    marginTop: 300,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1
  },
});