import React from 'react';
import { Button, Modal, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { eventEmitter, } from '../../../../utils'
import { setEditAIGCMechanismData } from '../../../../store/slices';
import { useDispatch } from 'react-redux';
import { ExclamationCircleFilled } from '@ant-design/icons';

interface DataType {
  key: string;
  name: string;
  mechanismType: string;
  productType: string;
  address: string;
  tags: string[];
  description: string;
}


const MechanismTable = () => {

    const dispatch = useDispatch()

    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a>{text}</a>,
        },
        {
            title: 'Mechanism Type',
            dataIndex: 'mechanismType',
            key: 'mechanismType',
        },
        {
            title: 'Product Type',
            dataIndex: 'productType',
            key: 'productType',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: (_, { tags }) => (
                <>
                {tags.map((tag) => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                    color = 'volcano';
                    }
                    return (
                    <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                    );
                })}
                </>
            ),
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => {
                return <>
                <Space size="middle">
                    <Button 
                    size={"small"}
                    type='primary' 
                    onClick={() => {hadnleEdit(record)}}
                    >
                        Edit
                    </Button>
                    <Button 
                    size={"small"}
                    type='primary' 
                    danger
                    onClick={() => {hadnleDeleteRow(record)}}
                    >
                        Delete
                    </Button>
                </Space>
                </>
            }
        },
    ];
  
    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            mechanismType: 'cc',
            productType: 'vdsv',
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            description: 'bdgf',
        },
        {
            key: '2',
            name: 'C Brown',
            mechanismType: 'cc',
            productType: 'vdsv',
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            description: 'bdgf',
        },
        {
            key: '3',
            name: 'S Brown',
            mechanismType: 'cc',
            productType: 'vdsv',
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
            description: 'bdgf',
        },
    ];

    const hadnleEdit = (record: DataType) => {
        eventEmitter.emit('change-mechanism-modal', 'edit')
        dispatch(setEditAIGCMechanismData({
            id: record.key,
            name: record.name,
            mechanismType: record.mechanismType,
            productType: record.productType,
            address: record.address,
            tags: record.tags,
            description: record.description,
            // No need to edit
            product: '',
            website: '',
            logo: '',
            area: ''
        }))
    }

    const hadnleDeleteRow = (row: DataType) => {
        Modal.confirm({
          title: 'Are you sure delete this mechanism?',
          icon: <ExclamationCircleFilled />,
          content: '',
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'No',
          onOk() {
            console.log('OK');
          },
          onCancel() {
            console.log('Cancel');
          },
        });
    }
    
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="key"
        />
    )
}

export default MechanismTable;