import { yupResolver } from "@hookform/resolvers/yup";
import type { IRegisterData } from "../../interface/auth.interface"
import Button from "../common/button"
import Input from "../common/inputs/input"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Link, useNavigate } from "react-router";
import GenderSelect from "../common/select-inputs/gender.select";
import { Gender } from "../../interface/enum.types";
import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../api/auth.api";
import toast from "react-hot-toast";


const registerSchema = yup.object({
    firstName:yup.string().required('First Name is required').min(3,'Atleast 3 characters are required'),
    lastName:yup.string().required('Last Name is required').min(3,'Atleast 3 characters are required'),
    email:yup.string().required('Email is required').email('Invalid email format'),
    password:yup.string().required('Password is required'),
    confirm_password:yup.string().required('Password Confirmation is required'),
    phone:yup.string().min(10,'Atleast 10 characters are required'),
    gender:yup.string().optional()
})


const RegisterForm = () => {
    const navigate=useNavigate()
    const { register, handleSubmit,formState:{errors},control } = useForm({
        defaultValues: {
            phone: '',
            email: '',
            gender: Gender.MALE,
            password: '',
            lastName: '',
            firstName: '',
            confirm_password: '',

        },
         resolver:yupResolver(registerSchema)
    })
    console.log(errors)

    const {mutate,isPending} = useMutation({
        mutationFn:registerUser,
        onSuccess:(response)=>{
            console.log(response)
            toast.success(response.message ?? 'Account Created Successfully')
            navigate('/login')
        },
        onError:(error) => {
            console.log(error)
            toast.error(error.message ?? 'Something Went Wrong')

        }
    })






    const onSubmit = (data: IRegisterData) => {
        mutate(data)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}
            className="space-y-6 bg-background border border-border rounded-lg p-6">
                <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium">
                    First Name
                    </label>
                        <Input
                            label=""
                            id="first_name"
                            placeholder={"Enter your first name"}
                            type="text"
                            key={'first_name_input'}
                            required={true}
                            name='firstName'
                            register={register}
                            error={errors.firstName?.message}
                            />
                            </div>
                        
                        <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name
                        </label>
                        <Input
                            label=""
                            id="last_name"
                            placeholder={"Enter your last name"}
                            type="text"
                            key={'last_name_input'}
                            required={true}
                            name='lastName'
                            register={register}
                            error={errors.lastName?.message}

                        />
                    </div>

                    {/* email input */}
                    <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                        label=""
                        id="email"
                        placeholder={"Enter your email"}
                        type="text"
                        key={'email_input'}
                        required={true}
                        name='email'
                        register={register}
                        error={errors.email?.message}

                    />
                    </div>


                    {/* password */}
                    <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">Password</label>
                    <Input
                        label=""
                        id="password"
                        placeholder="Enter your password"
                        type="password"
                        required={true}
                        name='password'
                        register={register}
                        error={errors.password?.message}

                    />
                    </div>


                    {/* confirm password */}
                    <div className="space-y-2">
                    <label htmlFor="password" className="text-sm font-medium">Confirm Password</label>
                    <Input
                        label=""
                        id="confirm_password"
                        placeholder="Enter password to confirm"
                        type="password"
                        required={true}
                        name='confirm_password'
                        register={register}
                        error={errors.confirm_password?.message}

                    />
                    </div>

                    <GenderSelect
                    control={control}
                    />

                     <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Phone</label>

                    {/* phone */}
                    <Input
                        label=""
                        id="phone"
                        placeholder="Phone No."
                        type="text"
                        name='phone'
                        register={register}
                        error={errors.phone?.message}

                    />
                    </div>
                 


                    {/* button */}
            <div className="w-full mt-6">
                        <Button
                            disabled={isPending}
                            label={isPending ? "Signing up " : "Sign Up"}
                            type="submit"
                        />
            
                      <div className="mt-4">
          <p className="text-center text-sm text-muted-foreground"/>
            Already have an account ?{" "}
            <Link to={'/login'}>
            <span className="text-blue-400 hover:underline">Login</span>
            </Link>
                       <p/>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterForm