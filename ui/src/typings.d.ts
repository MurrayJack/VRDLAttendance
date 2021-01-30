export interface IScrim {
    home: string;
    away: string;
    notes: string;
    officials: Array<IScrimOfficial> | undefined;
    additional: boolean;
}

export interface IScrimOfficial {
    officialId: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
    positionId: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
}


export interface IOfficial {
    name: string;
    derbyName: string;
    insurance: "no" | "yes";
    league: string;
    vrdlMember: "no" | "yes";
}