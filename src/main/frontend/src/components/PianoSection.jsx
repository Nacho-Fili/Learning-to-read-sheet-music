import colors from "../colors/colors";
import PianoKey from "./PianoKey"
import notes from "../data/gNotes"

export default function PianoSection(){

    const style={
        pianoContainer:{
            width: '100%',
            height: '200px',
            backgroundColor: colors.midStrong,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
        },
    }

    const pianoKeys = []

    for (let i = 0; i < notes.length; i++)
        pianoKeys.push(<PianoKey note={notes[i]}/>)



    return(
        <div style={style.pianoContainer}>
            {pianoKeys}
        </div>
    )
}