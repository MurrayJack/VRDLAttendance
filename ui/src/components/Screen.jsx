import React from "react";
import { Stack } from "./";

export const Screen = ({ children, caption }) => {

   return (
      <Stack>
         <div>
            <button>&lt;</button>
            <h2>{caption}</h2>
         </div>
         {children}
      </Stack>
   );
};
