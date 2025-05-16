import { Layout } from "../../layouts";
import { Text } from "../../_components/Text/Text";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../core/constants/routeConstants";

export const Login = () => {
  const navigate = useNavigate();
  interface CredentialLogin {
    username: string;
    password: string;
  }
  const loginschema = yup
    .object({
      username: yup
        .string()
        .required("El usuario es requerido")
        .min(6, "el usuario debe tener mínimo 6 caracteres")
        .max(15, "el usuario debe tener como máximo 15 caracteres"),
      password: yup
        .string()
        .required("La contraseñe es requerida")
        .min(6, "La contrasela debe tener mínimo 6 caracteres")
        .max(15, "La contraseña debe tener como máximo 15 caracteres"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CredentialLogin>({
    mode: "onSubmit",
    resolver: yupResolver(loginschema),
  });

  const handleSucessLogin = () => {
    navigate(ROUTES.HOME);
  };

  const onSubmit = async (data: CredentialLogin) => {
    try {
      console.log("Enviando datos", data);
      await new Promise((resolve) => setTimeout(resolve, 500));
      handleSucessLogin();
    } catch {
      console.log("Error al enviar las credenciales del login");
    }
  };

  console.log(errors.password?.message);
  return (
    <Layout>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="username">Usuario</label>
          <input
            id="username"
            type="username"
            placeholder="Introduce tu usuario"
            {...register("username")}
          ></input>
          {errors.username && <Text>{errors.username.message}</Text>}
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Introduce tu contraseña"
            {...register("password")}
          ></input>
          {errors.password && <Text>{errors.password.message}</Text>}
        </div>
        <div>
          <button type="submit" onSubmit={handleSubmit(onSubmit)}>
            Continuar
          </button>
        </div>
      </form>
    </Layout>
  );
};
