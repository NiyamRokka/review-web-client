import { useContext } from 'react'
import { Auth_Context } from '../context/auth.context'
import toast from 'react-hot-toast'

const useAuth = () => {
    const data = useContext(Auth_Context)
    if (!Auth_Context) {
        toast.error('useAuth must be used inside auth provider')
    }

    return data
}

export default useAuth