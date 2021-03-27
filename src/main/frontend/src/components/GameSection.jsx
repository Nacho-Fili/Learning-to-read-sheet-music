
import Staff from "./Staff"
import colors from "../colors/colors";


export default function GameSection(){

    const style = {
        staffContainer: {
            leftBorder: `2px solid ${colors.midLight}`,
            backgroundColor: colors.midStrong,
            paddingBottom: '10%'
        }
    }

    return(
        <div style={{
            height: '80%',
        }}>
            <div style={style.staffContainer}>
                <Staff />
            </div>
        </div>
    )
}