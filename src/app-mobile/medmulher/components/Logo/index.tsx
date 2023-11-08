import React from "react";
import { LogoImage } from "./style";

const logo = require('../../../assets/mape.png')

function Logo() {
    return(
        <LogoImage 
            source={logo}
        />
    )
}

export default Logo;