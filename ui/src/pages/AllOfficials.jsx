import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";
import { Screen, Loading, VStack } from "../components";

export const AllOfficials = () => {

    return (
        <Screen allowBack caption="All Officials">
            <FirestoreCollection path="/officials/" limitToFirst={2}>
                {d => (
                    d.isLoading
                        ? <Loading />
                        : <VStack>{d.value.map((e, i) => <Official item={e} id={d.ids[i]} />)}</VStack>
                )}
            </FirestoreCollection>
        </Screen>
    );
};

const Official = ({item}) => {
    return (
        <button>{item.name}</button>
    )
}
