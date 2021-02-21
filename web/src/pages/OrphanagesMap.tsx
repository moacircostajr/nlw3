import React from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/orphanages-map.css'

interface Props {

}

const OrphanagesMap = (props: Props) => {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita</p>
        </header>
        <footer>
          <strong>Amontada</strong>
          <span>Ceará</span>
        </footer>
      </aside>
      <div></div>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
