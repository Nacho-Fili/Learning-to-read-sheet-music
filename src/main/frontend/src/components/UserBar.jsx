import Flex from "../utils/Flex";
import Div from "./Div";
import UseUser from "../hooks/UseUser";
import P from "./UserOptions";
import Button from "./Button";
import colors from "../colors/colors";
import UserOptions from "./UserOptions";


export default function UserBar(){

    const { isLogged } = UseUser()

    return(
        <Div height={isLogged() ? '50px' : '0px' }
             display={Flex} alignItems='center' justifyContent='flex-end'
             backgroundColor={colors.midStrong}>

            {isLogged() &&
                <UserOptions>Pepito</UserOptions>
            }
        </Div>
    )
}