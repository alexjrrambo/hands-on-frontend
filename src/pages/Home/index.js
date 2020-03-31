import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import PrimaryButton from '../../components/Button';
import {
  Container,
  AboutContent,
  CreateAccountContent,
  PartnersContent,
} from './styles';
import google from '~/assets/google.png';

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <AboutContent>
        <span>Hands-On</span>
        <legend>
          Procurando mão-de-obra qualificada? Você está no lugar certo. <br />
          Os melhores profissionais para as melhores empresas.
        </legend>
      </AboutContent>
      <CreateAccountContent>
        <div>
          <span>Sou um profissional</span>
          <legend>
            Sou imigrante e desejo ingressar no mercado de trabalho brasileiro.
          </legend>
          <PrimaryButton variant="contained" color="primary">
            <Link to="/register">Criar Conta</Link>
          </PrimaryButton>
        </div>
        <div>
          <span>Sou um empresário</span>
          <legend>
            Sou empresário e quero encontrar bons profissionais e ainda ajudar
            em uma boa causa social
          </legend>
          <PrimaryButton variant="contained" color="primary">
            <Link to="/register">Criar Conta</Link>
          </PrimaryButton>
        </div>
      </CreateAccountContent>
      <PartnersContent>
        <span>Parceiros</span>
        <Slider {...settings}>
          <div>
            <img src={google} alt="Google" />
          </div>
          <div>
            <img src={google} alt="Google" />
          </div>
          <div>
            <img src={google} alt="Google" />
          </div>
          <div>
            <img src={google} alt="Google" />
          </div>
        </Slider>
      </PartnersContent>
    </Container>
  );
}
