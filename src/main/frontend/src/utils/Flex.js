export default class Flex {
    static createStyleObject(props) {
        const {flexDirection, alignItems, justifyContent} = props

        return ({
            display: 'flex',
            flexDirection: flexDirection,
            alignItems: alignItems,
            justifyContent: justifyContent
        })
    }
}