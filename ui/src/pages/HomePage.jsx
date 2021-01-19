import React from "react";
import { Stack, Screen } from "../components";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";

export const HomePage = () => {

    const history = useHistory();

    return (
        <Screen caption="Home">
            <Stack>
                <button onClick={() => history.push(`${pages.AddScrimPage}`)}>Add Scrim</button>
                <button>Todays Scrims</button>
                <hr />
                <button onClick={() => history.push(`${pages.AddOfficial}`)}>Add Official</button>
                <button onClick={() => history.push(`${pages.AllOfficials}`)}>All Officials</button>
            </Stack>
        </Screen>
    );
};
