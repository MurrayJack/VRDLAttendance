import React from "react";
import { LinkButton } from ".";
import { useSave, useGet } from "./useQuery";
import { useHistory } from "react-router-dom";
import { pages } from "../pages/pages";

export interface IScrimLink {
   home: string;
   away: string;
   date: string;
}

export const ScrimLink = ({ home, away, date }: IScrimLink) => {

   const { save } = useSave("scrims")
   const history = useHistory();

   const buildID = () => {
      // const date = new Date();
      // const dateString = date.toLocaleDateString("en-AU", { year: 'numeric', month: 'numeric', day: 'numeric' }).replaceAll("/", "");
      const id = `${home}vs${away}-${date}`
      return id;
   }

   const handleOnClick = () => {
      if (data) {

      }

      const id = buildID();

      save(id, {
         home,
         away
      }).then(() => history.push(`${pages.AddScrimPage}/${id}`))
   }

   const { data, loading } = useGet("scrims", buildID())

   const buildLinkLabel = () => {
      if (data) {
         return `${home} vs ${away} (${data?.officials && data?.officials.length} officials)`
      }

      return `${home} vs ${away}`
   }

   //    const handleAddStandardScrimmages = (home, away) => {
   //       // figure out the URL
   //       const date = new Date();
   //       const dateString = date.toLocaleDateString("en-AU", { year: 'numeric', month: 'numeric', day: 'numeric' }).replaceAll("/", "");
   //       const id = `${home}vs${away}-${dateString}`

   //       save(id, {
   //           home, 
   //           away
   //       }).then(() => history.push(`${pages.AddScrimPage}/${id}`))       
   //   }

   return (
      <>
         {loading
            ? <LinkButton>Loading...</LinkButton>
            : <LinkButton onClick={handleOnClick}>{buildLinkLabel()}</LinkButton>
         }

         <pre>{JSON.stringify(data)}</pre>
      </>
   );
};
