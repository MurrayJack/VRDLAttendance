import React from "react";
import "firebase/firestore";
import { FirestoreMutation, FirestoreDocument } from "@react-firebase/firestore";
import { Screen, Stack, OfficialForm } from "../components";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "../components/useQuery"

export const EditOfficial = () => {

    let { id } = useParams();
    const history = useHistory();
    const { get } = useQuery("officials")

    return (
        <FirestoreDocument path={`/officials/${id}`}>
            {d => {
                return d.isLoading || !d.value
                    ? <>Loading</>
                    :
                    <Screen allowBack caption={`${d.value.derbyName}`}>
                        <FirestoreMutation type="set" path={`/officials/${id}`}>
                            {({ runMutation }) => (
                                <Stack gap="16px">
                                    <OfficialForm {...d.value} buttonCaption="Save" onClick={(e => runMutation(e).then(() => history.push("/")))} />
                                </Stack>

                            )}
                        </FirestoreMutation >

                        {JSON.stringify(get("95d53ca7-6038-4c8b-b886-728fea788c8d").then(e => e))}
                    </Screen>;
            }}
        </FirestoreDocument>

    );
};
