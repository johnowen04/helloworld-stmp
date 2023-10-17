import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: 'rgb(255,0,0)' }} >Hello, World!</Text>
      <Nilai score='99'></Nilai>
      <Kotak size='50'></Kotak>
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
});

const Kotak = (prop) => {
  const [action, setAction] = useState(prop.size);

  return (
    <View>
      <Text style={{ fontSize: action * 1, backgroundColor: 'rgb(255,0,0)' }}
      >&nbsp;&nbsp;&nbsp;&nbsp;</Text>
      <Button title="Smaller"
        onPress={() => {
          if (action - 5 > 0) {
            setAction(action * 1 - 5);
          }
        }} />
      <Button title="Bigger"
        onPress={() => {
          if (action + 5 <= 100) {
            setAction(action * 1 + 5);
          }
        }} />
    </View>
  );
}

const Nilai = (prop) => {
  const [action, setAction] = useState(prop.score);

  return (
    <View>
      <Text>Skor anda adalah {action} dengan predikat {predikat(action)}</Text>
      <Button title="-5"
        onPress={() => {
          if (action - 5 > 0) {
            setAction(action * 1 - 5);
          }
        }} />
      <Button title="+5"
        onPress={() => {
          if (action + 5 <= 100) {
            setAction(action * 1 + 5);
          }
        }} />
    </View>
  );
}

const predikat = (score) => {
  var predikat = "";

  if (score >= 86 && score <= 100) {
    predikat = "Sangat Baik (A)";
  } else if (score >= 71) {
    predikat = "Baik (B)";
  } else if (score >= 56) {
    predikat = "Cukup (C)";
  } else {
    predikat = "Kurang (D)";
  }

  return predikat;
}
