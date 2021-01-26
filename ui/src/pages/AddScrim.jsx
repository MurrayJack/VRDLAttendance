import React from "react";
import { Screen, Loading } from "../components";
import "firebase/firestore";
import { useParams } from "react-router-dom";
import { useGet } from "../components/useQuery"
import { ScrimForm } from "../forms"

export const NewScrimPage = () => {

    const { id } = useParams();
    const { data, loading } = useGet("scrims", id)

    return (
        <Screen allowBack caption={Loading ? "..." : `${data.home}vs${data.away}`}>

            {loading
                ? <Loading />
                : <ScrimForm {...data} />
            }

        </Screen>
    );
};
