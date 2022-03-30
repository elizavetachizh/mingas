import React from "react";
import {Button} from './styles'
export default function ButtonFun({infoButton, backgroundColor}) {
   return (
       <Button backgroundColor={backgroundColor}>{infoButton}</Button>
   )
}