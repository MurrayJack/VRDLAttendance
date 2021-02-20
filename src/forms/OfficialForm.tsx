import React from "react";
import "firebase/firestore";
import { Label } from "../components/Label";
import { Stack } from "../components";
import { IOfficial } from "../typings";

export interface IOfficialFormProps {
   official?: IOfficial;
   onClick: (data: IOfficial) => void;
   buttonCaption: string;
}

export const OfficialForm = ({ official, onClick, buttonCaption }: IOfficialFormProps) => {

   const [data, setData] = React.useState<IOfficial>(official || {
      name: "",
      derbyName: "",
      insurance: "no",
      vrdlMember: "no",
      league: ""
   });

   const handleOnchange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
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

               <p style={{ textAlign: "center" }}>
                  <strong>
                     Officials without a league affiliation or insurance cannot be involved in scrimmages
                  </strong>
               </p>

            </>}


         <div style={{ height: "40px" }}></div>

         <button onClick={handleOnClick}>{buttonCaption}</button>
      </Stack>
   );
};
