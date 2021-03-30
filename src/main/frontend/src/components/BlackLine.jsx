import colors from "../colors/colors";
import White from "./White";
import UseGame from "../hooks/UseGame";

export default function BlackLine({playable, note}){

    const style = {
        line: {
            height: '4px',
            width: '100%',
            backgroundColor: colors.light,
            display: 'flex',
            alignItems: 'center'
        }
    }

    const {notes} = UseGame()

    console.log(note)
    console.log(notes)

    return(
        <div style={{
            backgroundColor: colors.midStrong,
            height: '6px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }}>
            <div style={style.line}>
                {(playable === true && notes === note) && <White/>}
            </div   >
        </div>
    )
}