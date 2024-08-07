// React and Hooks
import React, { useCallback, useEffect, useState } from 'react';

// React Native Components
import { View, Image, ImageBackground } from 'react-native';

// Third-Party Libraries
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

// Services and API
import { useGetCategoriesMutation, useGetQuestionsMutation } from 'services/api';
import { CategoriesResponse, QuestionsResponse } from 'services/models';

// Assets
import background from 'assets/images/home/Background.png';
import message from 'assets/icons/message.png';

// Custom Components
import { CustomTextComponent } from 'components/custom-text';

// Local Styles
import { getStyles } from './HomeStyle';

const Home = (): React.JSX.Element => {
  const {t} = useTranslation();
  const styles = getStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<QuestionsResponse | undefined>();
  const [categories, setCategories] = useState<
    CategoriesResponse | undefined
  >();

  const [getQuestionsMutation, questionsResponse] = useGetQuestionsMutation();
  const [getCategoriesMutation, categoriesResponse] =
    useGetCategoriesMutation();

  const getQuestions = useCallback(async () => {
    try {
      await getQuestionsMutation().unwrap();
    } catch (err) {
      console.log('Error getting questions', err);
    }
  }, [getQuestionsMutation]);

  const getCategories = useCallback(async () => {
    try {
      await getCategoriesMutation().unwrap();
    } catch (err) {
      console.log('Error getting categories', err);
    }
  }, [getCategoriesMutation]);

  useEffect(() => {
    getQuestions();
    getCategories();
  }, [getQuestions]);

  useEffect(() => {
    if (questionsResponse) {
      setQuestions(questionsResponse.data);
    }
    if (categoriesResponse) {
      setCategories(categoriesResponse.data);
    }
  }, [questionsResponse, categoriesResponse]);

  return (
    <ImageBackground
      source={background}
      imageStyle={styles.imageBackgroundImageStyle}
      resizeMode="contain"
      style={styles.imageBackgroundStyle}>
      <View style={styles.container}>
        <View style={styles.premiumContainer}>
          <Image source={message} style={styles.messageIcon}></Image>
          <View style={{flexDirection: 'column'}}>
          <CustomTextComponent weight={'700'} style={styles.freePremium}>
            {t('home.free_premium')}
          </CustomTextComponent>
          <CustomTextComponent weight={'700'} style={styles.freePremium}>
            {t('home.free_premium')}
          </CustomTextComponent>
          </View>
          
        </View>
        
      </View>
    </ImageBackground>
  );
};

export default Home;
