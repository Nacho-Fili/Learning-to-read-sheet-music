export default class Grid {
    static createStyleObject(props) {
        const {gridTemplateColumns, gridTemplateRows} = props

        return ({
            display: 'grid',
            gridTemplateColumns: gridTemplateColumns,
            gridTemplateRows: gridTemplateRows
        })
    }
}