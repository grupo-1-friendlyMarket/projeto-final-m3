import { toast } from "react-toastify";
import { api } from "../../../../services/api"
import Button from "../../../Button"
import { BackGroundModal, Modal } from "./style"

export const ModalDelete = ({product, show, setShow}) => {
    const token = localStorage.getItem("@Market:token")
    function handleSim(){
        api
        .delete(`/products/${product.id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            }})
        .then((res)=> {
            toast.success('Produto deletado!')
            setShow(false)
        })
        .catch((res)=> toast.error('Algo deu errado!'))
    }

    function handleNao(){
        setShow(false)
    }

    return (
        <BackGroundModal show={show}>
            <Modal show={show}>
                Deletar produto?
                <Button handlerClick={handleSim} title={'Sim'}></Button>
                <Button handlerClick={handleNao} blue={'blue'} title={'Não'}>Não</Button>
            </Modal>
        </BackGroundModal>
    )
}