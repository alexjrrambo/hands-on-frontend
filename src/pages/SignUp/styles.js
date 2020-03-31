import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  > div {
    width: 800px;
  }
`;

export const RegisterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
`;

export const ActionContent = styled.div`
  display: flex;
  justify-content: flex-end;
`;
