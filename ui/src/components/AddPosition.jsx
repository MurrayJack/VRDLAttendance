import React from "react";
import { OfficialSelect } from "./OfficialSelect"
import { PositionsList } from "./PositionsList"
import { HStack, VStack } from "./"

export const AddPosition = ({ onCancel, onAccept }) => {

    const [official, setOfficial] = React.useState("")
    const [position, setPosition] = React.useState("")

    return (
        <VStack>

            <OfficialSelect value={official} onChange={setOfficial} />

            <PositionsList value={position} onChange={setPosition} />


            <HStack col="1fr 1fr">
                <button type="button" onClick={() => onAccept(official, position)}>Add</button>

                <button onClick={onCancel} type="button">Cancel</button>
            </HStack>
        </VStack>
    );
};
