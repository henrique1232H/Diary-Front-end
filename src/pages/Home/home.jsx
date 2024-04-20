import {Button, Title} from "./style"
import Diary from "../../components/diary"
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


    // const date = new Date();

    // const day = date.getDate();
    // let month = date.getMonth();

    // if(month < 10) {
    //     month = `0${month}`
    // }
    // const teste = {
    //     title: "Mais um dia",
    //     paragraph: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, asperiores ipsa quia laborum numquam provident, aliquam, illum aspernatur nobis qui itaque alias voluptas amet. Enim quos iste deleniti recusandae in?",
    //     date: `${day}/${month}`
    // }

    let value = 0
    return (
        <>
            <Title>Alo</Title>



            <Button>
                <List size={20} />
            </Button>


            {array.map(entries => {
                return <Diary key={value++} diary={entries}/>
            })}

        </>
    )

}