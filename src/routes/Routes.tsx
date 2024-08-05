

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routeKeys from 'common/routeKeys';

import GetStartedContainer from 'screens/get-started/GetStartedContainer';
import GuideContainer from 'screens/guide/GuideContainer';

import { enableScreens } from 'react-native-screens';


export type RootStackParamList = {
  getStarted: undefined;
  guide: undefined;
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
          <Stack.Screen
            name={routeKeys.guide}
            component={GuideContainer}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      );
      
export default Routes;
