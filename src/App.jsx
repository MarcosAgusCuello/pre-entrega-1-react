import { Navbar } from './components/navbar/Navbar'
import './App.css'
import { Itemlist } from './components/itemlist/itemlist'
import CartWidget from './components/cartwidget/CartWidget'

const App = ()=> {
  return (
    <div>
      <Navbar />
      <Itemlist />
      <CartWidget />
    </div>
  )

  
}

export default App
