import React, { Component } from 'react'
import Img from "./Img";
import pianoImg from "../img/piano.jpg";
import Section from "./Section";
import Div from "./Div";
import Footer from "./Footer";
import H1 from "./H1";
import Header from "./Header";
import P from "./P";


export default class Home extends Component{

    render(){
        return(
            <>
                <Header>
                    <H1>Bienvenido a Learning to read sheet music</H1>
                </Header>
                <Section>
                    <Div height='90vh' width='98.9vw'>
                        <Img src={pianoImg}></Img>
                    </Div>
                    <P>
                        Bienvenido a la aplicación dedicada a aprender a leer
                        partituras jugando!
                    </P>
                </Section>
                <Footer></Footer>
            </>
        )
    }
}