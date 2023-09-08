import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { appStyles } from '../../../src/services/utilities/appStyles/index'

const CustomButton = ({ onPress, title ,textColor,style}) => (
    <TouchableOpacity style={appStyles.button2} onPress={onPress}>
        <Text style={[style && style, { color: textColor || appStyles.buttonText2.color }]}>
      {title}
    </Text>
    </TouchableOpacity>
);

export default CustomButton;