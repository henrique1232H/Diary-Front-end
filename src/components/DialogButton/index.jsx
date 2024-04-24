import { Plus } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button, DivInputs, Form, FormInputs, FormInputsWithoutLabel, TextArea, Title, } from "./style";
import "./styles.css";
import { Label } from "../diary/style";
import { useState } from "react";
import Update from "../UpdateDiary";

export default function DialogButton() {

  const [title, setTitle] = useState();
  const [date, setDate] = useState();
  const [description, setDescription] = useState();


  return (
    <Dialog.Root>
      <Dialog.Trigger className="Trigger">
        <Button>
          <Plus size={30} color="#fff" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="back">
          <Dialog.Content className="Content">
            <Dialog.Title className="title">
              <Title>Escreva para o seu diário</Title>
              <Dialog.Close>
                <label htmlFor="">exit</label>
              </Dialog.Close>
            </Dialog.Title>
            <Dialog.Description>
              <Form action="" method="get" onSubmit={(e) => {
                e.preventDefault()

                const sendInformation = {
                  title,
                  description,
                  date
                }

                Update(sendInformation)


        
              }}>
                <DivInputs>

                  <FormInputs>
                    <label htmlFor="title">Titulo:</label>
                    <input type="text" name="title" id="title" onChange={e => setTitle(e.target.value)}/>
                  </FormInputs>

                  <FormInputsWithoutLabel>
                    <Label htmlFor="date">dia</Label>
                    <input type="date" name="date" id="date" onBlur={e => setDate(e.target.value)}/>
                  </FormInputsWithoutLabel>

                  
                </DivInputs>


                <div>
                  <TextArea
                    name="description"
                    id=""
                    cols="40"
                    rows="15"
                    onChange={e => setDescription(e.target.value)}
                  ></TextArea>
                </div>

                <div>
                  <Dialog.Close>
                    <button type="submit">Enviar</button>
                  </Dialog.Close>
                </div>
              </Form>
            </Dialog.Description>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
