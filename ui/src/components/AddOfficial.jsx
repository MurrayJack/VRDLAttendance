import React from "react";
import "firebase/firestore";
import { FirestoreMutation } from "@react-firebase/firestore";
import firebase from "firebase/app";
import { Label } from "./Label";
import { v4 as uuidv4 } from "uuid"
import { Stack } from "./Stack";

export const AddOfficial = () => {

    const handleSave = (e, mutation) => {
        e.preventDefault();
        const data = new FormData(e.target);

        var object = {};
        data.forEach(function (value, key) {
            object[key] = value;
        });

        mutation(object).then(() => alert("save"))
    }

    return (
        <FirestoreMutation type="set" path={`/officials/${uuidv4()}`}>
            {({ runMutation }) => {
                return (
                    <form onSubmit={e => handleSave(e, runMutation)}>
                        <Stack>
                            <h2>Add Official</h2>

                            <Label caption="Legal Name">
                                <input name="name" />
                            </Label>

                            <Label caption="Derby Name">
                                <input name="legalName" />
                            </Label>

                            <Label caption="VRDL official">
                                <input type="checkbox" name="vrdlMember" />
                            </Label>

                            <Label caption="Waver Explained">
                                <input type="checkbox" name="waver" />
                            </Label>

                            <button>Add Official</button>

                        </Stack>
                    </form >
                );
            }}
        </FirestoreMutation >
    );
};