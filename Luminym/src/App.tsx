import './index.css'
import Header from './Header'
import Banner from './Banner'

function App() {
  return (
    <div className="min-h-screen bg-slate-150 text-white overflow-hidden">
      <Header />
      <Banner />
      <h3 className="size-86 font-bold text-[#080b1a] py-1">Writes upside-down</h3>
    </div>
  )
}

export default App;