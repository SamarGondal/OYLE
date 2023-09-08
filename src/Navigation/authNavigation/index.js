import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Oyl from '../../../src/screens/authflow/Oyl/Oyl';
import CreateAccount from '../../../src/screens/authflow/CreateAccount/CreateAccount';
import SetProfile from '../../../src/screens/authflow/SetProfile/SetProfile';
import Splash from '../../screens/authflow/Splash/Splash';


const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <Stack.Navigator >
      <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
      <Stack.Screen name="Oyl" component={Oyl} options={{ headerShown: false }} />
      <Stack.Screen name="CreateAccount" component={CreateAccount} options={{ headerShown: false }} />
      <Stack.Screen name="SetProfile" component={SetProfile} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default App;