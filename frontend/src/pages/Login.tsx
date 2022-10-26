import { useForm, SubmitHandler } from "react-hook-form";
import { IUserLogin, useAuth } from "../context/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<IUserLogin>();
  const onSubmit: SubmitHandler<IUserLogin> = async (data) => {
    const user = await signIn(data);
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1>Instagram</h1>
        <form
          className="mt-8 w-64 flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            placeholder="username"
            type="text"
            {...register("username", { required: true })}
          />
          <input
            className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Senha"
            type="password"
            {...register("password", { required: true })}
          />
          <input
            type="submit"
            className="text-sm text-center bg-blue-500 text-white py-1 rounded font-medium cursor-pointer hover:bg-blue-700 transition-all"
            value="Entrar"
          ></input>
        </form>
      </div>
      <div className="bg-white border border-gray-300 text-center w-80 py-4">
        <span className="text-sm">Não tem uma conta?</span>
        <a className="text-blue-500 text-sm font-semibold"> Cadastre-se</a>
      </div>
    </div>
  );
}
