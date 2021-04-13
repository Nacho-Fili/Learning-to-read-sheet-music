import React from 'react'
import Img      from "../components/Img";
import pianoImg from "../img/piano.jpg";
import Section  from "../components/Section";
import Div      from "../components/Div";
import Footer   from "../components/Footer";
import H1       from "../components/H1";
import Header   from "../components/Header";
import P        from "../components/P";
import Button   from "../components/Button";
import { useHistory } from "react-router-dom"
import UseGame from "../hooks/UseGame";


export default function Home (){

    const history = useHistory()

    const startGame = () => {
        history.push('/game')
    }

    return(
        <>
            <Header>
                <H1>Bienvenido a Learning to read sheet music</H1>
            </Header>
            <Section>
                <Div height='90vh' width='98.9vw'>
                    <Img src={pianoImg}/>
                </Div>
                <P>
                    Bienvenido a la aplicación dedicada a aprender a leer
                    partituras jugando!
                </P>
                <Button onClick={startGame} text='Jugar'/>
            </Section>
            <Footer/>
        </>
    )
}