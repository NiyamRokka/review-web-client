import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { LuBookOpen } from "react-icons/lu";
import Button from "../common/button"
import { DropdownMenu,DropdownMenuItem,DropdownMenuContent,DropdownMenuTrigger } from "../common/drop-menu"
import useAuth from "../../hooks/useAuth";

export function Navigation() {
  const { user, logout } = useAuth();
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to={'/'} className="flex items-center space-x-2">
          <LuBookOpen className="h-6 w-6" />
          <span className="text-2xl font-serif italic tracking-tight">Tasted & Tales</span>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-8">
          <Link to={'/categories'} className="text-sm font-medium hover:text-primary transition-colors">
            Browse
          </Link>
          <Link to={'/about'} className="text-sm font-medium hover:text-primary transition-colors">
            Our Story
          </Link>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="relative h-8 w-8 rounded-full">
                  <CiUser className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <div className="flex items-center justify-start gap-2 p-2">
                  <div className="flex flex-col space-y-1 leading-none">
                    <p className="font-medium">{user.firstName}</p>
                    <p className="w-[200px] truncate text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <DropdownMenuItem className="cursor-pointer" asChild>
                  <Link to={'/write-review'}>Write a Review</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer text-destructive focus:text-destructive" onClick={logout}>
                  <IoIosLogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to={'/login'} className="block">
                <Button variant="ghost" size="sm">
                  Log In 
                </Button>
              </Link>
              <Link to={'/signup'} className="block">
                <Button size="sm">Sign up</Button>
              </Link>
            </div>
          )}
       </div>
     </div>
  </nav>
)}