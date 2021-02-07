import React, {Component} from 'react'
import './Ul.css'

const style = {
    listStyleType: 'none',
    maxWidth: '50vw',
    display: 'flex',
    flexDirection: 'column',
}

export default class Ul extends Component {

    render() {
        const {children} = this.props

        return (
            <ul style={style}> {children} </ul>
        )
    }
}