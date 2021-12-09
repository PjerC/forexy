import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const DisplayUpperModule = (props) => {

    const [color,setColor] = useState("red")

    const changeColor = () => {
        console.log('clicked')
        setColor("white");
    }
    return(
        <div> 
           <button className="flex-fill btn btn-lg m-1 text-secondary" type="button" onClick={changeColor}>btn 1</button>   
           <p style={{color:color}}> text </p>                         
        </div>
    )
}
export default DisplayUpperModule;