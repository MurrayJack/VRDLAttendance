import React from "react";
import { Screen, Loading, Center } from "../components";
import "firebase/firestore";
import { useParams } from "react-router-dom";
import { useGet, useSave } from "../components/useQuery"
import { ScrimForm } from "../forms"
import { IScrim } from "../typings";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";

export const NewScrimPage = () => {

    const { id } = useParams() as any;
    const { data, loading } = useGet<IScrim>("scrims", id)
    const { save } = useSave("scrims");
    const history = useHistory()

    const handleOnSave = (scrim: IScrim) => {
        save(id, scrim);
    }

    return (
        <Screen onBack={() => history.push(pages.TodaysScrims)} allowBack caption={loading ? "" : `${data!.home} vs ${data!.away}`}>

            {loading
                ? <Center><Loading /></Center>
                : <ScrimForm scrim={data!}
                    onComplete={() => history.push(pages.TodaysScrims)}
                    onChange={handleOnSave}
                />
            }

        </Screen>
    );
};
