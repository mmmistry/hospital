'use client'
import Footer from '@/components/Footer/page'
import '@/styles/global.scss'
import 'intl-tel-input/build/css/intlTelInput.css'
import { SessionProvider } from 'next-auth/react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TChildrenProps } from 'types/components'
import { Provider } from './Provider'


const RootLayout = ({ children }: TChildrenProps) => {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
          <Provider>
            {children}
          </Provider>
          <Footer />
        </SessionProvider>
      </body>
    </html >
  )
}

export default RootLayout