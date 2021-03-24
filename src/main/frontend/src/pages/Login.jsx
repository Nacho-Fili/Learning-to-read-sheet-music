import React, { Component } from 'react'

import Block            from "../utils/Block";
import Header           from "../components/Header";
import H1               from "../components/H1";
import Section          from "../components/Section";
import FormContainer    from "../components/FormContainer";
import LoginForm             from "../components/LoginForm";
import A                from "../components/A";
import Footer           from "../components/Footer";
import Div              from "../components/Div";
import Input            from "../components/Input";

import LoginFormHandler from "../utils/LoginFormHandler"

export default class Login extends Component{

    render(){
        return(
        <>
            <Div display={Block}>
                <Header>
                    <H1>¡Aprende a leer partituras!</H1>
                </Header>
                <Section>
                    <FormContainer title='Login'>
                        <LoginForm/>
                        <A>Registrate!</A>
                    </FormContainer>
                </Section>
                <Footer>
                </Footer>
            </Div>
        </>
        )
    }
}
