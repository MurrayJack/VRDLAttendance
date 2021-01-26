import React from "react";
import "firebase/firestore";
import { FirestoreMutation } from "@react-firebase/firestore";
import { Label } from "../components/Label";
import { v4 as uuidv4 } from "uuid"
import { Screen, Stack, OfficialForm } from "../components";
import { useHistory } from "react-router-dom";

export const AddOfficial = () => {

    const history = useHistory();

    return (
        <Screen allowBack caption="Add Official">
            <FirestoreMutation type="set" path={`/officials/${uuidv4()}`}>
                {({ runMutation }) => (
                    <OfficialForm buttonCaption="Add" onClick={(e => runMutation(e).then(() => history.push("/")))} />
                )}
            </FirestoreMutation >
        </Screen>
    );
};
