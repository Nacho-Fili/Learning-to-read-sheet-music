import React, { Component } from 'react'
import Img      from "../components/Img";
import pianoImg from "../img/piano.jpg";
import Section  from "../components/Section";
import Div      from "../components/Div";
import Footer   from "../components/Footer";
import H1       from "../components/H1";
import Header   from "../components/Header";
import P        from "../components/P";


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