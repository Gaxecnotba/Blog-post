"use client";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const [error, setError] = useState(null);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res: any = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });
    console.log(res);
    if (res?.ok === true) {
      router.push("/Home");
    } else {
      setError(res?.error);
    }
    // if (res?.error) {
    //   alert(res.error);
    // } else {
    //   console.log("sending to /homepage");
    // }
  });
  return (
    <>
      <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
        <form onSubmit={onSubmit} className="w-1/4">
          {error && (
            <p className="bg-red-500 text-lg text-white p-3 rounded mb-2">
              {error}
            </p>
          )}
          <h1 className="text-slate-200 font-bold text-4xl mb-4">Login Page</h1>
          <label htmlFor="email" className="text-slate-500  mb-2 block text-sm">
            Email:
          </label>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "email required" },
            })}
            className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full "
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
          <label
            htmlFor="password"
            className="text-slate-500  mb-2 block text-sm"
          >
            Password:
          </label>
          <input
            type="password"
            {...register("password", {
              required: { value: true, message: "password required" },
            })}
            className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
          <button className="w-full bg-blue-500  text-white p-3 rounded-lg mt-2">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
