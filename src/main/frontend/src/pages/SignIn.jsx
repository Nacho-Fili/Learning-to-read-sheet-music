import React, {Component} from 'react'

import Block            from "../utils/Block";
import Div              from "../components/Div";
import Header           from "../components/Header";
import H1               from "../components/H1";
import Section          from "../components/Section";
import FormContainer    from "../components/FormContainer";
import A                from "../components/A";
import Footer           from "../components/Footer";
import Input            from "../components/Input";
import LoginForm             from "../components/LoginForm";

import SignInFormHandler from "../utils/SignInFormHandler"

export default class SignIn extends Component {

    render(){
        return(
            <>
                <Div display={Block}>
                    <Header>
                        <H1>¡Aprende a leer partituras!</H1>
                    </Header>
                    <Section>
                        <FormContainer title='Sign In'>
                            <LoginForm formHandler={new SignInFormHandler()}>
                                
                            </LoginForm>
                            <A>Login</A>
                        </FormContainer>
                    </Section>
                    <Footer>
                    </Footer>
                </Div>
            </>
        )
    }
}