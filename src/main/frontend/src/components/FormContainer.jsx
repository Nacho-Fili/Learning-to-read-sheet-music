import React, {Component} from 'react'
import colors from "../colors/colors";
import H2 from './H2'


const style = {
    borderRadius: '50px',
    border: `4px solid ${colors.light}`,
    width: '40vw',
    height: '120vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7vh'
}

export default class FormContainer extends Component{

    render() {

        const { children, title } = this.props

        return(
            <div style={style}>
                <H2>{title}</H2>
                {children}
            </div>
        )
    }
}