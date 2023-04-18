import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Performance React Native - testowy</Text>
      <View style={styles.buttons}>
        <Button
          title="Performance CPU"
          onPress={() => navigation.navigate('CPU')}
        />
        <View style={styles.separator} />
        <Button
          title="Performance Memory"
          onPress={() => navigation.navigate('Memory')}
        />
        <View style={styles.separator} />
        <Button 
        title="Spin" 
        onPress={() => navigation.navigate('Spin')} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttons: {
    width: '70%',
  },
  separator: {
    marginVertical: 10,
  },
});
