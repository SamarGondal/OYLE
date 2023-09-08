import { StatusBar, View, Text,ImageBackground } from 'react-native'
import React from 'react';
import { appStyles } from '../../../services/utilities/appStyles';
import { DateCard } from '../../../components/CardView/DateCard';
import Header from '../../../../src/components/Header/header';
import { backgroundImage,backiconimage,stripeimage,androidpayimage,applepayimage,bitpayimage,affirmimage,klarnaimage} from '../../../../src/services/utilities/assets/assets'

const Payment = ({ navigation }) => {

    return (

        <View style={appStyles.mainView1}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <ImageBackground style={appStyles.Image1} source={backgroundImage.Oylbackground} />
                 <Header
                    title="Select Price & Payment Method"
                    onBackPress={() => {
                        navigation.navigate('Oyl');
                    }}
                    backIcon={backiconimage.backicon}
                />
                <View style={appStyles.secondview}>
                    <View style={appStyles.dollormainview}>
                        <View style={appStyles.dollormainview1}>
                        </View>
                        <View style={appStyles.dollormainview2}>
                            <Text style={appStyles.OYLtext}>YOUR OYL AND FYLTER CHANGE WILL BE </Text>
                            <View style={appStyles.eightyseven}>
                                <Text style={appStyles.eightyseventext1}>$ </Text>
                                <Text style={appStyles.eightyseventext2}>87 </Text>
                            </View>
                            <Text style={appStyles.Milestext1}>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES- </Text>
                            <Text style={appStyles.Milestext2}>SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID</Text>
                            <Text style={appStyles.Milestext3}>AND AIR UP YOURS TIRES </Text>
                        </View>
                    </View>
                    <Text style={appStyles.paymentmethodtext}>Payment Methods</Text>
                    <View style={appStyles.cardlist1}>
                        <DateCard
                            imageSource={stripeimage.stripe}
                            inputstyle={appStyles.Accountimagesinputstyle}
                            style={appStyles.Accountimagesstyle} />
                        <DateCard
                            imageSource={androidpayimage.androidpay}
                            inputstyle={appStyles.Accountimagesinputstyle}
                            style={appStyles.Accountimagesstyle} />
                        <DateCard
                            imageSource={applepayimage.applepay}
                            inputstyle={appStyles.Accountimagesinputstyle}
                            style={appStyles.Accountimagesstyle} />
                    </View>
                    <View style={appStyles.cardlist2}>
                        <DateCard
                            imageSource={bitpayimage.bitpay}
                            inputstyle={appStyles.Accountimagesinputstyle}
                            style={appStyles.Accountimagesstyle} />
                        <DateCard
                            imageSource={affirmimage.affirm}
                            inputstyle={appStyles.Accountimagesinputstyle1}
                            style={appStyles.Accountimagesstyle} />
                        <DateCard
                            imageSource={klarnaimage.klarna}
                            inputstyle={appStyles.Accountimagesinputstyle}
                            style={appStyles.Accountimagesstyle} />
                    </View>
                </View>
            </View>
    )
}



export default Payment;