
import React from "react";
import {NoMatchContainer} from "./styles";


export default function NoMatch() {
  return (
    <NoMatchContainer>
      <h3>
          404: The page you are looking for isn’t here
      </h3>
        <h4>
            You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
        </h4>
        
    </NoMatchContainer>

  );
}