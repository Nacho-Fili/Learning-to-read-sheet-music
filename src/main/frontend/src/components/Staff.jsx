import WhiteLine from './WhiteLine'
import BlackLine from './BlackLine'
import colors from "../colors/colors";


export default function Staff(){

    const style = {
        gameSection:{
            height:'40%',
            width:'40%',
            backgroundColor: colors.midStrong,
            borderLeft: `2px solid ${colors.midLight}`,
        },

        noGameSection:{
            height:'40%',
            width: '8%',
            backgroundColor: colors.midStrong,
            marginLeft: '26%',
        }
    }

    const shortStaffLines = []
    const longStaffLines = []

    for (let i = 1; i < 12; i++) {
        shortStaffLines.push(i % 2 ? <WhiteLine /> : <BlackLine />)
        longStaffLines.push(i % 2 ? <WhiteLine /> : <BlackLine />)
    }

    return(
        <div style={{display:'flex'}}>
            <div style={style.noGameSection}>
                {shortStaffLines}
            </div>
            <div style={style.gameSection}>
                {longStaffLines}
            </div>
        </div>
    )
}