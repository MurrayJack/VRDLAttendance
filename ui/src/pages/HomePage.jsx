import React from "react";
import { Screen, LinkButton } from "../components";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";
import { CgCalendarDates, CgAdd, CgUserAdd, CgUserList } from "react-icons/cg";

export const HomePage = () => {

    const history = useHistory();

    return (
        <Screen caption="Attendance">
            <h3>Today - (todays date)</h3>
            <LinkButton icon={CgCalendarDates} onClick={() => history.push(`${pages.TodaysScrims}`)}>Todays Scrimmages</LinkButton>
            <LinkButton icon={CgCalendarDates}>Todays Officials</LinkButton>


            <h3>Scrimmages</h3>
            <LinkButton icon={CgAdd} onClick={() => history.push(`${pages.AddScrimPage}`)}>Add Scrimmage</LinkButton>
            <LinkButton icon={CgAdd}>All Scrimmages</LinkButton>
            

            <h3>Officials</h3>

            <LinkButton icon={CgUserAdd} onClick={() => history.push(`${pages.AddOfficial}`)}>New Official</LinkButton>
            <LinkButton icon={CgUserList} onClick={() => history.push(`${pages.AllOfficials}`)}>All Officials</LinkButton>

        </Screen>
    );
};
