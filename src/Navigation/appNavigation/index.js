import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image } from 'react-native'
import VehicleModal from '../../../src/screens/appflow/VehicleModal/VehicleModal';
import Paymentsuccessfullmodal from '../../../src/screens/appflow/Paymentsuccessfulmodal/Paymentsuccessfullmodal'
import Service from '../../../src/screens/appflow/Service/Service';
import Privacy from '../../../src/screens/appflow/Privacy/Privacy';
import Account from '../../screens/appflow/Account/Account';
import Home from '../../../src/screens/appflow/Home/Home';
import VehicleInfo from '../../../src/screens/appflow/VehicleInfo/VehicleInfo';
import ExtraScreen from '../../screens/appflow/ExtraScreen/ExtraScreen'
import EditProfile from '../../../src/screens/appflow/EditProfile/EditProfile';
import ThankYou from '../../../src/screens/appflow/Thankyou/ThankYou';


const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const AccountStack = createNativeStackNavigator();
const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountStack.Screen name="ExtraScreen" component={ExtraScreen} options={{ headerShown: false }} />
      <AccountStack.Screen name="Service" component={Service} options={{ headerShown: false, tabBarVisible: false }} />
      <AccountStack.Screen name="Privacy" component={Privacy} options={{ headerShown: false }} />
    </AccountStack.Navigator>
  )
}

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <HomeStack.Screen name="VehicleInfo" component={VehicleInfo} options={{ headerShown: false }} />
      <HomeStack.Screen name="VehicleModal" component={VehicleModal} options={{ headerShown: false }} />
      <HomeStack.Screen name="Paymentsuccessfullmodal" component={Paymentsuccessfullmodal} options={{ headerShown: false }} />
      <HomeStack.Screen name="Account" component={Account} options={{ headerShown: false }} />
      <HomeStack.Screen name="EditProfile" component={EditProfile} options={{ headerShown: false }} />
      <HomeStack.Screen name="ThankYou" component={ThankYou} options={{ headerShown: false }} />

    </HomeStack.Navigator>
  )
};

const Appnavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Image source={require('../../../src/assets/image/home.png')} style={{
            width: size, height: size, tintColor: color
          }} />
        ),
      }}
      />
      <Tab.Screen name="ExtraScreen" component={AccountStackScreen} options={{
        headerShown: false,
        tabBarLabel: 'Account',
        tabBarIcon: ({ color, size }) => (
          <Image source={require('../../../src/assets/image/account.png')} style={{
            width: size, height: size, tintColor: color
          }} />
        ),
      }} />

    </Tab.Navigator>
  );
};

export default Appnavigation;