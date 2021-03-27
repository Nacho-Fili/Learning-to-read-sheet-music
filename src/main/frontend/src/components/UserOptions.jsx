import P from "./P";
import Div from "./Div";
import UseUser from "../hooks/UseUser";
import UseUserOptions from "../hooks/UseUserOptions";
import Flex from "../utils/Flex";
import Li from "./Li";

export default function UserOptions(){

    const { options, onHover, onHoverOut } = UseUserOptions()
    const { logout } = UseUser()

    return(
        <Div display={Flex} flexDirection='column' height='15%' width='20%'>
            <P onMouseEnter={onHover}>Pepito</P>
            {options &&
                <ul style={{
                    margin: '0',
                    padding: '0',
                    listStyleType:'none'
                }}
                    onMouseEnter={onHover}
                    onMouseLeave={onHoverOut}>

                    <Li><a> Cuenta </a></Li>
                    <Li onClick={logout}><a> Logout </a></Li>

                </ul>
            }
        </Div>
    )
}