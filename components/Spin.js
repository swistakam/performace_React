// import React, { useState, useEffect } from "react";
// import { Animated, Image, StyleSheet, View } from "react-native";

// export default function MyStatefulWidget() {
//   const [controllers, setControllers] = useState([]);

//   useEffect(() => {
//     const controller1 = Animated.loop(
//       Animated.timing(new Animated.Value(0), {
//         toValue: 1,
//         duration: 5000,
//         useNativeDriver: true,
//       })
//     );
//     const controller2 = Animated.loop(
//       Animated.timing(new Animated.Value(0), {
//         toValue: 1,
//         duration: 1000,
//         useNativeDriver: true,
//       })
//     );

//     setControllers([controller1, controller2]);

//     return () => {
//       controller1.stop();
//       controller2.stop();
//     };
//   }, []);

//   return (
//     <View>
//       {controllers.map((controller, index) => (
//         <RotationWidget key={index} controller={controller} />
//       ))}
//     </View>
//   );
// }

// function RotationWidget({ controller }) {
//   const rotate = controller?.progress.interpolate({
//     inputRange: [0, 1],
//     outputRange: ["0deg", "360deg"],
//   });

//   return (
//     <Animated.View style={[styles.box, { transform: [{ rotate }] }]}>
//       <Image source={require("../assets/images/wallpaper_1.jpg")} />
//     </Animated.View>
//   );
// }

// const styles = StyleSheet.create({
//   box: {
//     width: 200,
//     height: 200,
//     backgroundColor: "green",
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import RotatingImage from './RotatingImage';
import { ScrollView } from 'react-native-gesture-handler';

const ImageSpin = () => {
  return (
    <View style={styles.container}>
    <ScrollView>
      <View style={styles.container}>
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      <RotatingImage
        source={require('../assets/images/wallpaper_1.jpg')}
        style={styles.image}
      />
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
});

export default ImageSpin;


