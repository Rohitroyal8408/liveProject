import React from 'react'
import {
    Container,
    FormWrap,
    Icon,
    Formcontent,
    Form,
    FormH1,
    FormLable,
    FormInput,
    FormButton,
    Text
} from './SigninComp';

const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Logo</Icon>
                    <Formcontent>
                        <Form action="#">
                            <FormH1>Sign in to your account</FormH1>
                            <FormLable htmlFor='for'>Email</FormLable>
                            <FormInput type='email' required/>
                            <FormLable htmlFor='for'>Password</FormLable>
                            <FormInput type='password' required/>
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot Password</Text>
                        </Form>
                    </Formcontent>
                </FormWrap>
            </Container>
        </>
    )
}

export default SignIn
