import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import React from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import RadialGradient from 'react-native-radial-gradient';
import {Icon} from 'react-native-elements';
import FloatingButton from '../components/FloatingButton';

const Hustl = () => {
  function HustlIcon() {
    return (
      <TouchableOpacity style={styles.button}>
        <Icon
          style={styles.icon}
          size={28}
          name="plus-outline"
          type="material-community"
          color="#CDCDCD"
        />
        <Icon
          style={styles.icon1}
          name="plus-outline"
          size={28}
          type="material-community"
          color="#CDCDCD"
        />
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <RadialGradient
        style={{
          width: 400,
          height: 400,
          position: 'absolute',
          top: -310,
        }}
        colors={['#fff', '#0E0E0E']}
        stops={[-2, 3]}
        center={[195, 1]}
        radius={340}
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
            source={require('../assets/default_profile.png')}
          />
        </View>
      </View>
      <View style={styles.container1}>
        <View style={styles.row1}>
          <Text style={styles.title}>Logo Design Brief</Text>
          <View style={{flexDirection: 'row'}}>
          <Icon
            size={25}
            name="play-circle-outline"
            type="ionicon"
            color="orange"
          />
          <Image
            style={styles.wave}
            source={require('../assets/wave.png')}
          />
          </View>
        </View>
        <View style={styles.scroll}>
          <ScrollView>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum ante erat, id tempus purus mattis semper. Duis finibus
              nisi sed fringilla. Cras sagittis facilisis ligula.
              {'\n'}
              {'\n'}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              elementum ante erat, id tempus purus mattis semper. Duis finibus
              nisi sed fringilla. Cras sagittis facilisis ligula.
            </Text>
          </ScrollView>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.box}>
            <Icon name="pricetag-outline"
            type='ionicon' color={'gray'} size={20} iconStyle={{color: "gray"}} />
            <View style={styles.col}>
              <Text style={styles.tag}>Tags</Text>
              <Text style={styles.boxTitle}>Fun, Minimal, Attractive</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.box}>
          <Icon name="location-outline" type="ionicon" color={"gray"} size={20} iconStyle={{color: "gray"}} />
            <View style={styles.col}>
              <Text style={styles.tag}>Location</Text>
              <Text style={styles.boxTitle}>Any</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.box}>
            <Icon name="file-picture-o" type='font-awesome' color={'gray'} size={20} 
            iconStyle={{
              color: "gray"
            }}/>
            <View style={styles.col}>
              <Text style={styles.tag}>Category</Text>
              <Text style={styles.boxTitle}>
                Logo Design, Food and Beverage
              </Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.box}>
            <Icon name="calendar" type='font-awesome' color={'gray'} size={20} iconStyle={{color: "gray"}} />
            <View style={styles.col}>
              <Text style={styles.tag}>Posted on</Text>
              <Text style={styles.boxTitle}>08 Aug 2021</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.box}>
            <Icon name="calendar-times-o" type='font-awesome' color={'gray'} size={20} iconStyle={{color: "gray"}} />
            <View style={styles.col}>
              <Text style={styles.tag}>Due on</Text>
              <Text style={styles.boxTitle}>08 Sep 2021</Text>
            </View>
          </View>
          <View style={styles.line}></View>
          <View style={styles.box}>
            <Icon name="money" type='font-awesome' color={'gray'} size={20} iconStyle={{color: "gray"}} />
            <View style={styles.col}>
              <Text style={styles.tag}>Budget</Text>
              <Text style={styles.boxTitle}>₹ 15,000</Text>
            </View>
          </View>
        </View>
        <View style={styles.modalContainer}>
       <HustlIcon/><FloatingButton/></View>
      </View>
    </SafeAreaView>
  );
};

export default Hustl;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E0E0E',
  },
  container1: {
    flex: 1,
    margin: 20,
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    marginLeft: 6,
    fontFamily: "Vag"
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
    right: 20,
  },
  topImage: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  wave: {
    width: 60,
    height: 30,
  },
  row1: {
    flexDirection: 'row',
    justifyContent:'space-between',
    
  },
  title: {
    fontSize: 20,
    color: 'white',
    fontFamily: "Nexa-Heavy"
  },
  scroll: {
    marginTop: 10,
    height: 85,
  },
  description: {
    color: '#fff',
    fontSize: 12,
  },
  box: {
    marginTop: 10,
    flexDirection: 'row',
    margin: 10,
  },
  mainBox: {
    marginLeft:15,
    margin: 12,
  },
  line: {
    backgroundColor: '#4A4A4A',
    borderWidth: 0.7,
    borderColor: '#4A4A4A',
  },
  col: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  tag: {
    color: 'gray',
    fontSize: 12,
  },
  boxTitle: {
    color: 'white',
    fontSize: 12,
    fontFamily: "Nexa-Bold"
  },
  modalContainer: {
    left:5,
    marginVertical: 20,
    height: 100,
    flexDirection: "row-reverse",
    alignItems:'center',
    justifyContent:'space-evenly'
  },
  icon:{
    marginRight: -5,
  },
  icon1: {
    marginLeft: -5,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 62,
    height: 62,
    borderRadius: 35,
    backgroundColor: '#1C1D1E',
    flexDirection: 'row',
    alignSelf:'flex-start'
  },
});
