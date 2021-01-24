import React from "react";
import "firebase/firestore";
import { Label } from "../components/Label";
import { Stack } from "../components";

export const OfficialForm = ({ name, derbyName, vrdlMember, insurance, league, onClick, buttonCaption }) => {

   const [data, setData] = React.useState({
      name: name || "",
      derbyName: derbyName || "",
      vrdlMember: vrdlMember || "",
      insurance: insurance || "",
      league: league || ""
   })

   const handleOnchange = e => {
      setData({ ...data, [e.target.name]: e.target.value })
   }

   const handleOnClick = () => {
      onClick(data)
   }

   return (
      <Stack gap="16px">

         <Label caption="Name">
            <input name="name" onChange={handleOnchange} value={data.name} />
         </Label>

         <Label caption="Derby Name">
            <input name="derbyName" onChange={handleOnchange} value={data.derbyName} />
         </Label>

         <Label caption="VRDL Member ?">
            <select name="vrdlMember" value={data.vrdlMember} onChange={handleOnchange}>
               <option value="no">No</option>
               <option value="yes">Yes</option>
            </select>
         </Label>

         {data.vrdlMember !== "yes" &&
            <>
               <h3>Visitor Information</h3>

               <Label caption="League Affiliation ?">
                  <input name="league" onChange={handleOnchange} value={data.league} />
               </Label>

               <Label caption="Insurance ?">
                  <select name="insurance" value={data.insurance} onChange={handleOnchange}>
                     <option value="no">No</option>
                     <option value="yes">Yes</option>
                  </select>
               </Label>

               <p>
                  <center>
                     <strong>
                        Officials without a league affiliation or insurance cannot be involved in scrimmages
                     </strong>
                  </center>
               </p>

            </>}


         <div style={{ height: "40px" }}></div>

         <button onClick={handleOnClick}>{buttonCaption}</button>
      </Stack>
   );
};
