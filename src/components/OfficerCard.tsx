import './OfficerCard.css'
import off1 from '../assets/off1.png'

function OfficerCard () {
  return (
    <div className='Card'>
      <div className='officer-name'>
        <h1>Emily Lawson</h1>
      </div>
      <div className='card-contents'>
        <div className='card-img'>
          <img src={off1} alt="" />
        </div>
        <div className='card-info'>
        <h2>Club Title: President</h2>
          <h3>About Me:</h3>
          <p>20 | University student
            📚 Lover of classic novels and poetry
            ☕ Coffee in hand, always seeking quiet corners to read
            🌲 Feels at home in forests and by the sea
            🍂 Autumn walks and cozy sweaters
            ✨ Chasing sunsets and starry nights
          </p>
          <h3>At the Book and Tea Club:</h3>
          <p>As president of the Book and Tea Club, I feel an immense
            sense of pride and responsibility. I envision the club not only
            as a space where members can indulge in the rich worlds of literature
            but also as a community that fosters deep connections over shared
            cups of tea. I hope is to inspire others to discover the joy in
            discussing stories and ideas.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OfficerCard
