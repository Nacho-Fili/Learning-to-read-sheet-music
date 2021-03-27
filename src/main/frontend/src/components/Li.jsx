import React, {Component} from 'react'
import colors from '../colors/colors'


const style = {
    color: colors.light,
    fontSize: '80%',
}

export default class Li extends Component {
    render() {

        const {children, onClick} = this.props

        return (
            <li onClick={onClick} style={style}>{children}</li>
        )
    }
}