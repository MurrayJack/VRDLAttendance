import React from "react";
import { Screen, LinkButton } from "../components";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";
import { CgCalendarDates, CgAdd, CgUserAdd, CgUserList } from "react-icons/cg";

export const HomePage = () => {

    const history = useHistory();

    return (
        <Screen caption="Attendance">
            <LinkButton icon={CgAdd} onClick={() => history.push(`${pages.AddScrimPage}`)}>Add Scrim</LinkButton>
            <LinkButton icon={CgCalendarDates} >Todays Scrims</LinkButton>

            <h2>Officials</h2>

            <LinkButton icon={CgUserAdd} onClick={() => history.push(`${pages.AddOfficial}`)}>New Official</LinkButton>
            <LinkButton icon={CgUserList} onClick={() => history.push(`${pages.AllOfficials}`)}>All Officials</LinkButton>

            <h2>Settings</h2>
        </Screen>
    );
};
