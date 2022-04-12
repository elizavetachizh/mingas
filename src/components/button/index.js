import React from "react";
import {Button} from './styles'
export default function ButtonFun({infoButton, backgroundColor, borderRadius}) {
   return (
       <Button backgroundColor={backgroundColor}>{infoButton}</Button>
   )
}