import React, {useState} from "react";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import  Logo from "../../assets/checkmark-ppl-backgrund-white-mark.svg"

const RegisterDoctorModalFailure = ({ setIsOpenFailure, modalText }) => {

    return (
        <>
         <div onClick={()=> setIsOpenFailure(false)}>
            <div className="container-modal" >
                <div className="group-modal">
                    <div class="exit-button-div">
                        <RiCloseLine onClick = {()=> setIsOpenFailure(false)} class="exit-button-modal" type="button" style={{ width: "24px", marginBottom: "0px", padding:"0px" }}/>
                    </div>
                    <div >
                        <div className="title">
                            <h2>Ocorreu um erro ;(</h2>
                        </div>                     
                                             
                    </div>
                    <br />
                    <div class="text-doctor">
                        <p>{modalText}</p>
                    </div> 
                    

                </div>
            </div>
        </div>
        </>
    );

}

export default RegisterDoctorModalFailure;