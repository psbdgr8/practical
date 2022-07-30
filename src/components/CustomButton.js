import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icon} from 'react-native-elements';
import Svg, {Path} from 'react-native-svg';

const CustomButton = props => {
  function Tab(props) {
    return (
      <Svg width={100} height={70} viewBox="0 0 75 60" {...props}>
        <Path
          d="M75 0v61H0V0c4.1 0 9.4 9 8 7.1C10 21.7 22.5 
          33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 5-7.1 7.9-7.1h-.1z"
          fill={'#1C1D1E'}

        />
        
      </Svg>
    );
  }
  //1C1D1E

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#0E0E0E',
      }}
      pointerEvents="box-none">
      <Tab style={styles.background} />
      <TouchableOpacity style={styles.button} onPress={props.onPress}>
        <View style={{flexDirection: 'row'}}>
        <Icon
        style={styles.icon}
        size={28}
  name='plus-outline'
  type='material-community'
  color='#D57607' />
  <Icon
  style={styles.icon1}
  name='plus-outline'
  size={28}
  type='material-community'
  color='#D57607' /></View>
      </TouchableOpacity>
      <Text style={{color: '#D57607', 
      bottom: 15, fontSize: 12, fontFamily: 'Nexa-Regular'}}>Hustl</Text>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 52,
    height: 52,
    borderRadius: 30,
    backgroundColor: '#1C1D1E',
    bottom: 22,
  },
  background: {
    position: 'absolute',
  },
  icon:{
    marginRight: -5
  },
  icon1:{
marginLeft: -5
  }
});
