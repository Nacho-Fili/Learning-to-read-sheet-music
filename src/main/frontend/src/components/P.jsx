import React, {Component} from 'react'
import colors from '../colors/colors'

const style = {
    color: colors.light,
}

export default class P extends Component {
    render() {

        const {children, onMouseEnter, onMouseLeave} = this.props

        return (
            <p style={style}
               onMouseEnter={onMouseEnter}
               onMouseLeave={onMouseLeave}>

                {children}

            </p>
        )
    }
}