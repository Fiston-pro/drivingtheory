import { createContext, useContext, useEffect, useState } from 'react'
import {
  onAuthStateChanged,
  signInWithPhoneNumber,
  RecaptchaVerifier,
  signOut,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { toast, Toaster } from "react-hot-toast";

const AuthContext = createContext({})



export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({children}: { children: React.ReactNode}) => {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  function onCaptchVerify() {
    if (!(window as any).recaptchaVerifier) {
      (window as any).recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response: any) => {
          console.log('captcha successfull')
          const divToRemove = document.querySelector("#recaptcha-container");
          if (divToRemove) {
            console.log('found')
            divToRemove.remove();
          }
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
      }, auth)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid
        })
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])
   
  const signup = (phone: string) => {
    setLoading(true);
    onCaptchVerify();

    const appVerifier = (window as any).recaptchaVerifier;
    const formatPh = "+" + phone;
    signInWithPhoneNumber(auth, formatPh, appVerifier)
      .then((confirmationResult) => {
        (window as any).confirmationResult = confirmationResult;
        setLoading(false);
        toast.success("OTP sent successfully!");
      })
      .catch((error: any) => {
        console.log(error);
        toast.error('Unable to send OTP')
        setLoading(false);
      });
  }

  const login = (phone: string) => {
    
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      <Toaster toastOptions={{ duration: 4000 }} />
      <div id="recaptcha-container"></div>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}
