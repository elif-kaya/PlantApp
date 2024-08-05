import React from 'react';
import { NavigationContainerRef } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';

import { RootStackParamList } from 'routes/Routes';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export const rootNavigation = {
  getCurrentRoute: (): string | undefined =>
    navigationRef.current?.getCurrentRoute()?.name ||
    navigationRef.current?.getCurrentRoute()?.key ||
    undefined,
  navigate: <RouteName extends keyof RootStackParamList>(
    name: string,
    params?: RootStackParamList[RouteName]
  ): CommonActions.Action => CommonActions.navigate({ name, params }),
  reset: <RouteName extends keyof RootStackParamList>(
    key: string,
    params?: RootStackParamList[RouteName]
  ): CommonActions.Action =>
    CommonActions.reset({
      index: 0,
      key,
      routes: [
        {
          name: key,
          params,
        },
      ],
    }),
  goBack: (): void => {
    navigationRef.current?.goBack();
  },
};
