import React from "react";
import { View } from "react-native";
import theme from "../../ui/style/theme";

interface ISpacer {
    margin: string
}

function Spacer( {margin}: ISpacer ) {
    return(
       <View style={{marginBottom: theme.margin[margin]}} />
    )
}

export default Spacer;