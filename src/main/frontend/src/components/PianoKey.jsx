
export default function PianoKey({note}){

    const style = {
        keyStyle:{
            display:'inline-block',
            backgroundColor: 'white',
            minWidth: '40px',
            width: '5%',
            height: '80%',
            border: '1px solid black'
        },

        internalKeyStyle:{
          display: 'flex',
          justifyContent: 'center'
        },

        noteStyle: {
            position: 'absolute',
            bottom: '100px',
        }

    }

    return(
        <div style={style.keyStyle}>
            <div style={style.internalKeyStyle}>
                <span style={style.noteStyle}>{note}</span>
            </div>
        </div>
    )
}