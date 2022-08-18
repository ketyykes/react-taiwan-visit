import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const MapTest = () => {
    const styles = { height: "100vh", width: "100vw" }
    return (
        <div style={styles}>
            <MapContainer center={[22.9886837, 120.2154008]} zoom={17} scrollWheelZoom={true}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[22.9886837, 120.2154008]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default MapTest