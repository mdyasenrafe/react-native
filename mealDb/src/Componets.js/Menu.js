import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {TouchableOpacity, View, StyleSheet, Text, Image} from 'react-native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Home')}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: 'https://i.ibb.co/3d8cMnK/25694.png',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: 'https://i.ibb.co/jW097Pj/flat-11-512.webp',
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: 'https://i.ibb.co/h8vq4H4/c3b2dff7986e701847f213423683f00a.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}>
        <Image
          style={styles.iconStytle}
          source={{
            uri: 'https://i.ibb.co/kq3VHgz/download-removebg-preview.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    display: 'flex',
    // display: 'flex',
  },
  textStyle: {
    textTransform: 'uppercase',
  },
  iconStytle: {
    width: '100%',
    height: 35,
    aspectRatio: 1,
  },
});

export default Menu;
