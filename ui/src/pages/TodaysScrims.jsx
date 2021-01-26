import React from "react";
import { Screen, LinkButton, ScrimLink } from "../components"
import { useHistory } from "react-router-dom";
import { CgAdd } from "react-icons/cg";
import { pages } from "./pages";
import { useSave } from "../components/useQuery"

export const TodaysScrimmages = () => {

    const history = useHistory();
    const { save } = useSave("scrims")

    const handleAddStandardScrimmages = (home, away) => {
        // figure out the URL
        const date = new Date();
        const dateString = date.toLocaleDateString("en-AU", { year: 'numeric', month: 'numeric', day: 'numeric' }).replaceAll("/", "");
        const id = `${home}vs${away}-${dateString}`

        save(id, {
            home, 
            away
        }).then(() => history.push(`${pages.AddScrimPage}/${id}`))       
    }

    return (
        <Screen allowBack caption="Todays Scrims">
            <h3>Todays Scrims</h3>

            <LinkButton icon={CgAdd} onClick={() => handleAddStandardScrimmages("C", "D")}>C vs D</LinkButton>
            <LinkButton icon={CgAdd} onClick={() => handleAddStandardScrimmages("B", "C")}>B vs C</LinkButton>
            <LinkButton icon={CgAdd} onClick={() => handleAddStandardScrimmages("A", "B")}>A vs B</LinkButton>
            <LinkButton icon={CgAdd} onClick={() => handleAddStandardScrimmages("A", "A")}>A vs A</LinkButton>


            <ScrimLink home="C" away="D" date="25012021" />

            <div style={{ height: "40px" }}></div>

            <LinkButton>Add Scrimmage</LinkButton>

            <h3>Templates</h3>

            <button onClick={handleAddStandardScrimmages}>Add Standard Saturday Scrimmage</button>

        </Screen>

    );
};
