import colors from "../colors/colors";

export default function BlackLine(){

    const style = {
        line: {
            height: '4px',
            width: '100%',
            backgroundColor: colors.light,
            display: 'flex',
            alignItems: 'center'
        },

        white: {
            borderRadius: '30px',
            width: '12px',
            height: '8px',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            border: '2px solid white',
            position: 'relative',
            left: '50px'
        }
    }

    return(
        <div style={{
            backgroundColor: colors.midStrong,
            height: '6px',
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }}>
            <div style={style.line}>
                <div style={style.white}/>
            </div>
        </div>
    )
}