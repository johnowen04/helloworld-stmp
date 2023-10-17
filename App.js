import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, color: 'rgb(255,0,0)' }} >Hello, World!</Text>
      <Nilai score='99'></Nilai>
      <Kotak size='50' red='255' green='0' blue='0'></Kotak>
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
  const [red, setRed] = useState(prop.red);
  const [green, setGreen] = useState(prop.green);
  const [blue, setBlue] = useState(prop.blue);

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ fontSize: action * 1, backgroundColor: 'rgb(' + red + ',' + green + ',' + blue + ')' }}
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

      <Button title="R+"
        onPress={() => {
          if (red + 10 <= 255) {
            setRed(red * 1 + 10);
          }
        }} />
      <Button title="R-"
        onPress={() => {
          if (red - 10 > 0) {
            setRed(red * 1 - 10);
          }
        }} />
      <Button title="G+"
        onPress={() => {
          if (green + 10 <= 255) {
            setGreen(green * 1 + 10);
          }
        }} />
      <Button title="G-"
        onPress={() => {
          if (green - 10 > 0) {
            setGreen(green * 1 - 10);
          }
        }} />
      <Button title="B+"
        onPress={() => {
          if (blue + 10 <= 255) {
            setBlue(blue * 1 + 10);
          }
        }} />
      <Button title="B-"
        onPress={() => {
          if (blue - 10 > 0) {
            setBlue(blue * 1 - 10);
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
