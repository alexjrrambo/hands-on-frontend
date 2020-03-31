import React from 'react';
import Enter from '@material-ui/icons/ExitToApp';

import ModalLogin from '../Modal/Login';
import { Container, Logo, Usuario } from './styles';

export default function Header() {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <Container>
      <Logo />
      <Usuario onClick={handleModalOpen}>
        <span>Entrar</span>
        <Enter />
      </Usuario>

      <ModalLogin open={modalOpen} onClose={handleModalClose} />
    </Container>
  );
}
