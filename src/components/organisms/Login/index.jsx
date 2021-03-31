import { InputText } from '@/atoms';
import { CSSContainer, CSSCardContainer, CSSTitle, CSSButton } from './styles';

const Login = ({ csrfToken }) => {
  return (
    <CSSContainer>
      <CSSCardContainer>
        <form method="post" action="/api/auth/callback/credentials">
          <CSSTitle>Inicia sesión</CSSTitle>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <InputText
            type="email"
            label="Correo"
            placeholder="Escribe un correo electronico"
            name="username"
          />
          <InputText
            type="password"
            label="Contraseña"
            placeholder="Escribe una contraseña"
            name="password"
          />
          <CSSButton type="submit">Entrar</CSSButton>
        </form>
      </CSSCardContainer>
    </CSSContainer>
  );
};

export default Login;
