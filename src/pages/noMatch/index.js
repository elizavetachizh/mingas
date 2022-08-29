
import React from "react";
import {NoMatchContainer} from "./styles";


export default function NoMatch() {
  return (
    <NoMatchContainer>
      <h3>
        Данная страница не была найдена
      </h3>
        <h4>
            Попробуйте найти что-то другое...
        </h4>
        
    </NoMatchContainer>

  );
}