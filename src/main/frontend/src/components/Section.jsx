import React, {Component} from 'react'

import colors from '../colors/colors'

const style = {
    background: `linear-gradient(${colors.midStrong}, ${colors.midLight})`,
    minHeight: '71.4vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
}

export default class Section extends Component {
    render() {

        const {children} = this.props

        return (
            <section style={style}>
                {children}
            </section>
        )
    }
}