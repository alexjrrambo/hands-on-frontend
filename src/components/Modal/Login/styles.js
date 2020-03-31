import styled from 'styled-components';
import Modal from '@material-ui/core/Modal';

export const ModalContainer = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  border-radius: 5px;
  height: 300px;
  width: 300px;
  padding: 20px;

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;
