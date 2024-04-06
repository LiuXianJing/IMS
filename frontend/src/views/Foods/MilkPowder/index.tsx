import { useEffect, useState } from "react";
import { FoodsMilkPowderDataType } from "../../../types";
import { Space, Table, TableProps, Tag } from "antd";

const FoodsMilkPowder = () => {

    const [milkPowderData, setMilkPowderData] = useState<FoodsMilkPowderDataType[]>([])
    
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
                    <a>Edit</a>
                    <a>Delete</a>
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
                name: 'zhengge',
                area: 'Chaina',
                website: 'http://www.zhenggefood.com',
                description: 'Good!'
            },
        ]
        setMilkPowderData(data)
    }, [])

    return <div>
        <h3>milk powder</h3>
        <div>
            <Table columns={columns} dataSource={milkPowderData} />
        </div>
    </div>
}

export default FoodsMilkPowder;