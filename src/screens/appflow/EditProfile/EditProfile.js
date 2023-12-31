import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { appStyles } from '../../../../src/services/utilities/appStyles';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { InputField } from '../../../components/EditField/EditField';
import { backicon1image, calendarimage, backgroundImage, homeimage, accountimage } from '../../../../src/services/utilities/assets/assets';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-simple-toast';

const EditProfile = ({ navigation }) => {
  const handleButtonPress = () => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    updateUserDataInFirestore();
  };

  const [selectedBirthday, setSelectedBirthday] = useState(null);
  const [userFirstName, setUserFirstName] = useState('');
  const [userLastName, setUserLastName] = useState('');
  const [userBirthday, setUserBirthday] = useState('');
  const [userVmake, setUserVmake] = useState('');
  const [userVmodel, setUserVmodel] = useState('');
  const [userVyear, setUserVyear] = useState('');
  const [userVcolor, setUserVcolor] = useState('');
  const [userVmileage, setUserVmileage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const user = auth().currentUser;
    if (user) {
      const uid = user.uid;
      const userDocRef = firestore().collection('Users').doc(uid);

      userDocRef
        .get()
        .then((doc) => {
          if (doc.exists) {
            const userData = doc.data();
            setUserFirstName(userData.fname || '');
            setUserLastName(userData.lname || '');
            setUserBirthday(userData.birthday || '');
            setUserVmake(userData.vmake || '');
            setUserVmodel(userData.vmodel || '');
            setUserVyear(userData.vyear || '');
            setUserVcolor(userData.vcolor || '');
            setUserVmileage(userData.vmileage || '');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);


  const handleBirthdayChange = (date) => {
    setSelectedBirthday(date);
  };

  const updateUserDataInFirestore = () => {
    if (!validateFields()) {
      setIsLoading(false);
      return;
    }

    const user = auth().currentUser;
    if (!user) {
      setIsLoading(false);
      Toast.show('User not authenticated', Toast.SHORT,)
      return;
    }

    const uid = user.uid;
    const userDocRef = firestore().collection('Users').doc(uid);

    userDocRef
      .update({
        fname: userFirstName,
        lname: userLastName,
        birthday: userBirthday,
        vmake: userVmake,
        vmodel: userVmodel,
        vyear: userVyear,
        vcolor: userVcolor,
        vmileage: userVmileage,
      })
      .then(() => {
        setIsLoading(false);
        Toast.show('Your profile information has been successfully updated', Toast.SHORT,)
        navigation.navigate('Home');
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        Toast.show('An error occurred while updating your profile information', Toast.SHORT,)
      });
  };

  const validateFields = () => {
    if (!userFirstName || !userLastName || !userBirthday || !userVmake || !userVmodel || !userVyear || !userVcolor || !userVmileage) {
      Toast.show('Please fill in all fields', Toast.SHORT,)
      return false;
    }
    return true;
  };
  useEffect(() => {
    navigation.getParent().setOptions({ tabBarStyle: { display: 'none' } });
    return () => {
      navigation.getParent().setOptions({ tabBarStyle: { display: 'flex' } });
    };
  }, [])
  const handlearrow = () => {
    return (
      navigation.reset({
        index: 0,
        routes: [{ name: 'Appnavigation', params: { screen: 'ExtraScreen' } }],
      })
    )
  };
  const home = () => {
    return (
      navigation.reset({
        index: 0,
        routes: [{ name: 'Appnavigation', params: { screen: 'Home' } }],
      })
    )
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
      <ImageBackground style={appStyles.Image1} source={backgroundImage.Oylbackground}>
        <View style={appStyles.statusbarbottom4}>
          <TouchableOpacity onPress={() => { navigation.navigate('Oyl') }}>
            <Image style={appStyles.BackIcon4} source={backicon1image.backicon1} />
          </TouchableOpacity>
          <View style={appStyles.centeredTextContainer}>
            <Text style={appStyles.text14}>Edit Profile</Text>
          </View>
        </View>
        <ScrollView
          style={appStyles.scrollview}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={appStyles.editview1}>
            <View style={appStyles.editfieldview2}>
              <InputField
                label="First Name"
                placeholder="Mick"
                onChangeText={(userFname) => setUserFirstName(userFname)}
                value={userFirstName}
              />
              <InputField
                label="Last Name"
                placeholder="Tason"
                onChangeText={(userLname) => setUserLastName(userLname)}
                value={userLastName}
              />
              <InputField
                label="Birthday"
                placeholder="09 / 08 / 1996"
                imageSource={calendarimage.calendar}
                selectedDate={selectedBirthday}
                onDateChange={handleBirthdayChange}
                onChangeText={(userBday) => setUserBirthday(userBday)}
                value={userBirthday}
              />
              <InputField
                label="Vehicle Make"
                placeholder="Enter the make of your Vehicle"
                onChangeText={(vMake) => setUserVmake(vMake)}
                value={userVmake}
              />
              <InputField
                label="Vehicle Model"
                placeholder="Enter model of your Vehicle"
                onChangeText={(vModel) => setUserVmodel(vModel)}
                value={userVmodel}
              />
              <InputField
                label="Vehicle Year"
                placeholder="Enter year of your Vehicle"
                onChangeText={(vYear) => setUserVyear(vYear)}
                value={userVyear}
                keyboardType="number-pad"
                maxLength={4}
              />
              <InputField
                label="Vehicle Color"
                placeholder="Enter color of your Vehicle"
                onChangeText={(vColor) => setUserVcolor(vColor)}
                value={userVcolor}
              />
              <InputField
                label="Vehicle Mileage"
                placeholder="If unknown, enter approximate"
                onChangeText={(vMileage) => setUserVmileage(vMileage)}
                value={userVmileage}
              />
              <View style={appStyles.touchable24}>
                {isLoading ? (
                  <ActivityIndicator size="large" color="#0000ff" />
                ) : (
                  <LinearGradient
                    colors={['#FFFFFF', '#FFFFCC']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={appStyles.button22}
                  >
                    <CustomButton
                      onPress={handleButtonPress}
                      title={isLoading ? "SAVING..." : "SAVE CHANGES"}
                      style={appStyles.buttonText2}
                      disabled={isLoading}
                    />
                  </LinearGradient>
                )}
              </View>
            </View>
          </View>
          <View style={appStyles.homeaccountimage}>
            <TouchableOpacity onPress={home}>
              <Image style={appStyles.homeimage} source={homeimage.home} />
              <Text style={appStyles.hometext}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlearrow}>
              <Image style={appStyles.accountimage} source={accountimage.account} />
              <Text style={appStyles.accounttext}>Account</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default EditProfile;

