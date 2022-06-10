import { IonContent, IonPage } from "@ionic/react";
import { ValidationErrors } from "final-form";
import { Form } from "react-final-form";
import { useHistory } from "react-router";
import Button from "../components/Button";
import { H1, Small } from "../components/fonts";
import LabeledTextField from "../components/LabeledTextField";
import "../styles/pages/Login.css";

const Login: React.FC = () => {
  const router = useHistory();

  const onSubmit = (values: any) => {
    // check if there is any validation error
    if (Object.keys(validation(values)).length === 0) {
      login(values, router);
    }
  };

  return (
    <IonPage>
      <IonContent fullscreen>
        <div className="page">
          <div className="header">
            <H1>Inicia Sesión</H1>
            <Small>Ingresa tus credenciales para acceder a tu cuenta</Small>
          </div>
          <Form
            onSubmit={() => {}}
            validate={validation}
            render={({ handleSubmit, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} className="form">
                <div className="formBody">
                  <LabeledTextField name="email" label="Email" />
                  <LabeledTextField
                    name="password"
                    label="Contraseña"
                    type="password"
                  />
                </div>
                <Button
                  text="Entrar"
                  type="submit"
                  onClick={() => onSubmit(values)}
                  disabled={submitting || pristine}
                />
              </form>
            )}
          />
        </div>
      </IonContent>
    </IonPage>
  );
};

const validation = (values: any) => {
  const errors: ValidationErrors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const login = (values: any, router: any) => {
  if (values.email === "mail@mail.com" && values.password === "hola123") {
    router.push("/dashboard");
  }
};

export default Login;
