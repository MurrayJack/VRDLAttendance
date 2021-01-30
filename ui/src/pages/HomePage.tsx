import React from "react";
import { Screen, LinkButton } from "../components";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";
import { CgCalendarDates, CgAdd, CgUserAdd, CgUserList } from "react-icons/cg";

export const HomePage = () => {

    const history = useHistory();
    const dateString = (new Date()).toLocaleDateString("en-AU", { year: 'numeric', month: 'numeric', day: 'numeric' });

    return (
        <Screen allowBack={false} caption="Attendance">
            <h3>Today - {dateString}</h3>
            <LinkButton icon={<CgCalendarDates />} onClick={() => history.push(`${pages.TodaysScrims}`)}>New Scrimmage</LinkButton>


            <h3>Scrimmages</h3>
            <LinkButton icon={<CgAdd />} onClick={() => history.push(`all-scrims`)}>All Scrimmages</LinkButton>

            <h3>Officials</h3>
            <LinkButton icon={<CgUserAdd />} onClick={() => history.push(`${pages.AddOfficial}`)}>New Official</LinkButton>
            <LinkButton icon={<CgUserList />} onClick={() => history.push(`${pages.AllOfficials}`)}>All Officials</LinkButton>

        </Screen>
    );
};
