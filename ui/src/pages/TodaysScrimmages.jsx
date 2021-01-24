import React from "react";
import { Screen, LinkButton } from "../components"


export const TodaysScrimmages = () => {

    const handleAddStandardScrimmages = () => {

    }

    return (
        <Screen allowBack caption="Todays Scrims">
                <h3>Todays Scrims</h3>

                <LinkButton>A vs A</LinkButton>
                <LinkButton>A vs B</LinkButton>
                <LinkButton>B vs C</LinkButton>
                <LinkButton>C vs D</LinkButton>

                <div style={{ height: "40px" }}></div>

                <LinkButton>Add Scrimmage</LinkButton>

                <h3>Templates</h3>

                <button onClick={handleAddStandardScrimmages}>Add Standard Saturday Scrimmage</button>

        </Screen>

    );
};
