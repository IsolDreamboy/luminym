import './index.css'
import Header from './Header'
import Banner from './Banner'
import Sobre from './Sobre'
import Servicos from './Servicos'
import Contato from './Contato'

function App() {
  return (
    <div className="min-h-screen bg-[#f0e6df] text-white overflow-hidden">
      <Header />
      <Banner />
      <Sobre />
      <Servicos />
      <Contato />
    </div>
  )
}

export default App;