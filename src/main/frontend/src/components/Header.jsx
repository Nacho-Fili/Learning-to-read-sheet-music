import React, {Component} from 'react'
import colors from '../colors/colors'

const style = (_flexDirection) => ({
    backgroundColor: colors.midStrong,
    minHeight: '20vh',
    display: 'flex',
    flexDirection: _flexDirection,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 1vmin)',
    paddingTop: '10vh',
    color: colors.light,
})

export default class Header extends Component {
    render() {

        const {children, flexDirection} = this.props

        return (
            <header style={style(flexDirection)}>
                {children}
            </header>
        )
    }
}