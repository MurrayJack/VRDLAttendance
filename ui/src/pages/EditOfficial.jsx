import React from "react";
import "firebase/firestore";
import { Screen, OfficialForm, Loading } from "../components";
import { useHistory, useParams } from "react-router-dom";
import { useGet, useSave, useSubscription } from "../components/useQuery"
import { pages } from "../pages/pages"

export const EditOfficial = () => {

    const { id } = useParams();
    const history = useHistory();
    const { data } = useSubscription("officials", id)
    const { save } = useSave("officials")
  
    return (
        <Screen allowBack onBack={() => history.push(pages.AllOfficials)} caption={`${!data ? "Loading..." : data?.derbyName}`}>

            {!data
                ? <Loading />
                : <OfficialForm {...data} buttonCaption="Save" onClick={e => save(id, e).then(() => history.push(pages.AllOfficials))} />
            }

        </Screen>

    );
};
