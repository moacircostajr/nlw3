import React from 'react'
import './landing.css'
import logoImg from '../../images/map-marker.svg'
import { FiArrowRight } from 'react-icons/fi'

interface Props {

}

const Landing = (props: Props) => {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={logoImg} alt="Happy" />
        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças</p>

        </main>

        <div className="location">
          <strong>Amontada</strong>
          <span>Ceará</span>
        </div>

        <a href="" className="enter-app">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </a>
      </div>
    </div>
  )
}

export default Landing
