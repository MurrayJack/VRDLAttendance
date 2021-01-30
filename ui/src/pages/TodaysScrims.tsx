import React, { useState } from "react";
import { Label, Screen, ScrimLink, ScrimLinkNew } from "../components"
import firebase from "firebase/app";
import "firebase/firestore";
import { today, todayID, tomorrow } from "../code/dateUtils";
import { IScrim } from "../typings";

export const TodaysScrimmages = () => {

    const [newScrim, setNewScrim] = useState<{ home?: string, away?: string }>({})
    const [data, setDate] = useState<IScrim[]>()

    React.useEffect(() => {
        const db = firebase.firestore();

        let start = today();
        let end = tomorrow();

        const get = () => {
            db.collection("scrims")
                .where("created", '>', start)
                .where("created", '<', end)
                .get()
                .then(snapshot => {
                    const items: IScrim[] = []
                    snapshot.forEach(docs => {
                        items.push(docs.data() as IScrim)
                    })
                    setDate(items)
                })
        }

        get()
    }, [])

    return (
        <Screen allowBack caption="Todays Scrims">
            <h3>Saturday Scrimmages</h3>

            <ScrimLink home="C" away="D" date={todayID()} />
            <ScrimLink home="B" away="C" date={todayID()} />
            <ScrimLink home="A" away="B" date={todayID()} />
            <ScrimLink home="A" away="A" date={todayID()} />

            <div style={{ height: "40px" }}></div>

            <h3>Additional Scrimmages</h3>

            {data && data!.filter(e => e.additional).map(e => <ScrimLink home={e.home} away={e.away} date={todayID()} />)}

            <div style={{ height: "40px" }}></div>

            <h3>Add New Scrimmage</h3>

            <Label horizontal caption="Home Team">
                <input onChange={e => setNewScrim({ ...newScrim, home: e.target.value })} />
            </Label>

            <Label horizontal caption="Away Team">
                <input onChange={e => setNewScrim({ ...newScrim, away: e.target.value })} />
            </Label>

            <ScrimLinkNew home={newScrim.home!} away={newScrim.away!} date={todayID()} />

        </Screen>
    );
};
