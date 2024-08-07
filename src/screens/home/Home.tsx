import React, {useCallback, useEffect, useState} from 'react';
import {SafeAreaView, View, Image, ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';
import {useNavigation} from '@react-navigation/native';

import {rootNavigation} from 'routes/RootNavigation';

import routeKeys from 'common/routeKeys';

import {getStyles} from './HomeStyle';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'common/reduxStore';
import {useGetCategoriesMutation, useGetQuestionsMutation} from 'services/api';
import { CategoriesResponse, QuestionsResponse } from 'services/models';

const Home = (): React.JSX.Element => {
  const {t} = useTranslation();
  const styles = getStyles();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [questions, setQuestions] = useState<QuestionsResponse | undefined>();
  const [categories, setCategories] = useState<CategoriesResponse | undefined>();

  const [getQuestionsMutation, questionsResponse] =
    useGetQuestionsMutation();
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
    if(questionsResponse){
      setQuestions(questionsResponse.data);
    }
    if(categoriesResponse){
      setCategories(categoriesResponse.data);
    }
  }, [questionsResponse, categoriesResponse]);

  return <View></View>;
};

export default Home;
