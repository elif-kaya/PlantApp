import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {rootNavigation} from 'routes/RootNavigation';

import routeKeys from 'common/routeKeys';

import {getStyles} from './PremiumStyle';
import background from 'assets/images/premium/Image.png';
import icon from 'assets/icons/Icon.png';
import color from 'common/color';
import {CustomTextComponent} from 'components/custom-text';
import {CustomSliderComponent} from 'components/slider';
import {ScrollView} from 'react-native';
import {ButtonComponent} from 'components/button';

const Premium = (): React.JSX.Element => {
  const {t} = useTranslation();
  const styles = getStyles();
  const boldTextArray = [{index: 0, weight: '800'}];
  const [selectedOption, setSelectedOption] = useState(null);

  const renderItemRadio = ({item}) => (
    <TouchableOpacity
      style={[
        styles.optionContainer,
        selectedOption === item.id && styles.selectedContainer,
      ]}
      onPress={() => setSelectedOption(item.id)}>
      <View
        style={[
          styles.bullet,
          selectedOption === item.id && styles.bulletGreen,
        ]}>
        {selectedOption === item.id && <View style={styles.selectedBullet} />}
      </View>
      <View>
        <CustomTextComponent style={styles.optionText} weight={'500'}>
          {item.text}
        </CustomTextComponent>
        <CustomTextComponent style={styles.optionDescription} weight={'300'}>
          {item.description}
        </CustomTextComponent>
      </View>
      {item.badgeText && (
        <View style={styles.badge}>
          <CustomTextComponent style={styles.badgeText} weight={'500'}>
            {item.badgeText}
          </CustomTextComponent>
        </View>
      )}
    </TouchableOpacity>
  );

  const data = [
    {
      id: '1',
      text: t('payment_plan.plans.monthly'),
      description: t('payment_plan.plans.monthly_desc'),
    },
    {
      id: '2',
      text: t('payment_plan.plans.yearly'),
      description: t('payment_plan.plans.yearly_desc'),
      badgeText: t('payment_plan.plans.save_50'),
    },
  ];
  return (
    <ImageBackground
      source={background}
      imageStyle={styles.imageBackgroundImageStyle}
      resizeMode="contain"
      style={styles.imageBackgroundStyle}>
      <View style={styles.container}>
        <CustomTextComponent
          style={styles.title}
          boldTextArray={boldTextArray}
          weight={'300'}>
          {t('payment_plan.title')}
        </CustomTextComponent>
        <CustomTextComponent style={styles.description} weight={'300'}>
          {t('payment_plan.access_all')}
        </CustomTextComponent>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollContainer}>
          <View style={styles.slide}>
            <View style={styles.iconContainer}>
              <Image source={icon}></Image>
            </View>
            <CustomTextComponent style={styles.sliderTitleText} weight={'500'}>
              {t('payment_plan.payment_types.unlimited')}
            </CustomTextComponent>
            <CustomTextComponent
              style={styles.sliderDescriptionText}
              weight={'400'}>
              {t('payment_plan.payment_types.unlimited_desc')}
            </CustomTextComponent>
          </View>
          <View style={styles.slide}>
            <View style={styles.iconContainer}>
              <Image source={icon}></Image>
            </View>
            <CustomTextComponent style={styles.sliderTitleText} weight={'500'}>
              {t('payment_plan.payment_types.faster')}
            </CustomTextComponent>
            <CustomTextComponent
              style={styles.sliderDescriptionText}
              weight={'400'}>
              {t('payment_plan.payment_types.faster_desc')}
            </CustomTextComponent>
          </View>
          <View style={styles.slide}>
            <View style={styles.iconContainer}>
              <Image source={icon}></Image>
            </View>
            <CustomTextComponent style={styles.sliderTitleText} weight={'500'}>
              {t('payment_plan.payment_types.detailed')}
            </CustomTextComponent>
            <CustomTextComponent
              style={styles.sliderDescriptionText}
              weight={'400'}>
              {t('payment_plan.payment_types.detailed_desc')}
            </CustomTextComponent>
          </View>
        </ScrollView>

        <FlatList
          data={data}
          renderItem={renderItemRadio}
          keyExtractor={item => item.id}
        />
        <View style={styles.buttonContainer}>
          <ButtonComponent
            variant="primary"
            text={t('payment_plan.try_free')}
            onPress={() => {}}
          />
        </View>
        <CustomTextComponent style={styles.legal} weight={'400'}>
          {t('payment_plan.legal_info')}
        </CustomTextComponent>
        <CustomTextComponent style={styles.termsPrivacyRestore} weight={'500'}>
          {t('payment_plan.terms_privacy_restore')}
        </CustomTextComponent>
      </View>
    </ImageBackground>
  );
};

export default Premium;
