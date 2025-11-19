import { RiBankFill } from 'react-icons/ri';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

const LPRESNigerMap = () => {
  return (
    <MapContainer
      className="rounded-2xl relative"
      center={[9.63489, 6.54537]}
      zoom={100}
      style={{ height: '350px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
        subdomains={['mt0', 'mt1', 'mt2', 'mt3']}
        attribution="© Google Maps"
      />

      <Marker position={[9.63489, 6.54537]}>
        <Popup>
          <div className="sm:flex sm:items-center">
            <div className="inline-flex w-7 h-7 rounded-full bg-green-900 text-white justify-center items-center mr-3">
              <RiBankFill />
            </div>
            <p className="text-wrap md:text-nowrap">
              L-PRES Niger State Coordination Office
            </p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LPRESNigerMap;
