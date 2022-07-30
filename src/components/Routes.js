import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import {Icon} from 'react-native-elements';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import Hustl from '../screens/Hustl';
import Settings from '../screens/Settings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Notification from '../screens/Notification';
import { RFPercentage } from 'react-native-responsive-fontsize';
import CustomButton from './CustomButton';


const Tab = createBottomTabNavigator();


const Routes = () =>{
    return(
      <NavigationContainer>
       <Tab.Navigator
    
        initialRouteName="Hustl"
        screenOptions={({route}) => ({
            headerShown: false,
          tabBarActiveTintColor: '#B3650A',
          tabBarInactiveTintColor: "#666769",
          tabBarShowLabel: true,
          tabBarStyle: {
            backgroundColor: "#1C1D1E",
            height: RFPercentage(7),
            borderBottomEndRadius: 20,
            borderBottomStartRadius: 20,
            position: 'absolute',
            borderTopWidth: 0
          },
          tabBarAllowFontScaling: true,
          tabBarLabelStyle: {},
          tabBarIcon: ({color, focused}) => {
            const icons = {
              Home: 'home-variant-outline',
              Hustl: 'rowing',
              Chat: 'chat-outline',
              Notification: 'notifications-outline',
              Settings: 'albums-outline',
            };
            const type = {
              Home: 'material-community',
              // Hustl: 'tablets',
              Chat: 'material-community',
              Settings: 'ionicon',
              Notification: 'ionicon'
            };
            const text = {
              Hustl: 'Hustl',
              Home: '',
              Chat: '',
              Notification: '',
              Settings: null,
            };
            return (
              <View>
                <Icon
                  name={icons[route.name]}
                  type={type[route.name]}
                  color={color}
                  style={{
                    marginTop: 7,
                    shadowColor: color,
                    shadowOffset: {width: 0, height: 0.4},
                    shadowOpacity: 0.3,
                    shadowRadius: 2,
                    elevation: 5,
                  }}
                  size={25}
                />
              </View>
            );
          },
        })}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarLabel: ""
          }}
          component={Home}
        />
        <Tab.Screen
          name="Chat"
          options={{
            tabBarLabel: ""
          }}
          component={Chat}
        />
        <Tab.Screen
          name="Hustl"
          options={{
            tabBarButton: (props, color) => (
              <CustomButton
                bgColor={color}
                {...props}
              />
            ),
            tabBarLabel:"Hustl"
          }}
          component={Hustl}
        />
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: ""
          }}
          component={Settings}
        />
        <Tab.Screen
          name="Notification"
          options={{
            tabBarLabel: ""
          }}
          component={Notification}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
    )
  }
  

export default Routes

const styles = StyleSheet.create({})