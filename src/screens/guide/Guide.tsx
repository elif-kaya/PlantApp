// React and Hooks
import React, { useEffect } from 'react';

// React Native Components
import { SafeAreaView, View, Image, ImageBackground } from 'react-native';

// Third-Party Libraries
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

// Navigation
import { rootNavigation } from 'routes/RootNavigation';
import routeKeys from 'common/routeKeys';

// Local Assets
import brush from 'assets/images/guide/brush.png';
import guide1 from 'assets/images/guide/guide1.png';
import guide2 from 'assets/images/guide/guide2.png';

// Custom Components
import { ButtonComponent } from 'components/button';
import { CustomTextComponent, WeightType } from 'components/custom-text';
import { CustomSliderComponent } from 'components/slider';

// Local Styles
import { getStyles } from './GuideStyle';


const Guide = (): React.JSX.Element => {
  const {t} = useTranslation();
  const styles = getStyles();
  const navigation = useNavigation();
  const boldTextArrayGuide1 = [{index: 2, weight: '800' as WeightType},{index: 3, weight: '800' as WeightType}];

  const handleContinueClick = (): void =>
  navigation.dispatch(rootNavigation.navigate(routeKeys.premium));


  return (
    <SafeAreaView style={styles.container}>
      <CustomSliderComponent>
        <View style={styles.slide}>
          <CustomTextComponent
            style={styles.title}
            boldTextArray={boldTextArrayGuide1}
            weight={'500'}>
            {t('guide.guide_1_title')}
          </CustomTextComponent>
          <Image style={styles.imageBrushGuide1} source={brush}></Image>
          <Image style={styles.image} source={guide1}></Image>
          
        </View>
        <View style={styles.slide}>
        <CustomTextComponent
            style={styles.title}
            boldTextArray={boldTextArrayGuide1}
            weight={'500'}>
            {t('guide.guide_2_title')}
          </CustomTextComponent>
          <Image style={styles.imageBrushGuide2} source={brush}></Image>
          <Image style={styles.image} source={guide2}></Image>
          
      
        </View>
      </CustomSliderComponent>
      <View style={styles.buttonContainer}>
            <ButtonComponent
              variant="primary"
              text={t('continue')}
              onPress={handleContinueClick}
            />
          </View>
    </SafeAreaView>
  );
};

export default Guide;
