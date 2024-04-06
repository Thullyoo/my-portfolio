import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
 

  return (
   <>
    <header><Header/></header>
    <main><a id="about"><About/></a></main>
    <section><a id="projects"><Projects/></a></section>
   
   </>
  )
}

export default App
