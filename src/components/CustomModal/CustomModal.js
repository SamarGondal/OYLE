import React from 'react';
import { Modal, View, Text, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../src/components/CustomButton/CustomButton'
import { appStyles } from '../../../src/services/utilities/appStyles/index'
import { backgroundImage, circletikimage } from '../../../src/services/utilities/assets/assets'
const CustomModal = ({ onButtonPress, modalText, headingStyle,normalStyle, scheduledDateStyle }) => {
    return (
        <Modal>
            <View style={appStyles.modalview}>
                <Image style={appStyles.modalimage} source={backgroundImage.Oylbackground} />
                <Image style={appStyles.circletikimage} source={circletikimage.circletik} />
                <View style={appStyles.modaltextview}>
                    <Text style={[appStyles.vehiclemodaltext, headingStyle]}>
                        {modalText.heading}
                    </Text>
                    <Text style={[appStyles.vehiclemodaltext, normalStyle]}>
                        {modalText.normal}
                    </Text>
                    <Text style={[appStyles.vehiclemodaltext, scheduledDateStyle]}>
                        {modalText.scheduledDate}
                    </Text>


                </View>
                <View style={appStyles.touchable27}>
                    <LinearGradient
                        colors={['#FFFFFF', '#FFFFCC']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 1 }}
                        style={appStyles.button22}
                    >
                        <CustomButton onPress={onButtonPress} title="CONTINUE" style={appStyles.buttonText2}/>
                    </LinearGradient>
                </View>
            </View>
        </Modal>
        
    );
};

export default CustomModal;
