import  RegisterForm  from "../components/forms/register.form"
import { LuBookOpen } from "react-icons/lu";
import { Link } from "react-router";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to={'/'} className="inline-flex items-center gap-2 justify-center text-white hover:opacity-90 transition">
            <LuBookOpen className="w-8 h-8" />
            <span className="text-3xl font-serif italic">Tasted & Tales</span>
            </Link>
          <h1 className="text-3xl font-serif italic mb-2">Join our community</h1>
          <p className="text-muted-foreground">Start sharing your reviews and discoveries</p>
        </div>

        <div className="bg-card border border-border rounded-lg p-8">
          <RegisterForm/>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}