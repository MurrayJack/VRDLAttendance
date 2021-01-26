import React from "react";
import { LinkButton } from ".";
import { useSave, useGet } from "./useQuery";
import { useHistory } from "react-router-dom";
import { pages } from "../pages/pages";
import { IScrim } from "../typings";

export interface IScrimLink {
   home: string;
   away: string;
   date: string;
}

export const ScrimLink = ({ home, away, date }: IScrimLink) => {

   const { save } = useSave("scrims")
   const history = useHistory();
   const id = `${home}vs${away}-${date}`

   const handleOnClick = () => {

      if (data) {
         history.push(`${pages.AddScrimPage}/${id}`)
      } else {
         save(id, {
            home,
            away
         }).then(() => history.push(`${pages.AddScrimPage}/${id}`))
      }
   }

   const { data, loading } = useGet<IScrim>("scrims", id)

   const buildLinkLabel = () => {
      if (data) {
         return `${data.officials ? `${data?.officials.length} official(s)` : "0 officials"}`
      }

      return `Unplayed`
   }

   return (
      <>
         {loading
            ? <LinkButton>Loading...</LinkButton>
            : <LinkButton caption={buildLinkLabel()} onClick={handleOnClick}>{`${home} vs ${away}`}</LinkButton>
         }
      </>
   );
};
