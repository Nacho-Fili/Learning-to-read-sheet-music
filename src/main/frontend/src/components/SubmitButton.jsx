import React, {Component} from 'react'
import colors from '../colors/colors'

const style = ({cursor}) => ({
    borderRadius: '20px',
    border: `2px solid ${colors.strong}`,
    margin: '2vh 0',
    marginBottom: '10vh',
    minWidth: '50px',
    height: '6vh',
    width: '24vw',
    fontSize: '1rem',
    color: colors.light,
    backgroundColor: colors.midStrong,
    outline: 'none',
    cursor
})

export default class SubmitButton extends Component {

    state={
        cursor: 'default'
    }

    changeCursorToPointer = () => {
        this.setState({cursor: 'pointer'})
    }

    changeCursorToNormal = () => {
        this.setState({cursor: 'default'})
    }

    render() {

        return (
            <input style={style(this.state)} type="submit"
                   onMouseEnter={this.changeCursorToPointer}
                   onMouseLeave={this.changeCursorToNormal}
            />
        )
    }
}

