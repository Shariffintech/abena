import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const abenaApi = createApi({

    reducerPath: 'abenaApi',
    baseQuery: fetchBaseQuery({baseURL: 'http://localhost:3000/api/v1'}),
    endpoints: {
        getStudents: {
            url: '/students',
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            } 
        },
        getStrategies: {
            url: '/strategies',
            method: 'get',
            headers: {
                'Content-Type': 'application/json'

            }
        },
        getStudent: {
            url: '/students/:id',
            method: 'get',
            headers: {

                'Content-Type': 'application/json'
            }
        },
        getStrategy: {
            url: '/strategies/:id',
            method: 'get',
            headers: {
                
                'Content-Type': 'application/json'
        }
    },
        createStudent: {
            url: '/students',
            method: 'post',
            headers: {

                'Content-Type': 'application/json'
            }
        },

        createStrategy: {
            url: '/strategies',
            method: 'post',
            headers: {

                'Content-Type': 'application/json'
            }
        },

        updateStudent: {
            url: '/students/:id',
            method: 'put',
            headers: {

                'Content-Type': 'application/json'
            }
        },

        updateStrategy: {
            url: '/strategies/:id',
            method: 'put',
            headers: {
            
                'Content-Type': 'application/json'
            }
        },

        deleteStudent: {
            url: '/students/:id',
            method: 'delete',
            headers: {
            
                'Content-Type': 'application/json'
            }
        },

        deleteStrategy: {
            url: '/strategies/:id',
            method: 'delete',

            headers: {

                'Content-Type': 'application/json'
            }
        }
        
    // endpoints:(builder) => ({
    //     getStrategyById: builder.query <Strategy, string> ({
    //         query: (id) => `strategy/${id}`,
    //     }),
    // }),


}})

