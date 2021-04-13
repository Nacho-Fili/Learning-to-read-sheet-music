import React from 'react'
import H1 from "../components/H1";
import GameSection from "../components/GameSection"
import PianoSection from "../components/PianoSection"
import Header from "../components/Header";
import UseGame from "../hooks/UseGame";

export default function Game(){

    const { score } = UseGame()

    return (
        <>
            <Header>
                <H1>SCORE: { score }</H1>
            </Header>

            <GameSection/>
            <PianoSection/>
        </>
    )
}