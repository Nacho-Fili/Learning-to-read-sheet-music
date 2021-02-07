import React, {Component} from 'react'
import colors from '../colors/colors'

const style = {
    margin: '2vh 0.5vh',
    border: "0px",
    borderBottom: `3px solid ${colors.strong}`,
    padding: '3vh 4vh',
    width: '20vw',
    backgroundColor: 'rgba(255,255,255,0)',
    outline: 'none',
    color: colors.light
}

export default class Input extends Component {

    render() {

        const {type, placeholder, className, name} = this.props

        return (
            <input name={name} type={type} placeholder={placeholder} style={style} className={className}/>
        )
    }
}
