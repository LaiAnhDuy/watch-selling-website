import React, { ReactNode } from "react";
import { Modal, ModalProps } from "antd";

interface ModalComponentProps extends ModalProps {
  title?: string;
  footer?: ReactNode;
  isOpen?: boolean;
  children?: ReactNode;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  title = "",
  footer,
  isOpen = false,
  children,
  ...rests
}) => {
  return (
    <Modal
      title={title}
      destroyOnClose={true}
      footer={footer}
      open={isOpen}
      {...rests}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
