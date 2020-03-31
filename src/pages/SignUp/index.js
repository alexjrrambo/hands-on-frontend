import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

import { Container, Content, RegisterContent, ActionContent } from './styles';

function getSteps() {
  return ['Dados Pessoais', 'Habilidades', 'Finalizar'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return (
        <RegisterContent>
          <TextField type="text" label="Nome completo" />
          <TextField type="text" label="CPF" />
          <TextField type="text" label="Nascimento" />
        </RegisterContent>
      );
    case 1:
      return (
        <RegisterContent>
          <TextField type="text" label="Habilidades" multiline />
        </RegisterContent>
      );
    case 2:
      return (
        <RegisterContent>
          <TextField type="email" label="Seu e-mail" />
          <TextField type="password" label="Sua senha" />
        </RegisterContent>
      );
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Container>
      <h1>Cadastro</h1>
      <span>
        Divulgue sua experiência profissional no Hands-On e receba propostas de
        emprego.
      </span>
      <Content>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map(label => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>
              <Button onClick={handleReset}>Resetar</Button>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
              <ActionContent>
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Voltar
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finalizar' : 'Próximo'}
                </Button>
              </ActionContent>
            </div>
          )}
        </div>
      </Content>
    </Container>
  );
}
