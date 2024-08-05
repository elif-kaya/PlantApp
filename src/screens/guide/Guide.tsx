import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {rootNavigation} from 'routes/RootNavigation';

import routeKeys from 'common/routeKeys';

import {getStyles} from './GuideStyle';

import {ScreenComponent, CustomImageComponent} from 'components';
import {ButtonComponent} from 'components/button';
import background from 'assets/images/Background.png';
import {CustomTextComponent} from 'components/custom-text';

const Guide = (): React.JSX.Element => {
  const {t} = useTranslation();
  const styles = getStyles();
  const navigation = useNavigation();
  const boldTextArray = [
    { index: 2, weight: '600' }
  ];

  return (
    <View
    ></View>
  )
};

export default Guide;
