import React from 'react';
import {header} from './Home';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Menu from '../Componets.js/Menu';
const About = () => {
  return (
    <View style={styles.mainContainer}>
      <View>{header()}</View>
      <ScrollView>
        <Text>Services js</Text>
      </ScrollView>
      <Menu />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // paddingBottom: 50,
    // overflow: 'hidden',
  },
  // paraStyle: {
  //   textAlign: 'left',
  //   fontSize: 18,
  //   color: '#7d7d7d',
  //   marginTop: 30,
  //   paddingBottom: 50,
  //   lineHeight: 27,
  //   fontFamily: 'WorkSans_400Regular',
  // },
  // lineStyle: {
  //   marginBottom: 10,
  //   borderWidth: 0.5,
  //   borderColor: 'grey',
  // },
});

export default About;
