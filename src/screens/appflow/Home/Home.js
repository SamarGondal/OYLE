import React, { useState, useEffect } from 'react';
import { View, Text, Image, StatusBar, ScrollView, KeyboardAvoidingView, TouchableHighlight, Platform } from 'react-native';
import { appStyles } from '../../../services/utilities/appStyles';
import { DateCard, DateCardInput } from '../../../components/CardView/DateCard';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import CustomButton from '../../../components/CustomButton/CustomButton';
import { Inputfield1 } from '../../../../src/components/EditField/EditField';
import LinearGradient from 'react-native-linear-gradient';
import Toast from 'react-native-simple-toast';
import { backgroundImage, dotimage, dropimage } from '../../../../src/services/utilities/assets/assets';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

function Home({ navigation }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [activeButton, setActiveButton] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [locationValue, setLocationValue] = useState('');
  const [oilValue, setOilValue] = useState('');
  const [isCard1Selected, setIsCard1Selected] = useState(false);
  const [isCard2Selected, setIsCard2Selected] = useState(false);

  const handleCard1Press = () => {
    setIsCard1Selected(true);
    setIsCard2Selected(false);
  };

  const handleCard2Press = () => {
    setIsCard1Selected(false);
    setIsCard2Selected(true);
  };

  useEffect(() => {
    const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const daydate = currentDate.getDate();

    if (daydate > lastDayOfMonth) {
      const nextMonth = currentDate.getMonth() === 11 ? 0 : currentDate.getMonth() + 1;
      setCurrentDate(new Date(currentDate.getFullYear(), nextMonth, 1));
    }
  }, [currentDate]);

  const handleLocationChange = (text) => {
    setLocationValue(text);
  };

  const handleSaveLocation = (location) => {
    setLocationValue(location);
  };

  const handleOilChange = (text) => {
    setOilValue(text);
  };

  const handleSaveOil = (oilType) => {
    setOilValue(oilType);
  };

  const handleButtonPress = (button) => {
    setActiveButton(button === activeButton ? null : button);
  };

  const handleInputChange = (text) => {
    if (/^\d+$/.test(text)) {
      const numericValue = parseInt(text);
      if (numericValue <= 12) {
        setInputValue(text);
      } else {
        Toast.show('Please enter a valid hour (1-12)', Toast.SHORT,)
        setInputValue('');
      }
    } else {
      setInputValue('');
    }
  };

  const handleInputChange2 = (text) => {
    if (/^\d+$/.test(text)) {
      const numericValue = parseInt(text);
      if (numericValue <= 59) {
        setInputValue2(text);
      } else {
        Toast.show('Please enter a valid minute (0-59)', Toast.SHORT,)
        setInputValue2('');
      }
    } else {
      setInputValue2('');
    }
  };
  const placeholder1 = inputValue === '' ? '05' : '';
  const placeholder2 = inputValue2 === '' ? '00' : '';

  const calculateDayOfWeek = (date) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
  };

  const handleCardPress = (index) => {
    setSelectedCardIndex(index);
  };

  const getCurrentMonth = (monthIndex) => {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',
    ];
    return monthNames[monthIndex];
  };

  const handleButtonPress1 = () => {
    if (areAllFieldsFilled()) {
      const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), selectedCardIndex + 1);
      const day = calculateDayOfWeek(selectedDate);
      const date = selectedDate.getDate();
      const month = getCurrentMonth(selectedDate.getMonth());
      const year = selectedDate.getFullYear();
      const dateInfo = `${day}, ${month} ${date}, ${year}`;
      const selectedData = {
        dateInfo,
        time: `${inputValue || '00'}:${inputValue2 || '00'} ${activeButton || 'AM'}`,
        location: locationValue,
        oilType: oilValue,
      };
      storeDataInFirestore(selectedData);
      navigation.navigate('VehicleInfo');
    } else {
      Toast.show('Please fill in all required fields', Toast.SHORT,)
    }
  };
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderDateCards = () => {
    const daysInMonth = getDaysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    return Array.from({ length: daysInMonth }, (_, index) => {
      const date = index + 1;
      return (
        <DateCard
          key={index}
          day={calculateDayOfWeek(new Date(currentDate.getFullYear(), currentDate.getMonth(), date))}
          month={getCurrentMonth(currentDate.getMonth())}
          date={date}
          style={{ marginLeft: responsiveWidth(3) }}
          isSelected={selectedCardIndex === index}
          onPress={() => handleCardPress(index)}
        />
      );
    });
  };
  const storeDataInFirestore = (selectedData) => {
    const userId = auth().currentUser.uid;
    const userDocRef = firestore().collection('DateCards').doc(userId);

    if (selectedData) {
      userDocRef
        .set(selectedData)
        .then(() => {
          Toast.show('Data saved to Firestore', Toast.SHORT,)
        })
        .catch((error) => {
          console.error(error);
          Toast.show('An error occurred while saving data to Firestore', Toast.SHORT,)
        });
    }
  };
  const areAllFieldsFilled = () => {
    return (
      selectedCardIndex !== null &&
      activeButton !== null &&
      inputValue.trim() !== '' &&
      inputValue2.trim() !== '' &&
      locationValue.trim() !== '' &&
      oilValue.trim() !== ''
    );
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <StatusBar hidden={true} />
      <View style={appStyles.homefirstview1}>
        <View style={appStyles.headerview}>
          <Image style={appStyles.background} source={backgroundImage.Oylbackground} />
          <Text style={appStyles.schedule}>Schedule a Time</Text>
        </View>
      </View>
      <ScrollView
        style={appStyles.scrollview}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={appStyles.homeinfoview1}>
          <View style={appStyles.DetailsView}>
            <Text style={appStyles.Details}>Please Enter Details</Text>
          </View>
          <View style={appStyles.scroll}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              {renderDateCards()}
            </ScrollView>
          </View>
          <View>
            <Text style={appStyles.entertime}>Enter Time</Text>
          </View>
          <View style={appStyles.timeview}>
            <DateCardInput
              placeholderTextColor="#444444"
              inputPlaceholder={placeholder1}
              onInputChange={handleInputChange}
              keyboardType="number-pad"
              style={appStyles.timecardview}
              isSelected={isCard1Selected}
              onPress={handleCard1Press}
            />
            <View style={appStyles.colonview}>
              <Text style={appStyles.colon}>:</Text>
            </View>
            <DateCardInput
              placeholderTextColor="#444444"
              inputPlaceholder={placeholder2}
              onInputChange={handleInputChange2}
              keyboardType="number-pad"
              isSelected={isCard2Selected}
              onPress={handleCard2Press}
            />
            <View style={appStyles.ampmview}>
              <TouchableHighlight
                onPress={() => handleButtonPress('AM')}
                style={[
                  appStyles.amText1,
                  activeButton === 'AM' && { backgroundColor: '#FFFFC8', color: '#FFFFFF' },
                ]}
                underlayColor="transparent"
              >
                <Text style={appStyles.amText}>AM</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => handleButtonPress('PM')}
                style={[
                  appStyles.pmText1,
                  activeButton === 'PM' && { backgroundColor: '#FFFFC8', color: '#FFFFFF' },
                ]}
                underlayColor="transparent"
              >
                <Text style={appStyles.pmText}>PM</Text>
              </TouchableHighlight>
            </View>
          </View>
          <Inputfield1
            inputName="Enter Location"
            placeholder="Please enter your address"
            value={locationValue}
            onChangeText={handleLocationChange}
            onSaveLocation={handleSaveLocation}
            style={appStyles.homefield1}
            inputStyle={appStyles.oylinputfield}
            imageSource={dotimage.dot}
          />
          <Inputfield1
            inputName="Oil type"
            placeholder={'Please select Oil type from here \n(All Oil High-Quality Synthetic)'}
            style={appStyles.homefield2}
            inputStyle={appStyles.oylinputfield}
            anotherImageSource={dropimage.drop}
            value={oilValue}
            onSaveOil={handleSaveOil}
            onChangeText={handleOilChange}
          />

          <View style={appStyles.touchable25}>
            <LinearGradient
              colors={['#FFFFCC', '#FFFFCC']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={appStyles.button22}
            >
              <CustomButton
                onPress={handleButtonPress1}
                title="Lock it in!"
                style={appStyles.buttonText2}
                disabled={!areAllFieldsFilled()}
              />
            </LinearGradient>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

export default Home;
