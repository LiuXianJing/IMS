import { Button, Form, Input, Modal, Select, Space } from "antd"

interface IProps {
    visible: boolean;
    onCloseEditUserModal: () => void;
}

const { Option } = Select

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};
  
const tailLayout = {
    wrapperCol: { offset: 4, span: 20 },
};

const EditUserModal = (props: IProps) => {

    const [form] = Form.useForm();

    const visible: boolean = props.visible

    const handleCancelModal = () => {
        props?.onCloseEditUserModal()
    }

    const onGenderChange = (value: string) => {
        switch (value) {
            case 'male':
                form.setFieldsValue({ note: 'Hi, man!' });
                break;
            case 'female':
                form.setFieldsValue({ note: 'Hi, lady!' });
                break;
            case 'other':
                form.setFieldsValue({ note: 'Hi there!' });
                break;
            default:
        }
    };

    const onFinish = (values: any) => {
        console.log(values);
    };
    
    const onReset = () => {
        form.resetFields();
    };

    return <Modal
    title="Edit User"
    open={visible}
    onCancel={handleCancelModal}
    >
        <div>
            <Form
            {...layout}
            form={form}
            name="control-hooks"
            onFinish={onFinish}
            style={{ maxWidth: 600 }}
            >
                <Form.Item name="note" label="Note" rules={[{ required: true }]}>
                    <Input />
                </Form.Item>
                <Form.Item name="gender" label="Gender" rules={[{ required: true }]}>
                    <Select
                    placeholder="Select a option and change input text above"
                    onChange={onGenderChange}
                    allowClear
                    >
                    <Option value="male">male</Option>
                    <Option value="female">female</Option>
                    <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                    getFieldValue('gender') === 'other' ? (
                        <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
                        <Input />
                        </Form.Item>
                    ) : null
                    }
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Space>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </div>
    </Modal>
}

export default EditUserModal