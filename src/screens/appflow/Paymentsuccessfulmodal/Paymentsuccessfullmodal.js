import { View } from 'react-native'
import React, { useState } from 'react';
import { appStyles } from '../../../../src/services/utilities/appStyles'
import CustomModal from '../../../../src/components/CustomModal/CustomModal';

const Paymentsuccessfullmodal = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleButtonPress = () => {
        navigation.navigate('ThankYou');
    };
    const modalText = {
        heading: 'Congratulations!',     
        normal: 'We Will see you on',      
        scheduledDate: '[DATE SCHEDULED]',
    };

    return (
        <View style={appStyles.mainview}>
            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                modalText={modalText}
                buttonText="CONTINUE"
                onButtonPress={handleButtonPress}
                headingStyle={appStyles.congratulations} 
                normalStyle={appStyles.seeyouontext}
                scheduledDateStyle={appStyles.dateschedule} 
            />
        </View>
    )
}

export default Paymentsuccessfullmodal;