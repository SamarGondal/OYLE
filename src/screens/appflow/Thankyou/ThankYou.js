import { View, Image, ImageBackground, Text } from 'react-native'
import React, { useEffect } from 'react';
import { appStyles } from '../../../../src/services/utilities/appStyles'
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { backgroundImage, goodluckimage1, facebookimage, instagramimage } from '../../../services/utilities/assets/assets';

const ThankYou = ({ navigation }) => {
    const handleButtonPress = () => {
        return (
            navigation.reset({
                index: 0,
                routes: [{ name: 'Appnavigation', params: { screen: 'Home' } }],
            })
        )
    };

    useEffect(() => {
        navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
        return () => {
            navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
        };
    }, [])


    return (
        <View style={appStyles.mainview}>
            <View style={appStyles.firstmainview}>
                <View style={appStyles.firstcircleview}>
                    <Image style={appStyles.goodluckimage}
                        source={goodluckimage1.goodluck} />
                </View>
            </View>
            <View style={appStyles.firstsecondview}>
                <ImageBackground style={appStyles.Image1} source={backgroundImage.Oylbackground} />
                <Text style={appStyles.thankyoutext}>Thank You!</Text>
                <Text style={appStyles.thankyoutext1}>Thanks for using our app, We hope</Text>
                <Text style={appStyles.thankyoutext2}>You like it and use it again.</Text>
            </View>
            <View style={appStyles.iconView}>
                <Image style={appStyles.fbimage}
                    source={facebookimage.facebook} />
                <Image style={appStyles.instaimage}
                    source={instagramimage.instagram} />
            </View>

            <View style={appStyles.touchable30}>
                <LinearGradient
                    colors={['#FFFFC8', '#FFFFFF']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={appStyles.button30}
                >
                    <CustomButton onPress={handleButtonPress} title="Go Home" textColor="#000000" style={appStyles.buttonText2} />

                </LinearGradient>
            </View>

        </View>
    )
}



export default ThankYou;