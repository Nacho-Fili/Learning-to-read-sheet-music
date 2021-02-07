import React, {Component} from 'react'
import colors from "../colors/colors";

const style = {
    objectFit: 'fill',
    objectPosition: 'center',
    height: '100%',
    width: '100%',
    display: 'block',
    backgroundColor: colors.strong
}

export default class Img extends Component {

    render() {

        const {src, alt} = this.props

        return (
            <img src={src} alt={alt} style={style}/>
        )
    }
}