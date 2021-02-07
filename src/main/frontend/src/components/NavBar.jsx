import react, {Component} from 'react'
import colors from "../colors/colors";

const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.strong,
    borderBottom: `2px solid ${colors.light}`
}

export default class NavBar extends Component{

    render(){
        const {children} = this.props

        return(
            <div style={style} >
                {children}
            </div>
        )
    }
}