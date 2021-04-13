import White from "./White"


export default function Whites({ quantity }){
    
    const whites = []
    const INITIAL_POSITION = 200

    for(let i = 0;  i < quantity; i++)
        whites.push(<White position={ INITIAL_POSITION }  key={`white ${quantity}`} />)

    return(
        { whites }
    )
}