import React from "react";

export const Stack = ({ children, gap="8px"}) => {
   return (
      <div style={{ display: "grid", gap, padding: "8px" }}>
         {children}
      </div>
   );
};

export const HStack = ({ children, col = "1fr" }) => {
   return (
      <div style={{ display: "grid", gap: "8px", gridTemplateColumns: col, gridAutoFlow: "column", alignItems: "center" }}>
         {children}
      </div>
   );
};


export const VStack = ({ children, pad = "0" }) => {
   return (
      <div style={{ display: "grid", padding: pad, gap: "8px", gridAutoFlow: "row", alignItems: "center" }}>
         {children}
      </div>
   );
};
