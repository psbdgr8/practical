import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import RadialGradient from 'react-native-radial-gradient';
import {Icon} from 'react-native-elements';

const Notification = () => {
  return (
    <View style={styles.container}>
      <RadialGradient
        style={{
          width: 400,
          height: 400,
          position: 'absolute',
          top: -300,
        }}
        colors={['#fff', '#0E0E0E']}
        stops={[-2, 3]}
        center={[195, 1]}
        radius={350}
      />

      <View style={styles.row}>
        <View style={styles.row2}>
          <Icon name="location-outline" size={25} type="ionicon" color="#fff" />
          <Text style={styles.text}>Bengaluru</Text>
        </View>
        <View style={styles.row3}>
          <Icon
            size={30}
            name="add-circle-outline"
            type="ionicon"
            color="#fff"
          />
          <Image
            style={styles.topImage}
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/2048px-Circle-icons-profile.svg.png',
            }}
          />
        </View>
      </View>
      <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Text style={{color: "#fff", fontSize: 40}}>
        Notification
      </Text>
      </View>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 6,
    fontWeight: "bold"
  },
  row: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    left: 20,
    justifyContent: 'center',
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    right:20
  },
  topImage: {
    width: 30,
    height: 30,
    marginLeft: 10
  },
});
