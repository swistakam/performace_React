import React from 'react';
import { StyleSheet, View, Image } from 'react-native';


const gifs = [
    require('../assets/gifs/gif0.gif'),
    require('../assets/gifs/gif1.gif'),
    require('../assets/gifs/gif2.gif'),
    require('../assets/gifs/gif3.gif'),
    require('../assets/gifs/gif4.gif'),
    require('../assets/gifs/gif5.gif'),
    require('../assets/gifs/gif6.gif'),
    require('../assets/gifs/gif7.gif'),
    require('../assets/gifs/gif8.gif'),
    require('../assets/gifs/gif9.gif'),
    require('../assets/gifs/gif10.gif'),
    require('../assets/gifs/gif11.gif'),
    require('../assets/gifs/gif12.gif'),
    require('../assets/gifs/gif13.gif'),
    require('../assets/gifs/gif14.gif'),
    require('../assets/gifs/gif15.gif'),
    require('../assets/gifs/gif16.gif'),
    require('../assets/gifs/gif17.gif'),
    require('../assets/gifs/gif18.gif'),
    require('../assets/gifs/gif19.gif'),
    require('../assets/gifs/gif20.gif'),
    require('../assets/gifs/gif21.gif'),
    require('../assets/gifs/gif22.gif'),
    require('../assets/gifs/gif23.gif'),
    require('../assets/gifs/gif24.gif'),
    require('../assets/gifs/gif25.gif'),
    require('../assets/gifs/gif26.gif'),
    require('../assets/gifs/gif27.gif'),
    require('../assets/gifs/gif28.gif'),
    require('../assets/gifs/gif29.gif'),
    require('../assets/gifs/gif30.gif'),
    require('../assets/gifs/gif31.gif'),
    require('../assets/gifs/gif32.gif'),
    require('../assets/gifs/gif33.gif'),
    require('../assets/gifs/gif34.gif'),
    require('../assets/gifs/gif35.gif'),
    require('../assets/gifs/gif36.gif'),
    require('../assets/gifs/gif37.gif'),
    require('../assets/gifs/gif38.gif'),
    require('../assets/gifs/gif39.gif'),
    require('../assets/gifs/gif40.gif'),
    require('../assets/gifs/gif41.gif'),
    require('../assets/gifs/gif42.gif'),
    require('../assets/gifs/gif43.gif'),
    require('../assets/gifs/gif44.gif'),
    require('../assets/gifs/gif45.gif'),
    require('../assets/gifs/gif46.gif'),
    require('../assets/gifs/gif47.gif'),
    require('../assets/gifs/gif48.gif'),
    require('../assets/gifs/gif49.gif'),
    require('../assets/gifs/gif50.gif'),
    require('../assets/gifs/gif51.gif'),
    require('../assets/gifs/gif52.gif'),
    require('../assets/gifs/gif53.gif'),
    require('../assets/gifs/gif54.gif'),
    require('../assets/gifs/gif55.gif'),
    require('../assets/gifs/gif56.gif'),
    require('../assets/gifs/gif57.gif'),
    require('../assets/gifs/gif58.gif'),
    require('../assets/gifs/gif59.gif')
]

function displayGifs() {
    return gifs.map((gif, index) => (
      <Image
        key={index}
        source={gif}
        style={styles.gif}
      />
    ));
  }
    


export default function MyGifs() {
  return (
    <View style={styles.container}>
        {displayGifs()}
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    },
    gif: {
    width: '16.6%',
    height: 50,
    margin: 5,
    },
    });

  
    