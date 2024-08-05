

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routeKeys from 'common/routeKeys';

import GetStartedContainer from 'screens/get-started/GetStartedContainer';

import { enableScreens } from 'react-native-screens';


export type RootStackParamList = {
  getStarted: undefined;
};


enableScreens();
const Stack = createNativeStackNavigator<RootStackParamList>();

const Routes = (): React.JSX.Element => (
        <Stack.Navigator initialRouteName={routeKeys.getStarted}>
          <Stack.Screen
            name={routeKeys.getStarted}
            component={GetStartedContainer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      );
      
export default Routes;
