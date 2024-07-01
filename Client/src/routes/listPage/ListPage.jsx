import Filter from '../../components/filter/Filter'
import Card from '../../components/card/Card'
import Map from '../../components/map/Map'
import { listData } from '../../lib/dummydata'
import './listPage.scss'

function ListPage (){

    const data = listData;
    return(
        <div className="listPage">
            <div className="listContainer">
                <div className="wrapper">
                    <Filter/>
                    {data.map(item=>(
                        <Card key={item.id} item = {item}/> 
                    ))}
                </div>
            </div>
            <div className="mapContainer">
                <div className="wrapper">
                    <Map items={data}/>
                </div>
            </div>
        </div>
    )
}

export default ListPage