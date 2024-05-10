import { useEffect, useState } from "react"
import { Modal } from "antd"
import './index.less'

interface IProps {
    visible: boolean
}

const GameplayDescriptionModal = (props: IProps) => {

    const { visible } = props

    const [open, setOpen] = useState<boolean>(visible)

    useEffect(() => {
        setOpen(visible)
    }, [visible])

    const handleCancel = () => {
        setOpen(false)
    }

    return <Modal
    title='Gameplay Description'
    open={open}
    onCancel={handleCancel}
    onOk={() => {setOpen(false)}}
    >
        <div>
            <div className="operate-item">
                <span>W</span>
                <span>A</span>
                <span>S</span>
                <span>D</span>
            </div>
            <div className="operate-item">
                <span>↑</span>
                <span>←</span>
                <span>↓</span>
                <span>→</span>
            </div>
        </div>
    </Modal>
}

export default GameplayDescriptionModal