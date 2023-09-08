import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { appStyles } from '../../../src/services/utilities/appStyles/index';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '../../../src/components/CustomButton//CustomButton';
import TextInput from '../../../src/components/textInput/index';
import { eyeimage, eyehide3image, locationimage, dropimage } from '../../../src/services/utilities/assets/assets'
import { format } from 'date-fns';

const InputField = ({ label, placeholder, style, imageSource, selectedDate, onDateChange, value, onChangeText, keyboardType, maxLength }) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const showDatePicker = () => {
    if (label === 'Birthday') {
      setDatePickerVisibility(true);
    }
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!isPasswordVisible);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    onDateChange(date);
  };

  const formatDate = (date) => {
    return date ? format(date, 'dd/MM/yyyy') : '';
  };

  return (
    <View style={[appStyles.fieldview2, style && style]}>
      <View style={appStyles.text1View}>
        <Text style={appStyles.edittext1}>{label}</Text>
      </View>
      <View style={appStyles.flex}>
        {label === 'Birthday' ? (
          <Text style={appStyles.edittext2}>{formatDate(selectedDate)}</Text>
        ) : (
          <TextInput
            style={appStyles.edittext2}
            placeholder={placeholder}
            placeholderTextColor="#222222"
            secureTextEntry={imageSource === 'eye' ? !isPasswordVisible : false}
            value={value}
            onChangeText={onChangeText}
            keyboardType={keyboardType}
            maxLength={maxLength}
          />
        )}
        {imageSource && (
          <TouchableOpacity onPress={imageSource === 'eye' ? togglePasswordVisibility : showDatePicker}>
            {imageSource === 'eye' ? (
              <Image
                source={isPasswordVisible ? eyeimage.eye : eyehide3image.eyehide3}
                style={appStyles.calendar}
              />
            ) : (
              <Image source={imageSource} style={appStyles.calendar} />
            )}
          </TouchableOpacity>
        )}

      </View>
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};


const Inputfield1 = ({
  inputName,
  style,
  imageSource,
  inputStyle,
  placeholder,
  value,
  onChangeText,
  editable,
  onSaveLocation,
  selectedOilType,
  anotherImageSource,
  secondImageSource,
  onSaveOil,
}) => {
  const [isLocationModalVisible, setLocationModalVisible] = useState(false);
  const [isAnotherModalVisible, setAnotherModalVisible] = useState(false);
  const [isAnotherModalVisible1, setSecondModalVisible] = useState(false);
  const [locationValue, setLocationValue] = useState('');


  const handleLocationImagePress = () => {
    setLocationModalVisible(true);
  };
  const handleLocationSave = () => {
    closeModal();
    onSaveLocation(locationValue);
  };
  const handleOilSave = (val) => {
    closeModal();
    onSaveOil(val);
  };
  const handleAnotherImagePress = () => {
    setAnotherModalVisible(true);
  };
  const handleAnotherImagePress1 = () => {
    setSecondModalVisible(true);
    navigation.navigate('Oyl');
  };
  const closeModal = () => {
    setLocationModalVisible(false);
    setAnotherModalVisible(false);
  };
  const navigation = useNavigation();
  return (
    <View style={[appStyles.phoneView23, style && style]}>
      <View style={appStyles.EmailView23}>
        <View style={[appStyles.Email25, inputStyle && inputStyle]}>
          <Text style={appStyles.fonts23}>{inputName}</Text>
          <TextInput
            style={appStyles.edittext2}
            placeholder={placeholder}
            placeholderTextColor="#444444CC"
            editable={editable}
            value={value}
            onChangeText={onChangeText}
            onSaveLocation={onSaveLocation}
            onSaveOil={onSaveOil}
          />
          <View style={appStyles.flex}>
            <View style={appStyles.textinputView3}>
            </View>
            {imageSource && (
              <TouchableOpacity onPress={handleLocationImagePress}>
                <Image source={imageSource} style={appStyles.calendar1} />
              </TouchableOpacity>
            )}
            {anotherImageSource && (
              <TouchableOpacity onPress={handleAnotherImagePress}>
                <Image source={anotherImageSource} style={appStyles.calendar1} />
              </TouchableOpacity>
            )}
            {secondImageSource && (
              <TouchableOpacity onPress={handleAnotherImagePress1}>
                <Image source={secondImageSource} style={appStyles.calendar1} />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      <Modal visible={isLocationModalVisible} animationType="slide" transparent={true}>
        <View style={appStyles.modalContainer}>
          <View style={appStyles.modal1}>
            <View style={appStyles.modalcircleviewblack}>
              <Image style={appStyles.modalcircleviewlocation}
                source={locationimage.location} />
            </View>
            <View>
              <Text style={appStyles.locationtext}>Add Location</Text>
            </View>
            <TextInput
              placeholder="Search here"
              placeholderTextColor="#3A3A3A"
              onChangeText={(text) => setLocationValue(text)}
              inputStyle={style = appStyles.searchherefield}
            />
            <View style={appStyles.touchable28}>
              <LinearGradient
                colors={['#293D3D', '#000000']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                style={appStyles.button28}
              >
                <CustomButton
                  onPress={handleLocationSave}
                  title="Save" textColor="#FFFFFF" style={appStyles.buttonText3} />
              </LinearGradient>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={isAnotherModalVisible} animationType="slide" transparent={true}>
        <View style={appStyles.modal2Container}>
          <View style={appStyles.modal2}>
            <View style={appStyles.modalfield}>
              <Inputfield1
                inputName="Oil type"
                placeholder={'Please select Oil type from here \n(All Oil High-Quality Synthetic)'}
                editable={false}
                style={{ marginTop: responsiveHeight(74) }}
                inputStyle={appStyles.oilfieldmodal}
                secondImageSource={dropimage.drop}
                navigation={navigation}
                value={selectedOilType}
              />
            </View>
            <View style={appStyles.modallargefieldview}>
              <TouchableOpacity onPress={() => handleOilSave("Manufacturers Recommendation")}>
                <View style={appStyles.modallargefieldview2}>
                  <Text style={appStyles.modalfieldtext3}>Manufacturers Recommendation</Text>
                </View>
              </TouchableOpacity>
              <View style={appStyles.modallargefieldview2}>
                <Text style={appStyles.modalfieldtext2}>-------OR-------</Text>
              </View>
              <TouchableOpacity onPress={() => handleOilSave("OW-20")}>
                <View style={appStyles.modallargefieldview3}>
                  <Text style={appStyles.modalfieldtext3}>OW-20</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOilSave("5W-20")}>
                <View style={appStyles.modallargefieldview3}>
                  <Text style={appStyles.modalfieldtext3}>5W-20</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOilSave("5W-30")}>
                <View style={appStyles.modallargefieldview3}>
                  <Text style={appStyles.modalfieldtext3}>5W-30</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOilSave("10W-30")}>
                <View style={appStyles.modallargefieldview3}>
                  <Text style={appStyles.modalfieldtext3}>10W-30</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOilSave("10W-40")}>
                <View style={appStyles.modallargefieldview4}>
                  <Text style={appStyles.modalfieldtext3}>10W-40</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
































export { InputField, Inputfield1 };

























