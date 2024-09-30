import './OfficerCard.css'
import off1 from '../assets/off1.png'

function OfficerCard () {
  return (
    <div className='Card'>
      <div className='card-top'>
        <div className='officer-name'><h1>Jennifer Lawrence</h1></div>
        <div className='esc'>x</div>
      </div>
      <div className='card-contents'>
        <img src={off1} alt="" />
        <h2>Club Title: President</h2>
        <p>Bio:</p>
      </div>
    </div>
  )
}

export default OfficerCard
