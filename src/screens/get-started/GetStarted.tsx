import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import { rootNavigation } from 'routes/RootNavigation';

import routeKeys from 'common/routeKeys';

import { getStyles } from './GetStartedStyle';

import { ScreenComponent, CustomImageComponent } from 'components';
import { ButtonComponent } from 'components/button';

const GetStarted = (): React.JSX.Element => {
  const { t } = useTranslation();
  const styles = getStyles();
  const navigation = useNavigation();
   
  return (
      <View style={styles.view}>
      <ButtonComponent variant="primary"
                  text={t('get_started.button')}
                  onPress={()=>{}}/>
      </View>
  );
};

export default GetStarted;

