import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import arrow from "../public/images/icon-arrow.svg";
import background from "../public/images/pattern-bg-desktop.png";
import axios from "axios";

interface Address {
  ip: string;
  isp: string;
  location: {
    city: string;
    country: string;
    geonameId: number;
    lat: number;
    lng: number;
    postalCode: string;
    region: string;
    timezone: string;
  };
}

const App = () => {
  const [address, setAddress] = useState<Address | null>(null);
  const [ipAddress, setIpAddress] = useState<string>("");

  const checkIpAddress =
    /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
  const checkDomain =
    /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/;

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get<Address>(
          "https://geo.ipify.org/api/v2/country,city?apiKey=at_OSJzufJsTcP1JFSICZJdcXy6FCFnQ&ipAddress=8.8.8.8"
        );
        setAddress(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getData();
  }, []);


  const getEnteredData = async () => {
    try {
      const res = await axios.get<Address>(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_OSJzufJsTcP1JFSICZJdcXy6FCFnQ&${
          checkIpAddress.test(ipAddress)
            ? `ipAddress=${ipAddress}`
            : checkDomain.test(ipAddress)
            ? `domain=${ipAddress}`
            : ""
        }`
      );
      setAddress(res.data);
    } catch (error) {
      console.trace(error);
    }
  };


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIpAddress(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    getEnteredData();
    setIpAddress("");
  };

  return (
    <section>
      <div className="absolute h-80 w-full">
        <img src={background} alt="" className="w-full h-full bg-no-repeat object-cover"/>
      </div>

      <div className="relative p-8">
        <h1 className="text-2xl lg:text-3xl text-center text-white font-bold mb-8">IP Address Tracker</h1>

        <form onSubmit={handleSubmit} className="flex justify-center max-w-xl mx-auto">
          <input type="text" id="ipadress" placeholder="Search for any IP adress or domain" required
          className="py-2 px-4 rounded-l-lg w-full " onChange={handleChange} value={ipAddress}/>
          <button type="submit" className="bg-black py-4 px-4 rounded-r-lg hover:opacity-70"><img src={arrow} alt="" /></button>
        </form>
      </div>

      {address && (
        <div 
          className="relative bg-white rounded-lg shadow p-8 mx-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl lg:mx-auto text-center md:text-left lg:-mb-16"
          style={{zIndex: "10000"}}>

          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">IP Adress</h2>
            <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-3xl">{address.ip}</p>
          </div>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">Location</h2>
            <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-3xl">{`${address.location.city}, ${address.location.region}`}</p>
          </div>
          <div className="lg:border-r lg:border-slate-400">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">Timezone</h2>
            <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-3xl">{`UTC ${address.location.timezone}`}</p>
          </div>
          <div className="">
            <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">ISP</h2>
            <p className="font-bold text-slate-900 text-lg md:text-xl xl:text-3xl">{address.isp}</p>
          </div>

        </div>
      )}

      {address && (
        <div className="w-full h-auto">
          <MapComponent address={address}/>
        </div>
      )}

    </section>
  );
};


interface MapProps {
  address: Address;
}

const MapComponent = ({ address } : MapProps) => {
  return (
    <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} scrollWheelZoom={true} style={{ height: '682px' }}>
      <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[address.location.lat, address.location.lng]}></Marker>
    </MapContainer>
  );
};

export default App;
