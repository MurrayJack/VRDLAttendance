import React from "react";
import "firebase/firestore";
import { FirestoreCollection } from "@react-firebase/firestore";
import { Screen, Loading, VStack, LinkButton, Center } from "../components";
import { useHistory } from "react-router-dom";
import { pages } from "./pages";
import { CgUser } from "react-icons/cg";

export const AllOfficials = () => {

    const history = useHistory();

    return (
        <Screen allowBack caption="All Officials">
            <FirestoreCollection path="/officials/" orderBy={[{ field: "derbyName", type: "asc" }]}>
                {d => (
                    d.isLoading
                        ? <Center><Loading /></Center>
                        : <VStack>{d.value.map((e: any, i: number) =>
                            <LinkButton icon={<CgUser />} caption={e.name} onClick={() => history.push(pages.EditOfficial(d.ids[i]))}>{e.derbyName}</LinkButton>)}
                            <small>{d.value.length} Officials</small>
                        </VStack>
                )}
            </FirestoreCollection>
        </Screen>
    );
};
