import { View, Text, Image, ImageBackground, TouchableOpacity, ScrollView, KeyboardAvoidingView, StatusBar, Alert } from 'react-native'
import React,{useEffect} from 'react'
import { appStyles } from '../../../../src/services/utilities/appStyles'
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { InputField } from '../../../components/EditField/EditField';
import { oylImage, backgroundImage } from '../../../../src/services/utilities/assets/assets'
import auth from '@react-native-firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react'


const checkUserAuthentication = async () => {
    try {
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        return userLoggedIn === 'true';
    } catch (error) {
        return false;
    }
};
const Oyl = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        checkUserAuthentication().then(isLoggedIn => {
            if (isLoggedIn) {
                navigation.navigate('Appnavigation', { screen: 'Home' });
            }
        });
    }, [navigation]);

    const userSignin = () => {
        if (!email || !password) {
            Alert.alert('Please enter both email and password.');
            return;
        }
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                AsyncStorage.setItem('userLoggedIn', 'true');
                Alert.alert('User logged in successfully');
                navigation.navigate('Appnavigation', { screen: 'Home' });
            })
            .catch(error => {
                if (error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
                    Alert.alert('Account not found');
                } else if (error.code === 'auth/wrong-password') {
                    Alert.alert('Invalid Password');
                } else {
                    console.log(error);
                    Alert.alert('An error occurred. Please try again later.');
                }
            });
    };
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <StatusBar backgroundColor="#222222" barStyle="light-content" />
            <ImageBackground style={appStyles.Image1} source={backgroundImage.Oylbackground} >

                <ScrollView style={appStyles.scrollview}
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                >
                    <View style={appStyles.view1}>

                        <View style={appStyles.Image2View}>
                            <Image style={appStyles.Image2} source={oylImage.Oyl} />
                        </View>
                        <View style={appStyles.TextView}>
                            <Text style={appStyles.Text1}>Enter your Email & Password to log in!</Text>
                        </View>
                        <View style={appStyles.style4}>
                            <InputField label="Email" placeholder="Enter Email"
                                onChangeText={(userEmail) => setEmail(userEmail)}
                                value={email}
                                style={appStyles.Oylphoneview1}
                            />
                            <InputField label="Password" placeholder="Enter Password"
                                onChangeText={(userPassword) => setPassword(userPassword)}
                                value={password}
                                style={appStyles.Oylphoneview2}
                            />
                            <View style={appStyles.Text2View2}>
                                <Text style={appStyles.text2}>Do not have an account? </Text>
                                <TouchableOpacity style={appStyles.touchable1} onPress={() => navigation.navigate('CreateAccount')}>
                                    <Text style={appStyles.Create1}>Create</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={appStyles.touchable2}>
                            <LinearGradient
                                colors={['#FFFFFF', '#FFFFCC']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={appStyles.button2}
                            >
                                <CustomButton
                                    onPress={() => {
                                        userSignin();
                                    }}
                                    title="LUBE ME UP!" style={appStyles.buttonText2} />
                            </LinearGradient>
                        </View>

                    </View>
                </ScrollView>
            </ImageBackground>
        </KeyboardAvoidingView>
    )
}
export default Oyl;