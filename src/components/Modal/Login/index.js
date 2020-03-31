import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';

import PrimaryButton from '../../Button';
import { ModalContainer, ModalContent } from './styles';

export default function Login({ open, onClose }) {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <ModalContent>
        <form>
          <h3>Acessar o Hands-On</h3>
          <TextField type="email" label="Seu e-mail" />
          <TextField type="password" label="Sua senha" />

          <PrimaryButton type="submit">Entrar</PrimaryButton>
          <Link onClick={onClose} to="/register">
            Criar conta gratuita
          </Link>
        </form>
      </ModalContent>
    </ModalContainer>
  );
}

Login.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
