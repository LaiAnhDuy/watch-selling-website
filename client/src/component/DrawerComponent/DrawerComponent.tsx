import React from 'react';
import { Drawer, DrawerProps } from 'antd';

interface DrawerComponentProps extends DrawerProps {
  title?: string;
  placement?: 'left' | 'right' | 'top' | 'bottom';
  isOpen?: boolean;
  children?: React.ReactNode;
}

const DrawerComponent: React.FC<DrawerComponentProps> = ({
  title = 'Drawer',
  placement = 'right',
  isOpen = false,
  children,
  ...rests
}) => {
  return (
    <Drawer title={title} placement={placement} open={isOpen} {...rests} width="650px">
      {children}
    </Drawer>
  );
};

export default DrawerComponent;
