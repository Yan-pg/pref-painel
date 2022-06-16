import { useCallback, useEffect, useState } from "react";

import Logo from "../../assets/logo.svg";
import { Input } from "../../components/Input";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/Auth";
import { isEmail, isPassword } from "../../tools/validation";

import {
  Container,
  SessionHeader,
  LoginInfos,
  LoginEnter,
  ContentLoginEnter,
  FormContent,
} from "./styles";

export function Login() {
  const location = useLocation();
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState(false);

  const handleSign = useCallback(
    async (e: React.MouseEvent) => {
      e.preventDefault();
      try {
        if (!isEmail(email) || !isPassword(password)) {
          return;
        }

        await signIn({ email, password });
      } catch {
        e.preventDefault();
        setErrorLogin(true);
      }
    },
    [email, password, signIn]
  );

  if (user) return <Navigate to="/posts" state={{ from: location }} />;

  return (
    <Container>
      <SessionHeader />

      <LoginInfos>
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <LoginEnter>
          <ContentLoginEnter>
            <h2>Entrar</h2>

            <FormContent validateLogin={isEmail(email) && isPassword(password)}>
              <div>
                <Input
                  label="E-mail"
                  onChange={(currentValue) => {
                    const email = currentValue.currentTarget.value;

                    setEmail(email);
                  }}
                  success={isEmail(email)}
                  error={!isEmail(email) && email.length > 0}
                />
              </div>
              <div className="password-input">
                <Input
                  type="password"
                  label="Senha"
                  onChange={(currentValue) => {
                    setPassword(currentValue.currentTarget.value);
                  }}
                  success={isPassword(password)}
                  // error={isPassword(password) && password.length > 0}
                />
              </div>
              {errorLogin && <p>Email/Senha incorreto</p>}

              <button onClick={(e) => handleSign(e)}>Entrar</button>
            </FormContent>
          </ContentLoginEnter>
        </LoginEnter>
      </LoginInfos>
    </Container>
  );
}
