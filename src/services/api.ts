import { createApi } from '@reduxjs/toolkit/query/react';
import {APIBaseQuery} from './APIBaseQuery';
import {HomeRoutes} from './endpoints';
import {QuestionsResponse, CategoriesResponse} from 'services/models/';



const API_BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app/'

export const homeApi = createApi({
    reducerPath: 'homeApi',
    baseQuery: APIBaseQuery({
        baseUrl : API_BASE_URL,

    }),
    endpoints: (builder) =>({
        GetQuestions : builder.mutation<QuestionsResponse,void>({
            query:()=>({
                
                url: HomeRoutes.GetQuestions,
                method: 'GET',
            })
        }),
        GetCategories : builder.mutation<CategoriesResponse,void>({
            query(){
                return{
                url: HomeRoutes.GetCategories,
                method: 'GET',
                }
            }
        })
    })
});

export const {
    useGetQuestionsMutation,
    useGetCategoriesMutation
} = homeApi;