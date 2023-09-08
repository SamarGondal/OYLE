import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import {appStyles} from '../../../src/services/utilities/appStyles/index'
import PropTypes from 'prop-types';

const Header = ({ title, onBackPress, backIcon, titleStyle }) => {
    return (
      <View style={appStyles.statusbarbottom}>
        <TouchableOpacity onPress={onBackPress}>
          <Image style={appStyles.BackIcon2} source={backIcon} />
        </TouchableOpacity>
        <View style={appStyles.centeredTextContainer}>
        <Text style={[appStyles.text12, titleStyle]}>{title}</Text>
        </View>
      </View>
    );
  };
  
  Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBackPress: PropTypes.func.isRequired,
    backIcon: PropTypes.number.isRequired,
    titleStyle: PropTypes.object, 
  };
  
  export default Header;
