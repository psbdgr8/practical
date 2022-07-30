import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import CircleButton from 'react-native-circle-floatmenu';
import {Icon} from 'react-native-elements';

const FloatingButton = () => {
  function Refer() {
    return (
      <View>
        <Icon
          name="people-outline"
          type="ionicon"
          color={'#CDCDCD'}
          size={30}
        />
      </View>
    );
  }

  return (
    <View style={styles.btn_container}>
      <CircleButton
        buttonColor="#1C1D1E"
        position="center"
        icon={Refer()}
        btnOutRange="rgba(252,50,50,1)"
        bgColor="rgba(252,50,50,1)"
        degrees={0}>
        <CircleButton.Item onPress={() => console.log('BtnPress')}>
          <Image
            style={styles.topImage}
            source={require('../assets/default_profile.png')}
          />
        </CircleButton.Item>
        <CircleButton.Item onPress={() => console.log('BtnPress')}>
          <Image
            style={styles.topImage}
            source={require('../assets/default_profile.png')}
          />
        </CircleButton.Item>
        <CircleButton.Item onPress={() => console.log('BtnPress')}>
          <Image
            style={styles.topImage}
            source={require('../assets/default_profile.png')}
          />
        </CircleButton.Item>
        <CircleButton.Item onPress={() => console.log('BtnPress')}>
          <Image
            style={styles.topImage}
            source={require('../assets/default_profile.png')}
          />
        </CircleButton.Item>
        <CircleButton.Item
          onPress={() => console.log('BtnPress')}
          buttonColor="white">
          <View
            style={{
              flex: 1,
              borderRadius: 100,
              borderColor: 'orange',
              borderWidth: 2,
              alignItems: 'center',
              justifyContent: 'center',
              bottom: 1.05,
            }}>
            <Icon size={30} name="add" type="ionicon" color="orange" />
          </View>
        </CircleButton.Item>
      </CircleButton>
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  btn_container: {
    elevation: 8,
    borderRadius: 5,
  },
  topImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
    borderRadius: 50,
  },
});
