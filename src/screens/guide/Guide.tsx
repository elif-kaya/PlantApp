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
import {CustomSliderComponent} from 'components/slider';
import guide1 from 'assets/images/guide/guide1.png';

const Guide = (): React.JSX.Element => {
  const {t} = useTranslation();
  const styles = getStyles();

  return (
    <SafeAreaView style={styles.container}>
        <CustomSliderComponent>
          <View style={styles.slide}>

            <Image  style={styles.image} source={guide1}></Image>

          </View>
          <View style={styles.slide}>
            <CustomTextComponent style={styles.text} weight={'400'}>
              Slide 2
            </CustomTextComponent>
          </View>
          <View style={styles.slide}>
            <CustomTextComponent style={styles.text} weight={'400'}>
              Slide 3
            </CustomTextComponent>
          </View>
          <View style={styles.slide}>
            <CustomTextComponent style={styles.text} weight={'400'}>
              Slide 1
            </CustomTextComponent>
          </View>
        </CustomSliderComponent>
    </SafeAreaView>
  );
};

export default Guide;
