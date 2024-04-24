import { Title, Menu, Flex, App} from "./style"

import DialogButton from "../../components/DialogButton";
import { List } from "@phosphor-icons/react";


export default function Home() {

    return (
        <>  

            <Menu>

                <Flex>
                    <List size={30}/>

                    <Title>Diary</Title>
                </Flex>


                <DialogButton />
            </Menu>

            <App>



            </App>



        </>
    )

}