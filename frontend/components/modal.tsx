import Modal from '@mui/material';
const ModalComponent = ({ children, ...props }: { children: any }) => {
    return <Modal {...props}>{children}</Modal>;
};
export default ModalComponent;
