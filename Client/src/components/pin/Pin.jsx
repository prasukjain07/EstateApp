import './pin.scss'
import { Marker, Popup } from 'react-leaflet'
import { Link } from 'react-router-dom';
function Pin({item}){
    return(
    <Marker position={[item.latitude,item.longitude]}>
     <Popup>
        <div className="popupContainer">
            <img src={item.img}/>
            <div className='textContainer'>
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span className="bed">{item.bedRooms} bedroom</span>
                <b>$ {item.price} </b>
            </div>
        </div>
     </Popup>
    </Marker>
    );
}

export default Pin;