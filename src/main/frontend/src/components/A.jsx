import React, {Component} from 'react'
import colors from '../colors/colors'

const style =({cursor}) => ({
    color: colors.light,
    textDecoration: 'none',
    cursor,

})



export default class A extends Component {

    state = {
        cursor: 'pointer'
    }

    changeCursorToPointer = () => {
        this.setState({cursor: 'pointer'})
    }

    changeCursorToNormal = () => {
        this.setState({cursor: 'default'})
    }

    render() {

        const {href, children} = this.props

        return (
            <a href={href} style={style(this.state)}
               onMouseEnter={this.changeCursorToPointer}
               onMouseLeave={this.changeCursorToNormal}
            >
                {children}
            </a>
        )
    }
}
