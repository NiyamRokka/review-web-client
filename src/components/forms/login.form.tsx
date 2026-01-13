import { yupResolver } from "@hookform/resolvers/yup";
import type { ILoginData } from "../../interface/auth.interface"
import Button from "../common/button"
import Input from "../common/inputs/input"
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import {loginSchema} from '../../schema/auth.schema'
import {useMutation} from "@tanstack/react-query"
import { login } from "../../api/auth.api";
import { useLocation, useNavigate } from "react-router";
import { Role } from "../../interface/enum.types";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router";


const LoginForm = () => {

  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  const { setUser } = useAuth()
  const from = location.state?.from

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });

  //* login mutation
  const {mutate,isPending} = useMutation({
    mutationFn:login,
    mutationKey:['login'],
    onSuccess: (response) => {
      toast.success(response.message ?? 'Login Success')
      
      setUser(response?.data?.data)
      if (response?.data?.data?.role === Role.USER) {
        navigate(from || '/')
      } else {
        navigate('/admin')
      }

    },
    onError:(error) =>{
      console.log('on login failed')
      console.log(error)

      toast.error(error.message ?? 'Login Failed')

    }

  })


  const onSubmit = (data: ILoginData) => {
    mutate(data)
  };

  return (

        <form
  onSubmit={handleSubmit(onSubmit)}
  className="space-y-6 bg-background border border-border rounded-lg p-6"
>
  {/* Email */}
  <div className="space-y-2">
    <label htmlFor="email" className="text-sm font-medium">
      Email
    </label>
    <Input
      label=""
      id="email"
      placeholder="Enter your email"
      type="text"
      required
      name="email"
      register={register}
      error={errors.email?.message}
      className="bg-background border-border"
    />
  </div>

  {/* Password */}
  <div className="space-y-2">
    <label htmlFor="password" className="text-sm font-medium">
      Password
    </label>
    <Input
      label=""
      id="password"
      placeholder="Enter your password"
      type="password"
      required
      name="password"
      register={register}
      error={errors.password?.message}
      className="bg-background border-border"
    />
  </div>

  {/* Button */}
  <p className="bg-color-gray">
  <Button
    disabled={isPending}
    type="submit"
    label={isPending ? "Signing In..." : "Log In"}
    className="w-full text-center"
  />
  </p>
  <p className="text-center text-sm text-muted-foreground">
    Don&apos;t have an account?{" "}
    <Link to="/signup" className="text-blue-400 hover:underline">
      Sign up
    </Link>
    </p>

</form>

    )
}

export default LoginForm