import { View } from 'react-native'
import React, { useState } from 'react';
import { appStyles } from '../../../../src/services/utilities/appStyles'
import CustomModal from '../../../../src/components/CustomModal/CustomModal';
const VehicleModal = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const handleButtonPress = () => {

        navigation.navigate('Account');
    };
    const modalText = {
        heading: 'Vehicle has been added',
        normal: 'Successfully! one step',
        scheduledDate: 'left!',
    };

    return (

        <View style={appStyles.mainview}>
            <CustomModal
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                modalText={modalText}
                buttonText="CONTINUE"
                onButtonPress={handleButtonPress}
            />

        </View>
    )
}



export default VehicleModal;