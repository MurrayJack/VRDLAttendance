import React from 'react';
import { OfficialSelect } from './OfficialSelect';
import { PositionsSelect } from './PositionsSelect';
import { HStack, VStack } from '.';

interface IAddPosition {
    onCancel: () => void;
    onAccept: (official: string, position: string) => void;
}

export const AddPosition = ({ onCancel, onAccept }: IAddPosition) => {
    const [official, setOfficial] = React.useState('');
    const [position, setPosition] = React.useState('');

    const handleOnAdd = () => {
        if (official && position) {
            onAccept(official, position);
        }
    };

    return (
        <VStack>
            <OfficialSelect value={official} onChange={setOfficial} />

            <PositionsSelect value={position} onChange={setPosition} />

            <HStack col="1fr 1fr">
                <button
                    disabled={!(official && position)}
                    type="button"
                    onClick={handleOnAdd}
                >
                    Add
                </button>

                <button onClick={onCancel} type="button">
                    Cancel
                </button>
            </HStack>
        </VStack>
    );
};
