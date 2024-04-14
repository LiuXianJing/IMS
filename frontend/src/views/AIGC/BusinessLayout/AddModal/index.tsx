
import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'antd';
import { AIGCMechanismFormType } from '../../../../types';
import MechanismDataForm from '../MechanismDataForm';
import { MechanismFormBtnTextMap, eventEmitter, } from '../../../../utils';

interface IProps {
}

const AddModal = (props: IProps) => {

  const [type, setType] = useState<AIGCMechanismFormType>("add");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    eventEmitter.on('change-mechanism-modal', showModal)
    return () => {
        eventEmitter.off('change-mechanism-modal', showModal)
    }
  }, [])

  const showModal = (operateType: AIGCMechanismFormType) => {
    if(operateType) {
      setType(operateType)
    }
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={() => {showModal("add")}}>
      Add Mechanism
      </Button>
      <Modal 
      title={MechanismFormBtnTextMap.get(type)}
      open={isModalOpen} 
      footer={false}
      width={700}
      onOk={handleOk} 
      onCancel={handleCancel}
      >
        <div>
            <MechanismDataForm formType={type} />
        </div>
      </Modal>
    </>
  );
};

export default AddModal