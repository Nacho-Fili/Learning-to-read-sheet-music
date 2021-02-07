import React, {Component} from 'react'

const style = (_gridColumn, _gridRow) => ({
    gridColumn: _gridColumn,
    gridRow: _gridRow,
    objectFit: 'cover',
    objectPosition: 'center',
    width: '95%',
    height: '90%'
})

export default class GridImg extends Component {

    render() {

        const {src, alt} = this.props
        let {gridColumn, gridRow} = this.props

        if (!gridRow)
            gridRow = '1/2'

        if (!gridColumn)
            gridColumn = '1/2'

        return (
            <img src={src} alt={alt} style={style(gridColumn, gridRow)}/>
        )
    }
}