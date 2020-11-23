import PropTypes from 'prop-types';
import React from 'react';
ip
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {
    const schema =yup.object().shape({
        title: yup.string().required('please enter title').min(5,'Title is too short'),

    });
    const form = useForm({
        defaultValues : {
            title: '',
        },
        resolver: yupResolver(schema),
    });
    const handleSubmit = (value) => {
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(value);
        }
        form.reset()
    };
    return (
        <div>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign up
            </Typography>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                
                <InputField name="title" lable="todo"/>
            </form>
        </div>
    );
}

export default RegisterForm;