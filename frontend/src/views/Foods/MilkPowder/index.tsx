import { useEffect, useState } from "react";
import { FoodsMilkPowderDataType } from "../../../types";
import { message, Modal, Space, Table, TableProps, Tag } from "antd";
import EditMilkPowerModal from "./EditMilkPowerModal.tsx";

const FoodsMilkPowder = () => {

    const [milkPowderData, setMilkPowderData] = useState<FoodsMilkPowderDataType[]>([])
    const [editMilkPowerItem, setEditMilkPowerItem] = useState<FoodsMilkPowderDataType | null>(null)
    const [editMilkPowerModalVisible, setEditMilkPowerModalVisible] = useState<boolean>(false)

    const handleEditMilkPower = (record: FoodsMilkPowderDataType) => {
        setEditMilkPowerItem(record)
        setEditMilkPowerModalVisible(true)
    }
    
    const hadnleDeleteItem = (record: FoodsMilkPowderDataType) => {
        const name = record.name
        Modal.confirm({
            title: `Are you sure delete ${name}?`,
            onOk: () => {
                // api
                message.success(`Delete ${record.name} Succussfully!`)
            }
        })
    }

    const columns: TableProps<FoodsMilkPowderDataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Area',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            render: (description) => (
                <>
                    <Tag color={'blue'} key={''}>
                        {description}
                    </Tag>
                </>
              ),
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
            render: (website) => (
                <>
                    <a href={website} target="_blank">{website}</a>
                </>
            )
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a onClick={() => {handleEditMilkPower(record)}}>Edit</a>
                    <a onClick={() => {hadnleDeleteItem(record)}}>Delete</a>
                </Space>
            ),
        },
    ];
  

    useEffect(() => {
        const data: FoodsMilkPowderDataType[] = [
            {
                id: 'id-1',
                key: 'id-1',
                name: 'zhengge',
                area: 'Chaina',
                website: 'http://www.zhenggefood.com',
                description: 'Good!'
            },
            {
                id: 'id-2',
                key: 'id-2',
                name: 'douNai',
                area: 'Chaina',
                website: 'http://www.xxx.com',
                description: 'Yauh!'
            },
        ]
        setMilkPowderData(data)
    }, [])

    return <div>
        <h3>milk powder</h3>
        <div>
            <Table columns={columns} dataSource={milkPowderData} />
        </div>
        {
            editMilkPowerModalVisible &&
            <EditMilkPowerModal 
            visible={editMilkPowerModalVisible}
            editMilkPowerItem={editMilkPowerItem}
            onClose={() => {setEditMilkPowerModalVisible(false)}}
            />
        }
    </div>
}

export default FoodsMilkPowder;