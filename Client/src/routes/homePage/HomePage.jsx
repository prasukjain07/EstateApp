import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

const HomePage = () =>{
    return(
        <div className="main">
            <div className="left">
                <div className="wrapper">
                    <h1 className='title'>Find Real Estate & Get Your Dream Place</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa laboriosam quaerat tenetur omnis rerum, minima at sit possimus unde soluta, ab molestias repellendus beatae accusamus. Modi dignissimos amet dolorum expedita.</p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>16+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200+</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1200+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>  
                </div>
            </div>
            <div className="right">
                <img src='./bg.png'/>
            </div>
        </div>
    )
}

export default HomePage