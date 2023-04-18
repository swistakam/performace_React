import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function MemoryPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Performance Memory</Text>
      <Text>This is the memory performance page</Text>
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
});
