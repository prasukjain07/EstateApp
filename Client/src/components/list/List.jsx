import { listData } from "../../lib/dummydata"
import "./list.scss"
import Card from "../card/Card"

function List(){
    return(
        <div className="list">
            {listData.map(item =>(
                <div className="one"> <Card key={item.id} item = {item}/></div>
            ))}
        </div>
    );
}

export default List