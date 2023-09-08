import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { appStyles } from '../../../src/services/utilities/appStyles/index';
import { useNavigation } from '@react-navigation/native';
import Textinput from '../textInput';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../src/components/CustomButton//CustomButton';
import { radioimage } from '../../../src/services/utilities/assets/assets';

const DateCard = ({
  day,
  month,
  date,
  style,
  imageSource,
  inputstyle,
  onPress,
  isSelected
}) => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);

  const handlePress1 = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    navigation.navigate('Paymentsuccessfullmodal');
  };

  const handlePress = () => {
    onPress();
  };

  const cardBackgroundColor = isSelected ? '#FFFFC8' : '#FFFFFF';

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[appStyles.cardview, style && style, { backgroundColor: cardBackgroundColor }]}>
        <TouchableOpacity onPress={handlePress1}>
          <Image source={imageSource} style={inputstyle && inputstyle} />
        </TouchableOpacity>

        <Text style={appStyles.day}>{day}</Text>
        <Text style={appStyles.date}>{date}</Text>
        <Text style={appStyles.month}>{month}</Text>

        <Modal visible={isModalVisible} animationType="slide" transparent={true} style={appStyles.radiomodal}>
          <View style={appStyles.radiomodalview}>
            <View style={appStyles.radiomodalsecondview}>
              <View style={appStyles.modalcircleviewblack}>
                <Image style={appStyles.modalcircleviewRadio} source={radioimage.radio} />
              </View>
              <Text style={appStyles.Radiomodaltext1}>Add New Details</Text>
              <Text style={appStyles.Radiomodaltext2}>Please enter your Payment Details</Text>

              <View style={appStyles.radiomodalthirdview}>
                <Textinput placeholder="Card holder name" placeholderTextColor="#3A3A3A" inputStyle={appStyles.radiomodallabel} />
                <Textinput placeholder="Number of Card" placeholderTextColor="#3A3A3A" inputStyle={appStyles.radiomodallabel} />
                <Text style={appStyles.validtext}>VALID THRU</Text>
                <View style={appStyles.dateview}>
                  <Textinput placeholder="MM" placeholderTextColor="#3A3A3A" inputStyle={appStyles.radiomodallabel1} />
                  <Text style={appStyles.slashtext}>/</Text>
                  <Textinput placeholder="YY" placeholderTextColor="#3A3A3A" inputStyle={appStyles.radiomodallabel2} />
                  <Textinput placeholder="CVV" placeholderTextColor="#3A3A3A" inputStyle={appStyles.radiomodallabel3} />
                </View>
              </View>

              <View style={appStyles.touchable31}>
                <LinearGradient
                  colors={['#293D3D', '#000000']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={appStyles.button28}
                >
                  <CustomButton onPress={closeModal} title="Save" textColor="#FFFFFF" style={appStyles.buttonText3} />
                </LinearGradient>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

const DateCardInput = ({
  style,
  time,
  inputPlaceholder,
  onInputChange,
  placeholderTextColor,
  keyboardType,
  isSelected,
  onPress,
}) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [localSelected, setLocalSelected] = useState(false);

  useEffect(() => {
    setLocalSelected(isSelected);
  }, [isSelected]);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  const cardBackgroundColor = localSelected || isInputFocused ? '#FFFFFF' : '#FFFFFF';

  const handleCardPress = () => {
    onPress();
  };

  return (
    <TouchableWithoutFeedback onPress={handleCardPress}>
      <View
        style={[
          appStyles.cardview,
          style,
          { backgroundColor: cardBackgroundColor },
          isInputFocused && appStyles.focusedCard,
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          <Text>{time}</Text>
          <TextInput
            style={appStyles.input}
            placeholder={inputPlaceholder}
            onChangeText={onInputChange}
            placeholderTextColor={placeholderTextColor}
            keyboardType={keyboardType}
            maxLength={2}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export { DateCard, DateCardInput }