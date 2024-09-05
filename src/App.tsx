import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <div className="App">
      <Header/>

      <main>
        <section className='home-info'>
          <div className='about-us'>
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe officia
              mollitia, maxime odit debitis, corrupti ipsam quod temporibus reprehenderit,
              optio magnam cum qui reiciendis? Aut, maxime labore? Labore, commodi quasi.
            </p>
          </div>
          <div className='info-board'>
            <h2>Anouncment Board</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consectetur
              a porro ipsa labore eaque veritatis ad illum cumque dolorem fugit nemo officiis
              cum quam quidem ratione est, id suscipit?
            </p>
          </div>
        </section>
        <section className='club-officers'>
          <h2>Club Officers</h2>
        </section>
      </main>
      
      <Footer/>
    </div>
  )
}

export default App
