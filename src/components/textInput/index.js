import React from "react";
import { TextInput } from 'react-native'
import { appStyles } from '../../../src/services/utilities/appStyles/index'

const Textinput = ({
    placeholder,
    keyboardType,
    placeholderTextColor,
    inputStyle,
    maxLength,
    value,
    onChangeText,
    editable,
    secureTextEntry,
    onSaveLocation,
    onOilTypeSelect,
    oilType,
    selectedOilType,
    onSelectOilType,

}) => {
    return (
        <TextInput
            placeholder={placeholder}
            keyboardType={keyboardType}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={secureTextEntry} 
            style={[appStyles.input1, inputStyle]}
            maxLength={maxLength} 
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            onSaveLocation={onSaveLocation}
            onOilTypeSelect={onOilTypeSelect}
            oilType={oilType}
            selectedOilType={selectedOilType}
            onSelectOilType={onSelectOilType}
        />
    )
}

export default Textinput;
