import React from "react";
import { Screen, ScrimLink } from "../components"

export const TodaysScrimmages = () => {

    const dateString = (new Date()).toLocaleDateString("en-AU", { year: 'numeric', month: 'numeric', day: 'numeric' }).replaceAll("/", "");

    return (
        <Screen allowBack caption="Todays Scrims">
            <h3>Saturday Scrims</h3>

            <ScrimLink home="C" away="D" date={dateString} />
            <ScrimLink home="B" away="C" date={dateString} />
            <ScrimLink home="A" away="B" date={dateString} />
            <ScrimLink home="A" away="A" date={dateString} />

            <h3>Todays Scrimmages</h3>

            <h3>Add New</h3>

        </Screen>
    );
};
