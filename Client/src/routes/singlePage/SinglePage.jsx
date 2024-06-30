import Slider from '../../components/silder/Slider';
import './singlePage.scss'
import Map from "../../components/map/Map"
import {singlePostData, ownerData} from "../../lib/dummydata";
function SinglePage(){
    return(
        <div className="singlePage">
            <div className="details">
                <div className="wrapper">
                    <Slider images={singlePostData.images}/>
                    <div className="info">
                        <div className="top">
                            <div className="post">
                                <h1>{singlePostData.title}</h1>
                                <div className="address">
                                    <img src='./pin.png'/>
                                    <span>{singlePostData.address}</span>
                                </div>
                                <span className='price'>$ {singlePostData.price}</span>
                            </div>
                            <div className="user">
                                <img src={ownerData.img}/>
                                <span>{ownerData.name}</span>
                            </div>
                        </div>
                        <div className="bottom">
                            {singlePostData.description}
                        </div>
                    </div>
                </div>
            </div>
            <div className="features">
            <div className="wrapper">

                <p className="title">General</p>

                <div className="listVertical">
                    <div className="feature">
                        <img src='/utility.png'/>
                        <div className="featureText">
                            <span>Utilities</span>
                            <p>Render is Responsible</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src='/pet.png'/>
                        <div className="featureText">
                            <span>Pet Policy</span>
                            <p>Pets Allowed</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src='/fee.png'/>
                        <div className="featureText">
                            <span>Fee Policy</span>
                            <p>Must have 3x the rent in total household income</p>
                        </div>
                    </div>
                </div>

                <p className="title">Room Sizes</p>

                <div className="sizes">
                    <div className="size">
                        <img src='size.png'/>
                        {singlePostData.size} sqft
                    </div>
                    <div className="size">
                        <img src='bed.png'/>
                        {singlePostData.bedRooms} bed
                    </div>
                    <div className="size">
                        <img src='bath.png'/>
                        {singlePostData.bathRooms} bathroom
                    </div>
                </div>

                <p className="title">Nearby Places</p>

                <div className="listHorizontal">
                    <div className="feature">
                        <img src='/school.png'/>
                        <div className="featureText">
                            <span>School</span>
                            <p>{singlePostData.school}</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src='/bus.png'/>
                        <div className="featureText">
                            <span>Bus Stop</span>
                            <p>{singlePostData.bus}</p>
                        </div>
                    </div>
                    <div className="feature">
                        <img src='/restaurant.png'/>
                        <div className="featureText">
                            <span>Restaurant</span>
                            <p>{singlePostData.restaurant}</p>
                        </div>
                    </div>
                </div>

                <p className="title">Location</p>

                <div className="mapContainer">
                    <Map items={[singlePostData]}/>
                </div>
                <div className="buttons">
                    <button>
                        <img src='/chat.png'/>
                        <p>Send a Message</p>
                    </button>
                    <button>
                        <img src='/save.png'/>
                        <p>Save the Place</p>
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default SinglePage;