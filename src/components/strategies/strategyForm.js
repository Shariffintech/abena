import React from 'react';
import {useForm} from 'react-hook-form';
// bulma for styling

export default function strategyForm() {

    const {register, handleSubmit, formState:{errors}} = useForm()
    
    const onSubmit = data => console.log(data);
    return(
        <form onSubmit={handleSubmit(onSubmit)}>

        </form>
    )
}