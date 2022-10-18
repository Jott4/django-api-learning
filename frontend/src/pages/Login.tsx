import React from "react";
import MemoLogoText from "../assets/logo/LogoText";

export default function Login() {
  return (
    <div className="h-screen bg-gray-50 flex flex-col justify-center items-center">
      <div className="bg-white border border-gray-300 w-80 py-8 flex items-center flex-col mb-3">
        <h1>Instagram</h1>
        <form className="mt-8 w-64 flex flex-col">
          <input
            className="text-xs w-full mb-2 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="email"
            placeholder="username"
            type="text"
          />
          <input
            className="text-xs w-full mb-4 rounded border bg-gray-100 border-gray-300 px-2 py-2 focus:outline-none focus:border-gray-400 active:outline-none"
            id="password"
            placeholder="Senha"
            type="password"
          />
          <a className="text-sm text-center bg-blue-300 text-white py-1 rounded font-medium">
            Log In
          </a>
        </form>
      </div>
      <div className="bg-white border border-gray-300 text-center w-80 py-4">
        <span className="text-sm">Não tem uma conta?</span>
        <a className="text-blue-500 text-sm font-semibold"> Cadastre-se</a>
      </div>
    </div>
  );
}
