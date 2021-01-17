import React from "react";
import { OfficialsList } from "../components/OfficialsList";
import { PositionsList } from "../components/PositionsList";
import { Screen } from "../components/Screen";

export const NewScrimPage = () => {

    return (
        <Screen allowBack caption="Add Scrim">
            <form>

                <input placeholder="Name" />

            </form>

            <h3>Assign Positions</h3>

            <PositionsList />
        </Screen>
    );
};
