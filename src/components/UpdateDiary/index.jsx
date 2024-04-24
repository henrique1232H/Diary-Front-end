import Diary from "../diary"


let array = []

export default function Update(diary) {

    

    array = [diary, ...array]

    console.log(array)


   let value = 0

    return (
        <>
            {
                array.length > 0 
                ? array.map(entries => {
                    return <Diary key={value++} props={entries} />
                })

                : console.log("alo")
            }

        </>

    )

}

