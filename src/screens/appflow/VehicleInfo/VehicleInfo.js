import { backgroundImage, tik1image, boximage } from '../../../../src/services/utilities/assets/assets'
import React, {useState} from 'react';
import { View, Text, Image, StatusBar, ScrollView, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator, Alert } from 'react-native';
import { appStyles } from '../../../services/utilities/appStyles';
import CustomButton from '../../../components/CustomButton/CustomButton';
import LinearGradient from 'react-native-linear-gradient';
import { InputField } from '../../../components/EditField/EditField';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function VehicleInfo({navigation }) {
    const [isChecked, setIsChecked] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleCheckboxToggle = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            fetchProfileData();
        } else {
            setProfileData(null);
        }
    };

    const fetchProfileData = async () => {
        setLoading(true);
        try {
            const user = auth().currentUser;
            if (!user) {
                Alert.alert('Authentication Error', 'User not authenticated.');
                setLoading(false);
                return;
            }
            const uid = user.uid;
            const userDocRef = firestore().collection('Users').doc(uid);
            const doc = await userDocRef.get();

            if (doc.exists) {
                setProfileData(doc.data());
            } else {
                console.log("No such document!");
            }
        } catch (error) {
            console.error("Error fetching profile data: ", error);
        }
        setLoading(false);
    };

    const updateProfileData = async () => {
        try {
            setLoading(true);
            const user = auth().currentUser;
            if (!user) {
                Alert.alert('Authentication Error', 'User not authenticated.');
                setLoading(false);
                return;
            }
            const uid = user.uid;
            const userDocRef = firestore().collection('Users').doc(uid);

            const updatedData = {
                vyear: profileData.vyear,
                vmake: profileData.vmake,
                vmodel: profileData.vmodel,
                vcolor: profileData.vcolor,
                vmileage: profileData.vmileage,
            };

            await userDocRef.update(updatedData);

            Alert.alert('Profile Updated', 'Your profile information has been successfully updated.');
            navigation.navigate('VehicleModal');
        } catch (error) {
            console.error('Error updating profile data:', error);
            Alert.alert('Error', 'An error occurred while updating your profile information.');
        } finally {
            setLoading(false);
        }
    };
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
        >
            <StatusBar hidden={true} />
            <View style={appStyles.firstview1}>
                <View style={appStyles.headerview}>
                    <Image style={appStyles.background} source={backgroundImage.Oylbackground} />
                    <Text style={appStyles.schedule1}>Vehicle Info</Text>
                </View>
            </View>
            <ScrollView
                style={appStyles.scrollview}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={appStyles.infoview1}>
                    <View style={appStyles.DetailsView}>
                        <Text style={appStyles.Details1}>Please Enter Details</Text>
                    </View>

                    <View style={appStyles.vehicleinfofieldview1}>
                        <InputField
                            label="Vehicle Year"
                            placeholder="Enter year of your Vehicle"
                            style={appStyles.vehicleinfofieldview2}
                            value={isChecked && profileData ? profileData.vyear : ''}
                            keyboardType="number-pad"
                            maxLength={4}
                            onChangeText={(text) => {
                                if (profileData) {
                                    setProfileData({ ...profileData, vyear: text });
                                }
                            }}
                            editable={isChecked}
                        />
                        <InputField
                            label="Vehicle Make"
                            placeholder="Enter the make of your Vehicle"
                            style={appStyles.vehicleinfofieldview2}
                            value={isChecked && profileData ? profileData.vmake : ''}
                            onChangeText={(text) => {
                                if (profileData) {
                                    setProfileData({ ...profileData, vmake: text });
                                }
                            }}
                            editable={isChecked}
                        />
                        <InputField
                            label="Vehicle Model"
                            placeholder="Enter model of your Vehicle"
                            style={appStyles.vehicleinfofieldview2}
                            value={isChecked && profileData ? profileData.vmodel : ''}
                            onChangeText={(text) => {
                                if (profileData) {
                                    setProfileData({ ...profileData, vmodel: text });
                                }
                            }}
                            editable={isChecked}
                        />
                        <InputField
                            label="Vehicle Color"
                            placeholder="Enter color of your Vehicle"
                            style={appStyles.vehicleinfofieldview2}
                            value={isChecked && profileData ? profileData.vcolor : ''}
                            onChangeText={(text) => {
                                if (profileData) {
                                    setProfileData({ ...profileData, vcolor: text });
                                }
                            }}
                            editable={isChecked}
                        />
                        <InputField
                            label="Vehicle Mileage"
                            placeholder="If unknown enter approximate"
                            style={appStyles.vehicleinfofieldview2}
                            value={isChecked && profileData ? profileData.vmileage : ''}
                            onChangeText={(text) => {
                                if (profileData) {
                                    setProfileData({ ...profileData, vmileage: text });
                                }
                            }}
                            editable={isChecked}
                        />
                    </View>

                    <View style={appStyles.flexdirection}>
                        <TouchableOpacity onPress={handleCheckboxToggle}>
                            <Image style={appStyles.box} source={boximage.box} />
                            {isChecked && <Image style={appStyles.tik1} source={tik1image.tik1} />}
                        </TouchableOpacity>
                        <Text style={appStyles.pullinfotext}>Pull info from profile here</Text>
                    </View>

                    <View style={appStyles.touchable26}>
                        {loading ? (
                            <ActivityIndicator size="large" color="#0000ff" />
                        ) : (
                            <LinearGradient
                                colors={['#514B46', '#000000']}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 1 }}
                                style={appStyles.button22}
                            >
                                <CustomButton
                                    title="Update"
                                    textColor="#FFFFFF"
                                    style={appStyles.buttonText2}
                                    onPress={updateProfileData}
                                    disabled={!isChecked}
                                />
                            </LinearGradient>
                        )}
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

export default VehicleInfo;
