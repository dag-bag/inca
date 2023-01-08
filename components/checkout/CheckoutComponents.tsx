/** @format */

import React from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { checkout } from "../../atoms/checkout";
import { useRecoilState } from "recoil";
import Input from "../../components/checkout/Input";
import { InputData } from "../../data/InputData";
import { Formik, useFormik } from "formik";
import { stringValidation } from "../../validation/form";
import PrimaryBtn from "../../components/buttons/PrimaryBtn";
import { loginUser } from "../../hooks/form";
import AuthButton from "../buttons/AuthButton";
type Props = {};

function CheckoutComponents({}: Props) {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) router.push("/checkout/checkoutdetails");
  const { handleChange, handleSubmit, values, errors, isSubmitting, isValid } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: stringValidation(["email", "password"]),
      onSubmit: async (values, actions) => {
        actions.setSubmitting(true);
        let res = await loginUser(values);
        actions.setSubmitting(false);
        if (res?.ok) {
          router.push("/checkout/checkoutdetails");
        } else {
          actions.setErrors({ email: res?.error });
        }
      },
    });
  return (
    <div className="flex  justify-center md:p-10 flex-wrap px-2 ">
      <div className=" md:w-[45rem] h-[60vh] ">
        <form
          onSubmit={handleSubmit}
          className="p-5 flex justify-center items-center flex-col border-2 border-black md:w-[70%] py-10 m-auto space-y-6 rounded-md"
        >
          <h2 className="text-xl capitalize font-medium text-left text-[#333]">
            Ya soy cliente
          </h2>
          {InputData("checkout")?.map((item, index) => {
            if (!item) return null;
            return (
              <div className="mt-1" key={index}>
                <Input
                  onChange={handleChange}
                  {...item}
                  value={values[item.name as keyof typeof values]}
                  error={errors[item.name as keyof typeof errors]}
                />
              </div>
            );
          })}
          <PrimaryBtn
            text="Authenticate Now"
            type="submit"
            isLoading={isSubmitting}
            disabled={!isValid}
          />
          <AuthButton
            provider="google"
            callbackUrl="/checkout/checkoutdetails"
            Text="Google"
          />

          <div className="mt-1 flex justify-center items-center space-x-3">
            <input
              id="password"
              name="email"
              type="radio"
              autoComplete="email"
            />
            <p className="text-base font-light text-left text-[#333]">
              Recuérdame + Info
            </p>
          </div>
          {/* <CheckOutBtn>Iniciar Sesión</CheckOutBtn> */}
        </form>
      </div>
      <div className="md:w-[45rem] ">
        <div className="p-5 flex justify-center items-center flex-col border-2 border-black  md:w-[70%] py-10 m-auto space-y-6">
          <h2 className="text-xl capitalize font-medium text-left text-[#333]">
            Continuar como invitado/a
          </h2>
          <p className=" text-base font-light text-center text-[#333]">
            Completa tu pedido sin crear una cuenta. Podrás guardar tus datos en
            el siguiente paso y ahorrar tiempo en próximas compras.{" "}
          </p>

          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="E-mail"
              className="block w-full px-5 py-3 text-base  transition duration-500 ease-in-out transform  text-[#333]  focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#333] border-2 border-[#333] placeholder:text-[#333]"
            />
            <p className="text-red-500"></p>
          </div>
          <h2>PROMOCIONES Y NOVEDADES</h2>
          <div className="mt-1 flex justify-center items-center space-x-3 px-12">
            <input
              id="password"
              name="email"
              type="radio"
              autoComplete="email"
            />
            <p className="text-xs font-light text-left text-[#333]">
              Quiero recibir promociones exclusivas, las últimas novedades e
              información personalizada adaptada a mi perfil como cliente.
            </p>
          </div>
          {/* <CheckOutBtn>Iniciar Sesión</CheckOutBtn> */}
          <p className=" text-xs font-light text-justify text-[#333] px-12">
            <span className=" h-[282px] text-xs font-light text-justify text-[#333]">
              Al hacer clic en la casilla anterior trataremos tus datos,
              obtenidos a través de tu navegación en la web, para ofrecerte un
              contenido afín a tus gustos, basándonos en tus interacciones con
              la marca. Ten en cuenta que podrás oponerte a este tratamiento.
            </span>
            <br />
            <br />
            <span className=" h-[282px] text-xs font-light text-justify text-[#333]">
              INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS. RESPONSABLE: Punto
              Fa, SL. FINALIDAD: Gestión del servicio de envío de comunicaciones
              personalizadas adaptadas al perfil del interesado. LEGITIMACIÓN:
              Consentimiento del interesado. DESTINATARIOS: Empresas del Grupo
              MANGO y empresas encargadas del tratamiento de datos. Se pueden
              producir transferencias internacionales. DERECHOS: Puedes
              ejercitar en cualquier momento tus derechos de acceso,
              rectificación, supresión, oposición y demás derechos legalmente
              establecidos a través del siguiente e-mail:
              personaldata@mango.com. INFORMACIÓN ADICIONAL: Puedes consultar la
              información adicional y detallada sobre protección de datos aquí.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default CheckoutComponents;
