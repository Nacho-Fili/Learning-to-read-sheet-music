import React, {Component} from 'react'
import NoneDisplay from '../utils/NoneDisplay'


const style = (_width, _height, displayStyle) => ({
    height: _height,
    width: _width,
    margin: '0',
    ...displayStyle
})

export default class Div extends Component {

    render() {

        const {children, width, height, display} = this.props
        let displayStyle

        if (!display)
            displayStyle = NoneDisplay.createStyleObject()

        else
            displayStyle = display.createStyleObject(this.props)


        return (
            <div style={style(width, height, displayStyle)}>
                {children}
            </div>
        )
    }
}