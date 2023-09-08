import React, { useEffect , useState} from 'react';
import { View, Image, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appStyles } from '../../../services/utilities/appStyles';
import { oylImage, backgroundImage } from '../../../services/utilities/assets/assets';
import { DotIndicator } from 'react-native-indicators';
import { responsiveHeight } from 'react-native-responsive-dimensions';

const Splash = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);

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
          <View style={{marginTop:responsiveHeight(5)}}>
          <DotIndicator color="#FFFFC8" size={15} />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Splash;
