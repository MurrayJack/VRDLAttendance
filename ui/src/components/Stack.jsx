import React from "react";

export const Stack = ({ children }) => {

   return (
      <div style={{ display: "grid", gap: "8px", padding: "8px" }}>
         {children}
      </div>
   );
};
