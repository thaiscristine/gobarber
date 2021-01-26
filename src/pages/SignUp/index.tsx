import React from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import Button from '../../assets/components/Button';
import Input from '../../assets/components/Input';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  function handleSubmit(data: any): void {
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>

          <Input icon={FiUser} name="name" placeholder="Name" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />

          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />

          <Button type="submit">Sign Up</Button>
        </Form>

        <a href="signup">
          <FiArrowLeft />
          Back to login
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
