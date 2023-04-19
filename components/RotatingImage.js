import React, { useState, useEffect } from 'react';
import { View, Image, Animated } from 'react-native';

const RotatingImage = ({ source, style }) => {
  const [rotateAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      })
    ).start();
  }, [rotateAnim]);

  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={{ alignItems: 'center' }}>
      <Animated.Image
        source={source}
        style={[style, { transform: [{ rotate }] }]}
      />
    </View>
  );
};

export default RotatingImage;
