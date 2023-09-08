import React, { useState } from 'react';
import { View, ImageBackground, StatusBar, TouchableOpacity, Text } from 'react-native';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { InputField } from '../../../../src/components/EditField/EditField';
import Header from '../../../../src/components/Header/header';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Toast from 'react-native-simple-toast';
import { backgroundImage, backiconimage, tikimage } from '../../../../src/services/utilities/assets/assets';

const CreateAccount = ({ navigation }) => {
    const [checked, setIsChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleCheckboxToggle = () => {
        setIsChecked(!checked);
    };
    const isValidEmail = (email) => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        return emailPattern.test(email);
    };
    const createUser = () => {
        if (email === "") {
            Toast.show('Invalid Email', Toast.SHORT,)
            return;
        }
        if (!email.endsWith('.com')) {
            Toast.show('Invalid Email Format', Toast.SHORT,)
            return;
        }
        if (!isValidEmail(email)) {
            Toast.show('Invalid Email Format', Toast.SHORT,)
            return;
        }
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                if (!user) {
                    Toast.show('User not authenticated.', Toast.SHORT,)
                    return;
                }
                const uid = user.uid;
                Toast.show('Registered Successfully', Toast.SHORT,)
                const userDocRef = firestore().collection('Users').doc(uid);
                await userDocRef.set({
                    email: email,
                    uid: uid,
                    createAccountData: {
                    },
                });
                navigation.navigate('SetProfile');
            })
            .catch(error => {
                if (error.code === 'auth/email-already-in-use') {
                    Toast.show('That email address is already in use!', Toast.SHORT,)
                } else if (error.code === 'auth/invalid-email') {
                    Toast.show('That email address is invalid!', Toast.SHORT,)
                } else {
                    console.error(error);
                    Toast.show('An error occurred. Please try again later.', Toast.SHORT,)
                }
            });
    };
    return (
        <View style={appStyles.mainView1}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <ImageBackground style={appStyles.Image1} source={backgroundImage.Oylbackground} />
            <Header
                title="Create Account"
                onBackPress={() => {
                    navigation.navigate('Oyl');
                }}
                backIcon={backiconimage.backicon}
                titleStyle={appStyles.createaccounttext}
            />
            <View style={appStyles.createfieldview1}>
                <InputField
                    label="Email"
                    placeholder="micktason@gmail.com"
                    style={appStyles.createfield}
                    setInputText={setEmail}
                    onChangeText={(userEmail) => setEmail(userEmail)}
                    value={email}
                />
                <InputField
                    label="Password"
                    placeholder="Enter Password"
                    style={appStyles.createfield}
                    imageSource="eye"
                    setInputText={setPassword}
                    isPassword={true}
                    onChangeText={(userPassword) => setPassword(userPassword)}
                    value={password}
                />
            </View>
            <View style={appStyles.checkbox}>
                <TouchableOpacity onPress={handleCheckboxToggle} style={appStyles.checkbox3}>
                    <View style={[appStyles.checkboxCircle, checked && appStyles.checked]} />
                    {checked && <Image source={tikimage.tik} style={appStyles.tik} />}
                    <Text style={appStyles.accept}>I accept the</Text>
                    <Text style={appStyles.accept2}>Terms of service</Text>
                    <Text style={appStyles.accept1}>and</Text>
                    <Text style={appStyles.accept2}>Privacy Policy</Text>
                </TouchableOpacity>
            </View>
            <View style={appStyles.touchable22}>
                <LinearGradient
                    colors={['#FFFFFF', '#FFFFCC']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={appStyles.button22}
                >
                    <CustomButton
                        onPress={() => {
                            createUser();
                        }}
                        title="Let's go!"
                        style={appStyles.buttonText2}
                    />
                </LinearGradient>
            </View>
        </View>
    );
}

export default CreateAccount;
