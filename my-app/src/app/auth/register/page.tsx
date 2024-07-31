"use client";
import { useForm, FieldError, FieldErrorsImpl, Merge } from "react-hook-form";
import { useRouter } from "next/navigation";

interface FormValues {
  username: string;
  email: string;
  password: string;
  confirmpassword: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const router = useRouter();
  const onSubmit = handleSubmit(async (data) => {
    if (data.password !== data.confirmpassword) {
      return alert("Passwords do not match");
    }
    const res = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        username: data.username,
        email: data.email,
        password: data.password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const resJson = await res.json();
    console.log(resJson);
    console.log(res);
    if (res.ok === true) {
      router.push("/auth/login");
    }
    console.log(errors);
  });

  const getErrorMessage = (
    error:
      | string
      | FieldError
      | Merge<FieldError, FieldErrorsImpl<any>>
      | undefined
  ): string | undefined => {
    if (typeof error === "string") {
      return error;
    }
    if (error && "message" in error) {
      return error.message as string;
    }
    return undefined;
  };

  return (
    <div className="h-[calc(100vh-7rem)] flex justify-center items-center">
      <form onSubmit={onSubmit} className="w-1/4">
        <h1 className="text-slate-200 font-bold text-4xl mb-4">
          Register Page
        </h1>
        <label htmlFor="username" className="text-slate-500 mb-2 block text-sm">
          Username:
        </label>
        <input
          type="text"
          {...register("username", {
            required: { value: true, message: "Username required" },
          })}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        {errors.username && (
          <span className="text-red-500 text-xs">
            {getErrorMessage(errors.username)}
          </span>
        )}
        <label htmlFor="email" className="text-slate-500 mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: { value: true, message: "Email required" },
          })}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        {errors.email && (
          <span className="text-red-500 text-xs">
            {getErrorMessage(errors.email)}
          </span>
        )}
        <label htmlFor="password" className="text-slate-500 mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: { value: true, message: "Password required" },
          })}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        {errors.password && (
          <span className="text-red-500 text-xs">
            {getErrorMessage(errors.password)}
          </span>
        )}
        <label
          htmlFor="confirmpassword"
          className="text-slate-500 mb-2 block text-sm"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          {...register("confirmpassword", {
            required: { value: true, message: "Confirm Password required" },
          })}
          className="p-2 rounded-none block mb-1 bg-slate-900 text-slate-300 w-full"
        />
        {errors.confirmpassword && (
          <span className="text-red-500 text-xs">
            {getErrorMessage(errors.confirmpassword)}
          </span>
        )}
        <button className="w-full bg-blue-500 text-white p-3 rounded-lg mt-2">
          Register
        </button>
      </form>
    </div>
  );
}
