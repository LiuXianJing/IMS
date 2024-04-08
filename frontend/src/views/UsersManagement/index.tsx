import { Avatar, Button, Divider, List, Modal, Space } from "antd"
import { getUserAPI } from "../../api"
import { useEffect, useState } from "react"
import { UserType } from "../../types/user"
import EditUserModal from "./EditUserModal"
import './index.less'
import { ExclamationCircleFilled } from "@ant-design/icons"

const UserManagement = () => {

    const [data, setData] = useState<UserType[]>([])
    const [editUserModalVisible, setEditUserModalVisible] = useState<boolean>(false)

    useEffect(() => {
        getUser()
    }, [])

    const getUser = async () => {
        const res = await getUserAPI()
        const newData = res.data.map((item: UserType) => ({
            id: item.id.toString(),
            title: item.account,
            account: item.account,
            createdAt: item.created_at,
            type: item.account === 'admin' ? 'administrator' : 'general user',
        }))
        setData(newData)
    }

    const handleOpenEditUserModal = () => {
        setEditUserModalVisible(true)
    }

    const handleDeleteUser = () => {
        Modal.confirm({
            title: 'Are you sure delete this user?',
            icon: <ExclamationCircleFilled />,
            content: 'Some descriptions',
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
      };

    return <div className="user-management-container">
        <div>
        <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: UserType, index) => (
            <List.Item>
                <List.Item.Meta
                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index + 1}`} />}
                title={
                <div className="user-item">
                    <span className="label">User: </span>
                    <span className="value">
                        {item.title}
                    </span>
                </div>}
                description={
                    <>
                    <div className="user-item">
                        <span className="label">Create Time: </span>
                        <span className="value">{item.createdAt.replace('GMT', '')}</span>
                    </div>
                    <div className="user-item">
                        <span className="label">Type: </span>
                        <span className="value">{item.type}</span>
                    </div>
                    </>
                }
                />
                <Space>
                    <Button 
                    type="primary"
                    onClick={handleOpenEditUserModal}
                    >
                        Edit
                    </Button>
                    <Button 
                    type="primary" 
                    danger 
                    onClick={handleDeleteUser}
                    >
                        Delete
                    </Button>
                </Space>
            </List.Item>
        )}
        />
        </div>
        <EditUserModal 
        visible={editUserModalVisible} 
        onCloseEditUserModal={() => {setEditUserModalVisible(false)}} 
        />
    </div>
}

export default UserManagement