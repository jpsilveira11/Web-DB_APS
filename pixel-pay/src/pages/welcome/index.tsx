import "./index.css"
import { MdOutlineAccountCircle } from "react-icons/md";
export default function Welcome(){

    return (
        <>
            <div className="button-container">
                <h3>PIXEL PLAY</h3>
                <button>LOJA</button>
                <button> <MdOutlineAccountCircle/></button>
            </div>
        </>
    )

}