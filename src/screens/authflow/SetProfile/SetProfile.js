import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StatusBar, Alert, KeyboardAvoidingView, ScrollView } from 'react-native';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { InputField } from '../../../components/EditField/EditField';
import Header from '../../../../src/components/Header/header';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';
import { backgroundImage, calendarimage } from '../../../../src/services/utilities/assets/assets';

const SetProfile = ({ navigation }) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [vmake, setVmake] = useState('');
    const [vmodel, setVmodel] = useState('');
    const [vyear, setVyear] = useState('');
    const [vcolor, setVcolor] = useState('');
    const [vmileage, setVmileage] = useState('');
    const [userEmail, setUserEmail] = useState('');

    useEffect(() => {
        const user = auth().currentUser;
        if (user) {
            setUserEmail(user.email);
        }
    }, []);

    const handleBirthdayChange = (date) => {
        setBirthday(date);
    };
    const updateUserProfile = () => {
        if (!validateFields()) {
            return;
        }
        const user = auth().currentUser;
        if (!user) {
            Toast.show('User not authenticated', Toast.SHORT,)
            return;
        }
        const uid = user.uid;
        const userDocRef = firestore().collection('Users').doc(uid);

        userDocRef
            .set({
                email: userEmail,
                fname: fname,
                lname: lname,
                birthday: birthday,
                vmake: vmake,
                vmodel: vmodel,
                vyear: vyear,
                vcolor: vcolor,
                vmileage: vmileage,
                uid: uid,
            })
            .then(() => {
                Toast.show('Your profile information has been successfully stored.', Toast.SHORT,)
                navigation.navigate('Appnavigation', { screen: 'Home' });
            })
            .catch(error => {
                console.error(error);
                Toast.show('An error occurred while saving your profile information', Toast.SHORT,)
            });
    };



    const validateFields = () => {
        if (!fname || !lname || !birthday || !vmake || !vmodel || !vyear || !vcolor || !vmileage) {
            Toast.show('Please fill all fields', Toast.SHORT,)
            return false;
        }

        return true;
    };

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <View style={appStyles.mainView1}>
                <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
                <ImageBackground style={appStyles.Image1} source={backgroundImage.Oylbackground}>
                    <Header
                        title="Set Up Your Profile"
                        onBackPress={() => {
                            navigation.navigate('Oyl');
                        }}
                        titleStyle={appStyles.setupprofile}
                    />
                    <ScrollView style={appStyles.scrollview} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
                        <View style={appStyles.view1}>
                            <View style={appStyles.setfieldview1}>
                                <InputField
                                    label="First Name"
                                    placeholder="Mick"
                                    onChangeText={(userFname) => setFname(userFname)}
                                    value={fname}
                                />
                                <InputField
                                    label="Last Name"
                                    placeholder="Tason"
                                    onChangeText={(userLname) => setLname(userLname)}
                                    value={lname}
                                />
                                <InputField
                                    label="Birthday"
                                    placeholder="09 / 08 / 1996"
                                    imageSource={calendarimage.calendar}
                                    selectedDate={birthday}
                                    onDateChange={handleBirthdayChange}
                                    onChangeText={(userBirthday) => setBirthday(userBirthday)}
                                    value={birthday}
                                />
                                <InputField
                                    label="Vehicle Make"
                                    placeholder="Enter the make of your Vehicle"
                                    onChangeText={(userVmake) => setVmake(userVmake)}
                                    value={vmake}
                                />
                                <InputField
                                    label="Vehicle Model"
                                    placeholder="Enter model of your Vehicle"
                                    onChangeText={(userVmodel) => setVmodel(userVmodel)}
                                    value={vmodel}
                                />
                                <InputField
                                    label="Vehicle Year"
                                    placeholder="Enter year of your Vehicle"
                                    onChangeText={(userVyear) => setVyear(userVyear)}
                                    value={vyear}
                                    keyboardType="number-pad"
                                    maxLength={4}
                                />
                                <InputField
                                    label="Vehicle Color"
                                    placeholder="Enter color of your Vehicle"
                                    onChangeText={(userVcolor) => setVcolor(userVcolor)}
                                    value={vcolor}
                                />
                                <InputField
                                    label="Vehicle Mileage"
                                    placeholder="If unknown, enter approximate"
                                    onChangeText={(userVmileage) => setVmileage(userVmileage)}
                                    value={vmileage}
                                />
                                <View style={appStyles.touchable21}>
                                    <LinearGradient
                                        colors={['#FFFFFF', '#FFFFCC']}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                        style={appStyles.button22}
                                    >
                                        <CustomButton
                                            onPress={updateUserProfile}
                                            title="DONE"
                                            style={appStyles.buttonText2}
                                        />
                                    </LinearGradient>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    );
};

export default SetProfile;

