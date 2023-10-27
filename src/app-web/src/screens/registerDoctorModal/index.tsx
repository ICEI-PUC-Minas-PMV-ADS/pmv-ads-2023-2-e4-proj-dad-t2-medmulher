import React, {useState} from "react";
import { RiCloseLine } from "react-icons/ri";
import Header from "../../components/header/index";

const CadastroMedSucesso = ({ setIsOpen, modalText }) => {

    return (
        <>

        

         <div onClick={()=> setIsOpen(false)}>
            <div className="container-modal">
                <div className="group-modal">
                    <div class="exit-button-div">
                        <RiCloseLine onClick = {()=> setIsOpen(false)} class="exit-button-modal" type="button" style={{ width: "24px", marginBottom: "0px", padding:"0px" }}/>
                    </div>
                    <div className="title">
                        <h1>{modalText}</h1>
                    </div> 
                </div>
            </div>
        </div>
        </>
    );

}

export default CadastroMedSucesso;
