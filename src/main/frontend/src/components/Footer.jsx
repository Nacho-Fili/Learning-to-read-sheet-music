import React, {Component} from 'react'
import colors from '../colors/colors'


const style = (_justifyContent, _flexDirection) => ({
    backgroundColor: colors.midLight,
    minHeight: '10vh',
    display: 'flex',
    flexDirection: _flexDirection,
    justifyContent: _justifyContent,
    alignItems: 'center',

})

export default class Footer extends Component {
    render() {

        const {justifyContent, flexDirection, children} = this.props

        return (
            <footer style={style(justifyContent, flexDirection)}>
                {children}
            </footer>
        )
    }
}