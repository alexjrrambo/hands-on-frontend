import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const AboutContent = styled.div`
  padding: 100px;

  span {
    font-size: 40px;
    font-weight: 800;
  }

  legend {
    font-size: 22px;
  }
`;

export const CreateAccountContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 75px 0px;
  height: auto;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    width: 50%;

    span {
      font-size: 25px;
      font-weight: bold;
    }

    legend {
      font-size: 18px;
      text-align: center;
      width: 50%;
    }

    :first-child {
      border-right: 1px solid #ccc;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;

    > div {
      width: 95%;
      padding: 15px;

      :first-child {
        border-right: 0px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
`;

export const PartnersContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 50px 0px;

  span {
    font-size: 25px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 175px;
    background: #fff;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
