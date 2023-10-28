import React, {useState} from "react";
import { RiCloseLine } from "react-icons/ri";
import  Logo from "../../assets/checkmark-ppl-backgrund-white-mark.svg";
import { Link } from 'react-router-dom';

const RegisterDoctorModalSuccess = ({ setIsOpen, modalText }) => {

    return (
        <>
         <div onClick={()=> setIsOpen(false)}>
            <div className="container-modal">
                <div className="group-modal">
                    <div class="exit-button-div">
                        <RiCloseLine onClick = {()=> setIsOpen(false)} class="exit-button-modal" type="button" style={{ width: "24px", marginBottom: "0px", padding:"0px" }}/>
                    </div>
                    <div >
                        <div><img className="checkmark-logo" src={Logo} alt="" /></div>
                        <div className="title">
                            <h2>Cadastro Concluído</h2>
                        </div>                     
                                             
                    </div>
                    <br />
                    <div class="text-doctor">
                        <p>O cadastro do novo médico foi concluído!</p>
                        <p>Agora você pode conferir seu perfil e adicionar</p>
                        <p>horários e agenda.</p>
                    </div> 
                    <br />
                    <div>
                        <Link to="#">
                            <button class="button-form">Adicionar agenda</button>
                        </Link>
                        
                    </div>
                    <br />
                    <div>
                        <Link to="#">
                            <button class="button-form-inverse">Ir para perfil</button>
                        </Link>
                        
                    </div>

                </div>
            </div>
        </div>
        </>
    );

}

export default RegisterDoctorModalSuccess;
