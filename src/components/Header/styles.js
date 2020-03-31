import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #ffffff;
  background: #000;
  height: 60px;
  width: 100%;
  padding: 10px;
  position: fixed;
  z-index: 99;
`;

export const Logo = styled.div`
  background: #fff;
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const Usuario = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-weight: bold;
    margin-right: 10px;
  }
`;
