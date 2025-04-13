import { Form, Input, message, Modal } from "antd"
import { FoodsMilkPowderDataType } from "../../../../types"
import { useLayoutEffect } from "react"

const { Item } = Form

interface IProps {
    visible: boolean
    editMilkPowerItem: FoodsMilkPowderDataType | null
    onClose: () => void
}

const EditMilkPowerModal = (props: IProps) => {

    const { visible, editMilkPowerItem, onClose } = props

    const [form] = Form.useForm()

    const handleOk = () => {
        // api
        message.success('Edit Successfully!')
        onClose()
    }

    useLayoutEffect(() => {
        form.setFieldsValue(editMilkPowerItem)
    }, [])

    return <>
        <Modal
        title="Edit Milk Power"
        open={visible}
        width={600}
        onOk={handleOk}
        onCancel={onClose}
        >
            <Form
            name="editMilkPowerForm"
            form={form}
            labelCol={{span: 4}}
            >
                <Item
                name={'name'}
                label='Name'
                rules={[{required: true}]}
                >
                    <Input /> 
                </Item>
                <Item
                name={'area'}
                label='Area'
                rules={[{required: true}]}
                >
                    <Input />
                </Item>
                <Item
                name={'website'}
                label='Website'
                rules={[{required: true}]}
                >
                    <Input />
                </Item>
                <Item
                name={'description'}
                label='Description'
                rules={[{required: true}]}
                >
                    <Input.TextArea />
                </Item>
            </Form>
        </Modal>
    </>
}

export default EditMilkPowerModal