import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import authNavigation from "./authNavigation"
import Appnavigation from '../../src/Navigation/appNavigation/index';
import AsyncStorage from '@react-native-async-storage/async-storage';

const checkUserAuthentication = async () => {
    try {
        const userLoggedIn = await AsyncStorage.getItem('userLoggedIn');
        if (userLoggedIn === 'true') {
            return 'Home';
        } else {
            return 'Oyl'; 
        }
    } catch (error) {       
        return 'Oyl'; 
    }
};

const Stack = createNativeStackNavigator();
const Root = () => {
    const initialScreen = checkUserAuthentication();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={initialScreen} screenOptions={{ headerShown: false }}>
                <Stack.Screen name='auth' component={authNavigation} />
                <Stack.Screen name='Appnavigation' component={Appnavigation} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Root;
