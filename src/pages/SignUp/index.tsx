import React, { useCallback } from 'react';
import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

import * as Yup from 'yup';

import Button from '../../assets/components/Button';
import Input from '../../assets/components/Input';
import logoImg from '../../assets/logo.svg';
import { Container, Content, Background } from './styles';

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: any) => {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Required name'),
        email: Yup.string().required('Required email').email(),
        password: Yup.string().min(6, 'Minimun 6 caracteres'),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

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
