import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import "../../assets/styles/information.css";
import AccontTypeSelection from "./AccountTypeSelection";

dayjs.extend(customParseFormat);

const ChoiceSelectionModal = ({ onClose }) => {
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const [accountType, setAccountType] = useState(1);
  const showModal = () => {
    setOpen(true);
  };
  useEffect(() => {
    showModal();
  }, []);

  const handleAccountTypeChange = (type) => {
    setAccountType(type);
    console.log("Selected Account Type:", type);
  };
  const handleCancel = () => {
    setOpen(false);
    onClose();
  };

  const handleConfirm = () => {
    console.log(accountType);
    // 根据 accountType 进行条件判断和导航
    if (accountType === 1) {
      history.push("/individualInfo");
    } else if (accountType === 2) {
      history.push("/familyInfo");
    }

    setOpen(false); // 关闭模态框
    onClose(); // 调用 onClose 回调以处理其他可能的清理工作
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    handleConfirm();
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      open={open}
      title="Please select an account type"
      onCancel={handleCancel}
      footer={
        [
          // <Button key="back" onClick={handleCancel}>
          //   Return
          // </Button>,
          // <Button
          //   key="submit"
          //   type="primary"
          //   loading={loading}
          //   onClick={handleOk}
          //   onSubmit={handleSubmit}
          // >
          //   Submit
          // </Button>,
        ]
      }
    >
      <AccontTypeSelection
        style={{ width: "100%", marginBottom: "20px" }}
        onTypeChange={handleAccountTypeChange}
        className="username"
      />

      <Button
        style={{ width: "100%", marginTop: "20px" }}
        type="primary"
        htmlType="submit"
        onClick={handleConfirm}
        className="mt-10"
      >
        Confirm
      </Button>
    </Modal>
  );
};

export default ChoiceSelectionModal;
