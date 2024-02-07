import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Footer from './components/Footer/Footer'

function App() {
 

  return (
   <>
    <header><Header/></header>
    <main><a id="about"><About/></a></main>
    <section><a id="projects"><Projects/></a></section>
    <footer><a id="footer"></a><Footer/></footer>
   </>
  )
}

export default App
