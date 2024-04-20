import { Title, Menu, Flex} from "./style"
import Diary from "../../components/diary"
import DialogButton from "../../components/DialogButton";
import { List } from "@phosphor-icons/react";


export default function Home() {

    const array = [
        {title: "alo",
         paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, asperiores ipsa quia laborum numquam provident, aliquam, illum aspernatur nobis qui itaque alias voluptas amet. Enim quos iste deleniti recusandae in?"
        },
        {title: "alo2",
         paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, asperiores ipsa quia laborum numquam provident, aliquam, illum aspernatur nobis qui itaque alias voluptas amet. Enim quos iste deleniti recusandae in?"

        }
    ];

    let value = 0

    return (
        <>  

            <Menu>

                <Flex>
                    <List size={30}/>

                    <Title>Diary</Title>
                </Flex>


                <DialogButton />
            </Menu>


            {array.map(entries => {
                return <Diary key={value++} diary={entries}/>
            })}

        </>
    )

}