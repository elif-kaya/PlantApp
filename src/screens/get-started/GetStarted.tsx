import React, {useEffect} from 'react';
import {SafeAreaView, View, Image, ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {rootNavigation} from 'routes/RootNavigation';

import routeKeys from 'common/routeKeys';

import {getStyles} from './GetStartedStyle';

import {ButtonComponent} from 'components/button';
import getStartedCover from 'assets/images/get-started/getStartedCover.png';
import background from 'assets/images/Background.png';
import {CustomTextComponent} from 'components/custom-text';

const GetStarted = (): React.JSX.Element => {
  const {t} = useTranslation();
  const styles = getStyles();
  const navigation = useNavigation();
  const boldTextArray = [
    { index: 2, weight: '600' }
  ];
  const handleGetStartedClick = (): void =>
  navigation.dispatch(rootNavigation.navigate(routeKeys.guide));


  return (
    <ImageBackground source={background} resizeMode="cover"
    style={{
      flex: 1,  justifyContent: 'center',
    }} >
    <SafeAreaView style={styles.view}>
      <View style={styles.header}>
       <CustomTextComponent style={styles.title} boldTextArray={boldTextArray} weight={'400'}>
          {t('get_started.title')}
        </CustomTextComponent>
        <CustomTextComponent style={styles.info} weight={'400'}>
          {t('get_started.info')}
        </CustomTextComponent>
        </View>
      <Image  style={styles.image} source={getStartedCover}></Image>
      <View style={styles.buttonContainer}>
        <ButtonComponent
          variant="primary"
          text={t('get_started.button')}
          onPress={handleGetStartedClick}
        />
      </View>
      <View style={styles.bottomContainer}>
        <CustomTextComponent style={styles.agreePolicies} weight={'400'}>
          {t('get_started.aggree_to_policies')}
        </CustomTextComponent>
        
      </View>
      <View style={styles.bottomButtonContainer}>
          <ButtonComponent
            variant="tertiary"
            text={t('get_started.terms_of_use')}
            onPress={() => {}}
          />
          <CustomTextComponent style={styles.agreePoliciesButtons} weight={'400'}>
            {t('get_started.and')}
          </CustomTextComponent>
          <ButtonComponent
            variant="tertiary"
            text={t('get_started.privacy_policy')}
            onPress={() => {}}
          />
          <CustomTextComponent style={styles.agreePoliciesButtons} weight={'400'}>
            {t('dot')}
          </CustomTextComponent>
        </View>
    </SafeAreaView>
    </ImageBackground>
  );
};

export default GetStarted;
