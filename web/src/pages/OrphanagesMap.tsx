import React from 'react'
import mapMarkerImg from '../images/map-marker.svg'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../styles/pages/orphanages-map.css'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

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
      <Map center={[-3.3595991463559196, -39.829128339582404]} zoom={15} style={{ width: '100%', height: '100%' }} >
        {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
        {/* docs.mapbox.com/mapbox-gl-js/api/map options.style*/}
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
      </Map>
      <Link to="" className="create-orphanage">
        <FiPlus size={32} color="#FFF" />
      </Link>
    </div>
  )
}

export default OrphanagesMap
