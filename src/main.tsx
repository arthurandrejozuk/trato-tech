import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import store from './store'
import { Provider } from 'react-redux' 
import {createStandaloneToast} from "@chakra-ui/toast";

// import {produce} from "immer"
// console.log('produce: ', produce)

const { ToastContainer, toast } = createStandaloneToast();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
      <ToastContainer/>
    </Provider>
  </StrictMode>,
)

toast({
  description: "Está funcionando",
  duration: 2000
})