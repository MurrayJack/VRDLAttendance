import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";
import { Screen, Loading, VStack, LinkButton } from "../components";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";

export const AllOfficials = () => {

    const history = useHistory();

    return (
        <Screen allowBack caption="All Officials">
            <FirestoreCollection path="/officials/" orderBy={[{ field: "derbyName", type: "asc" }]}>
                {d => (
                    d.isLoading
                        ? <Loading />
                        : <VStack>{d.value.map((e: any, i: number) => <LinkButton caption={e.name} onClick={() => history.push(pages.EditOfficial(d.ids[i]))}>{e.derbyName}</LinkButton>)}</VStack>
                )}
            </FirestoreCollection>
        </Screen>
    );
};
