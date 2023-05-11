import "./index.css"
import { MdOutlineAccountCircle } from "react-icons/md";
import ContainerHeader from "../../components/container-header/index.tsx";
import words from "../../assets/text-welcome.json"

export default function Welcome(){

    return (
        <>
        
             <ContainerHeader color="transparent" className="text-uppercase text-color-white" >
                <div className="text-root-size">{words.header}</div>
                <MdOutlineAccountCircle className="text-large"/>
            </ContainerHeader>

            {/* <div className="button-container">
                <h3>PIXEL PLAY</h3>
                <button>LOJA</button>
                <button> <MdOutlineAccountCircle/></button>
            </div> */}
        </>   
    )

}