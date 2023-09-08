import { View, Text, ImageBackground,StatusBar } from 'react-native'
import React,{useEffect} from 'react'
import { appStyles, } from '../../../../src/services/utilities/appStyles'
import Header from '../../../../src/components/Header/header';
import { backiconimage } from '../../../../src/services/utilities/assets/assets'

const Privacy = ({ navigation }) => {

    useEffect(() => {
        navigation.getParent().setOptions({tabBarStyle: {display:'none'}});
        return() =>{
            navigation.getParent().setOptions({tabBarStyle:{display:'flex'}});
        };
        }, [])
        const handlearrow = () => {
            return (
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Appnavigation', params: { screen: 'ExtraScreen' } }],
                })
            )
        };

    return (
        <View style={appStyles.mainView1}>
            <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
            <ImageBackground style={appStyles.Image1} source={require('../../../../src/assets/image/Oylbackground.png')} />
            <Header
                title="Privacy Policy"
                onBackPress={handlearrow}
                backIcon={backiconimage.backicon}
                titleStyle={appStyles.privacypolicy}
            />
            <Text style={appStyles.contenttext}>
                Integer at faucibus urna. Nullam condimentum leo{'\n'}
                id elit sagittis auctor. Curabitur elementum nunc a{'\n'}
                leo imperdiet, nec elementum diam elementum.{'\n'}
                Etiam elementum euismod commodo. Proin{'\n'}
                eleifend eget quam ut efficitur. Mauris a{'\n'}
                accumsan mauris.{'\n'}{'\n'}
                Phasellus egestas et risus sit amet hendrerit.{'\n'}
                Nulla facilisi. Cras urna sem, vulputate sed{'\n'}
                condimentum a, posuere vel enim.{'\n'}{'\n'}
                Integer at faucibus urna. Nullam condimentum leo{'\n'}
                id elit sagittis auctor. Curabitur elementum nunc a{'\n'}
                leo imperdiet, nec elementum diam elementum.{'\n'}
                Etiam elementum euismod commodo.{'\n'}{'\n'}
                Proin eleifend eget quam ut efficitur. Mauris a{'\n'}
                accumsan mauris. Phasellus egestas et risus sit{'\n'}
                amet hendrerit. Nulla facilisi. Cras urna sem,{'\n'}
                vulputate sed condimentum a, posuere vel enim.{'\n'}{'\n'}
                Integer at faucibus urna. Nullam condimentum leo{'\n'}
                id elit sagittis auctor. Curabitur elementum nunc a{'\n'}
                leo imperdiet, nec elementum diam elementum.{'\n'}
                Etiam elementum euismod commodo. Proin{'\n'}
                eleifend eget quam ut efficitur. Mauris a{'\n'}
                accumsan mauris.{'\n'}{'\n'}
                Phasellus egestas et risus sit amet hendrerit.{'\n'}
                Nulla facilisi. Cras urna sem, vulputate sed{'\n'}
                condimentum a, posuere vel enim.
            </Text>
        </View>
    )}


export default Privacy;