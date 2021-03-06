import Layout from "./components/Layout"
import { GlobalStyles } from "./styles/global-style"
import {ThemeProvider} from 'styled-components'
import dark from './styles/themes/dark'

const App:React.FC = () =>{
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Layout/>
    </ThemeProvider>
  )
}

export default App