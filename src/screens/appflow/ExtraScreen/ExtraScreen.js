import { View, Text, Image, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { appStyles, } from '../../../../src/services/utilities/appStyles'
import { arrowimage } from '../../../services/utilities/assets/assets';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ExtraScreen = ({ navigation }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const userLogout = async () => {
        try {
            await AsyncStorage.removeItem('userLoggedIn');
            navigation.navigate('Oyl');
        } catch (error) {
        }
    };

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    return (
        <View style={appStyles.mainViewextra}>
            <TouchableOpacity onPress={toggleModal}>
                <Text style={appStyles.clicktext}>Click Me!</Text>
            </TouchableOpacity>


            <Modal visible={isModalVisible} animationType="slide" transparent={true}>
                <View style={appStyles.extramodalview}>
                    <View style={appStyles.extramodalview1}>
                        <View style={appStyles.extramodalview2}>

                            <TouchableOpacity onPress={() => { navigation.navigate('EditProfile'); toggleModal(); }}>
                                <View style={appStyles.extramodalfieldview2}>
                                    <Text style={appStyles.extramodalfieldtext}>Edit Profile</Text>
                                    <Image style={appStyles.arrowimage}
                                        source={arrowimage.arrow} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('ThankYou') ; toggleModal();}}>
                                <View style={appStyles.extramodalfieldview2}>
                                    <Text style={appStyles.extramodalfieldtext}>Share Your Feedback</Text>
                                    <Image style={appStyles.arrowimage}
                                        source={require('../../../../src/assets/image/arrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Service'); toggleModal(); }}>
                                <View style={appStyles.extramodalfieldview2}>
                                    <Text style={appStyles.extramodalfieldtext}>Terms of Service</Text>
                                    <Image style={appStyles.arrowimage}
                                        source={require('../../../../src/assets/image/arrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('Privacy'); toggleModal(); }}>
                                <View style={appStyles.extramodalfieldview2}>
                                    <Text style={appStyles.extramodalfieldtext}>Privacy Policy</Text>
                                    <Image style={appStyles.arrowimage}
                                        source={require('../../../../src/assets/image/arrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { navigation.navigate('ThankYou'); toggleModal(); }}>
                                <View style={appStyles.extramodalfieldview2}>
                                    <Text style={appStyles.extramodalfieldtext}>About Us</Text>
                                    <Image style={appStyles.arrowimage}
                                        source={require('../../../../src/assets/image/arrow.png')} />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={userLogout}>
                                <View style={appStyles.extramodalfieldview3}>
                                    <Text style={appStyles.extramodalfieldtext3}>Logout</Text>
                                    <Image style={appStyles.arrowimage}
                                        source={require('../../../../src/assets/image/arrow.png')} />
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>

        </View>
    )
}



export default ExtraScreen;