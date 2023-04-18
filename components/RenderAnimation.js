import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

export default function RenderAnimation() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Render Animation</Text>
      <ScrollView>
        <View style={styles.imagesContainer}>
          <Image
            source={require('../assets/images/wallpaper_1.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_2.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_3.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_4.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_5.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_1.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_2.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_3.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_4.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_5.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_1.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_2.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_3.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_4.jpg')}
            style={styles.image}
          />
          <Image
            source={require('../assets/images/wallpaper_5.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.text}>Elo pomelo sukinsynie!</Text>
      </ScrollView>
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
  imagesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});
