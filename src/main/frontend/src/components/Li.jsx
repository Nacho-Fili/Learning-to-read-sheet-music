import React, {Component} from 'react'
import colors from '../colors/colors'


const style = {
    color: colors.light,
    fontSize: '130%',
    margin: '0 0 15px 0'
}

export default class Li extends Component {
    render() {

        const {children} = this.props

        return (
            <li style={style}>{children}</li>
        )
    }
}