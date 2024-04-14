import React, { useEffect } from 'react';
import { Button, Form, Input, Select, Space, } from 'antd'
import { AIGCMechanismFormType } from '../../../../types';
import { MechanismFormBtnTextMap } from '../../../../utils';
import { useAppSelector } from '../../../../hooks';
import { selectEditAIGCMechanismData } from '../../../../store/slices';

const { Option } = Select;

interface IProps {
    formType: AIGCMechanismFormType;
}

const MechanismDataForm = (props: IProps) => {

  const editAIGCMechanismData =  useAppSelector(selectEditAIGCMechanismData)

  const { formType } = props
  const [form] = Form.useForm();

  useEffect(() => {
    if(formType === 'edit') {
      form.setFieldsValue(editAIGCMechanismData)
    }
  }, [])

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ name: 'Hello world!', });
  };

  const onFinish = (values: any) => {
    console.log(values);
  };

  return (
    <Form
      form={form}
      layout={["add", "edit"].includes(formType) ? "vertical" : "inline"}
      style={{rowGap: 16}}
      onFinish={onFinish}
    >
      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input placeholder='Input name' />
      </Form.Item>
      <Form.Item name="mechanismType" label="Mechanism Type" rules={[{ required: true }]}>
        <Select
          placeholder="Select mechanism type"
          allowClear
        >
          <Option value="type1">type1</Option>
          <Option value="type2">type2</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="productType" label="Product Type" rules={[{ required: true }]}>
        <Select
          placeholder="Select product type"
          allowClear
        >
          <Option value="type1">type1</Option>
          <Option value="type2">type2</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="area" label="Area" rules={[{ required: true }]}>
        <Select
          placeholder="Select area"
          allowClear
        >
          <Option value="area1">area1</Option>
          <Option value="area2">area2</Option>
          <Option value="other">other</Option>
        </Select>
      </Form.Item>
      <Form.Item name="tags" label="Tags" rules={[{ required: false }]}>
        {
          formType === "add" ?
          <Input placeholder='Enter tags(Split with /)' />
          :
          <Select
            style={{width: 300,}}
            maxTagCount="responsive"
            allowClear
            mode="multiple"
            placeholder="Select tags"
          >
            {
              ['tag'].fill('tag', 0, 10).map((item, index) => {
                return <Select.Option key={index} value={item + index}>
                      {item}
                </Select.Option>
              })
            }
          </Select>
        }
      </Form.Item>
      <Form.Item name="description" label="Description" rules={[{ required: true }]}>
        <Input placeholder='Input description' />
      </Form.Item>
      <Form.Item>
        <Space>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
          {
            formType === "search" ?
            <Button type="default" htmlType="button" onClick={onFill}>
              Fill Form
            </Button> : null
          }
          <Button type="primary" htmlType="submit">
            {MechanismFormBtnTextMap.get(formType)}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
};

export default MechanismDataForm;