import { Plus } from "@phosphor-icons/react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button, Title } from "./style";
import "./styles.css";

export default function DialogButton() {
  return (
    <Dialog.Root>
      <Dialog.Trigger className="teste">
        <Button>
          <Plus size={30} color="#fff" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="back">
          <Dialog.Content className="Content">
            <Dialog.Title>
              <Title>Escreva para o seu diário</Title>
            </Dialog.Title>
            <Dialog.Description>
              <form action="" method="post">
                <div>
                    <label htmlFor="title">Titulo</label>
                    <input type="text" name="title" id="title"/>
                </div>

                <div>
                    <label htmlFor="date">dia</label>
                    <input type="date" name="date" id="date" />
                </div>
              </form>
            </Dialog.Description>
            <Dialog.Close>alo</Dialog.Close>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
