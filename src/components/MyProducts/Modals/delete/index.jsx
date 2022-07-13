import { toast } from "react-toastify";
import { api } from "../../../../services/api"
import Button from "../../../Button"
import { BackGroundModal, Modal } from "./style"

export const ModalDelete = ({product, show, setShow}) => {
    const token = localStorage.getItem("@Market:token")
    const id = JSON.parse(localStorage.getItem("@Market:id"))
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
        .catch((res)=> {
            console.log(res)
            toast.error('Algo deu errado!')})
    }

    function handleNao(){
        setShow(false)
    }

    return (
        <BackGroundModal show={show}>
            <Modal show={show}>
                Deletar produto?
                <Button handlerClick={handleSim} title={'Sim'}></Button>
                <Button handlerClick={handleNao} blue={'blue'} title={'Não'}></Button>
            </Modal>
        </BackGroundModal>
    )
}