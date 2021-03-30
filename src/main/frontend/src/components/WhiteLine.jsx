import White from "./White"
import colors from "../colors/colors";
import UseGame from "../hooks/UseGame";

export default function WhiteLine({playable, note}){
    const style = {
        line: {
            height: '3px',
            width: '100%',
            backgroundColor: colors.midStrong,
            display: 'flex',
            alignItems: 'center'
        }
    }

    const { notes } = UseGame()

    return(
        <div style={{
            backgroundColor: colors.midStrong,
            height: '10px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={style.line}>
                {(playable === true && notes === note) && <White/>}
            </div>
        </div>
    )
}