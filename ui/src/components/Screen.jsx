import React from "react";
import { Stack, HStack } from "./";
import { useHistory } from "react-router-dom";

export const Screen = ({ children, caption, allowBack }) => {

   const history = useHistory();

   return (
      <Stack>
         <HStack>
            {allowBack && <div>
               <button onClick={() => history.push("/")}>&lt;</button>
            </div>}
            <h2>{caption}</h2>
         </HStack>
         {children}
      </Stack>
   );
};
