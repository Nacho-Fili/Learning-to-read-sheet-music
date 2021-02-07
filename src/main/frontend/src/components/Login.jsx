import React, { Component } from 'react'

import Block            from "../utils/Block";
import Header           from "./Header";
import H1               from "./H1";
import Section          from "./Section";
import FormContainer    from "./FormContainer";
import Form             from "./Form";
import A                from "./A";
import Footer           from "./Footer";
import Div              from "./Div";


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
                        <Form />
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
