import colors from "../colors/colors"

export default function Button({onClick, text}){
    
    const style = {
        marginTop: '30px',
        outline: 'none',
        height: '5vh',
        width: '10vw',
        border: `2px solid ${colors.strong}`,
        backgroundColor: colors.midStrong,
        color: colors.light,
        borderRadius: '30px'
    }
    
    return(
        <button style={style} onClick={onClick}>
            {text}
        </button>
    )
}