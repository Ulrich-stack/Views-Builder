import m from "mithril"
import { assignIcon } from "../utils/utils";

const tagIcon = (value) =>  {
        return(
            <div class="icons">
                <img src = {assignIcon(value)} width={30} style={{color: '#bbb', marginBottom:'4px'}}></img>
                <span>{value}</span>
            </div>
        )
    
}

export default tagIcon;