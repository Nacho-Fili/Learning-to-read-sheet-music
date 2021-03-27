
import colors from "../colors/colors";

export default function WhiteLine(){
    const style = {
        line: {
            height: '3px',
            width: '100%',
            backgroundColor: colors.midStrong,
            display: 'flex',
            alignItems: 'center'
        },

        white: {
            borderRadius: '30px',
            width: '12px',
            height: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            border: '2px solid white'
        }
    }

    return(
        <div style={{
            backgroundColor: colors.midStrong,
            height: '10px',
            display: 'flex',
            alignItems: 'center'
        }}>
            <div style={style.line}>
                <div style={style.white}/>
            </div>
        </div>
    )
}