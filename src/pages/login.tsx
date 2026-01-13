import LoginForm from "../components/forms/login.form"
import { LuBookOpen } from "react-icons/lu";
import { Link } from "react-router";

const LoginPage=()=> {

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to={'/'}>
          <span className="inline-flex items-center gap-2 mb-6">
            <LuBookOpen className="w-8 h-8" />
            <span className="text-3xl font-serif italic">Tasted & Tales</span>
            </span>
          </Link>
          <h1 className="text-3xl font-serif italic mb-2">Welcome back</h1>
          <p className="text-muted-foreground">Log in to continue sharing your stories</p>
        </div>
        <div className="bg-card border border-border rounded-lg p-8">
        <LoginForm/>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  )
}

export default LoginPage;