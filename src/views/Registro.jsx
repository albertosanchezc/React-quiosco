import { createRef, useState } from "react";
import { data, Link } from "react-router-dom";
import clienteAxios from "../config/axios";
import Alerta from "../components/Alerta";
import { useAuth } from "../hooks/useAuth";
export default function Registro() {

  const nameRef = createRef();
  const emailRef = createRef();
  const passwordRef = createRef();
  const passwordConfirmationRef = createRef();

  const [ errores, setErrores ] = useState([]);
  const { registro } = useAuth({middleware: 'guest', url: '/'})

  const handleSubmit = async e => {
    e.preventDefault();

    const datos = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value

    }

    registro(datos,setErrores)

  }

  return (
    <>
      <h1 className="text-4xl font-black">Crea tu Cuenta</h1>
      <p>Crea tu Cuenta llenando el formulario</p>

      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form method="POST"
          onSubmit={handleSubmit}
          noValidate
        >

          {errores ? errores.map(error => <Alerta key={error}>{error}</Alerta>) : null}
          <div className="mb-4">
            <label htmlFor="name"
              className="text-slate-800"
            >Nombre</label>

            <input
              id="name"
              type="text"
              className="mt-2 w-full p-3 bg-gray-100"
              name="name"
              placeholder="Tu nombre"
              ref={nameRef}
            />
          </div>


          <div className="mb-4">
            <label htmlFor="email"
              className="text-slate-800"
            >Email</label>

            <input
              id="email"
              type="email"
              className="mt-2 w-full p-3 bg-gray-100"
              name="email"
              placeholder="Tu Email"
              ref={emailRef}
            />
          </div>


          <div className="mb-4">
            <label htmlFor="password"
              className="text-slate-800"
            >Password</label>

            <input
              id="password"
              type="password"
              className="mt-2 w-full p-3 bg-gray-100"
              name="password"
              placeholder="Tu Password"
              ref={passwordRef}

            />
          </div>

          <div className="mb-4">
            <label htmlFor="password_confirmation"
              className="text-slate-800"
            >Repetir Password</label>

            <input
              id="password"
              type="password"
              className="mt-2 w-full p-3 bg-gray-100"
              name="password"
              placeholder="Repetir Password"
              ref={passwordConfirmationRef}

            />
          </div>

          <input
            type="submit"
            value="Crear Cuenta"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
          />
        </form>
      </div>

      <nav className="mt-5">
        {/* Lo siguiente es la manera de hacer un enlace sin flashaso */}
        <Link to="/auth/login">
          ¿Ya tienes cuenta? Inicia Sesión
        </Link>
      </nav>
    </>
  )
}
