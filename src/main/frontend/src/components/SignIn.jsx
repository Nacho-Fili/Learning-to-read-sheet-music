import React, {Component} from 'react'
import Div from "./Div";
import Block from "../utils/Block";
import Header from "./Header";
import H1 from "./H1";
import Section from "./Section";
import FormContainer from "./FormContainer";
import SignInForm from "./SignInForm";
import A from "./A";
import Footer from "./Footer";

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
                            <SignInForm />
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