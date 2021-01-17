import React from "react";

export const Stack = ({ children }) => {
   return (
      <div style={{ display: "grid", gap: "8px", padding: "8px" }}>
         {children}
      </div>
   );
};

export const HStack = ({ children }) => {
   return (
      <div style={{ display: "grid", gap: "8px", gridAutoFlow: "column", alignItems: "center" }}>
         {children}
      </div>
   );
};
