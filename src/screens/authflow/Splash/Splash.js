import React, { useEffect } from 'react';
import { View, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appStyles } from '../../../services/utilities/appStyles';
import { oylImage, backgroundImage } from '../../../services/utilities/assets/assets';

const Splash = ({ navigation }) => {
  useEffect(() => {
    const checkUserAuthentication = async () => {
      try {
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        return userLoggedIn === 'true';
      } catch (error) {
        return false;
      }
    };

    checkUserAuthentication().then(isLoggedIn => {
      if (isLoggedIn) {
        navigation.navigate('Appnavigation', { screen: 'Home' });
      } else {
        navigation.navigate('Oyl');
      }
    });
  }, [navigation]);

  return (
    <ImageBackground style={appStyles.Image1} source={backgroundImage.Oylbackground}>
      <View style={appStyles.splash}>
        <View style={appStyles.splashlogo}>
          <Image style={appStyles.Image2} source={oylImage.Oyl} />
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;