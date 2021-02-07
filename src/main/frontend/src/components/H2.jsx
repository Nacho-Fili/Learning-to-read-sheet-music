import React, {Component} from 'react'
import colors from '../colors/colors'

const style = {

    minWidth: '50vw',
    padding: '2vh 0 0 0',
    fontSize: '2rem',
    color: colors.light,
    margin: '5vh 0 3vh 0',
    textAlign: 'center'
}

export default class H2 extends Component {
    render() {
        const {children} = this.props

        return (
            <h2 style={style}>
                {children}
            </h2>
        )
    }
}
