import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import Menu from '../Componets.js/Menu';

export function header() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 60,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
      }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: 4,
          }}
          source={{
            uri: 'https://i.ibb.co/0m6nrk5/logo2.png',
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={{
            width: '100%',
            height: '100%',
            aspectRatio: 1,
          }}
          source={{
            uri: 'https://i.ibb.co/ZJh01YX/1946429-removebg-preview.png',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

const Home = props => {
  return (
    <View style={styles.mainContainer}>
      <View>{header()}</View>
      <ScrollView>
        <View>
          <View>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
            <Text>home</Text>
          </View>
        </View>
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

export default Home;
