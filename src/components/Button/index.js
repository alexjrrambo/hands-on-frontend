import React from 'react';

import { PrimaryButton } from './styles';

export default function Button({ children }) {
  return (
    <PrimaryButton variant="contained" color="primary">
      {children}
    </PrimaryButton>
  );
}
