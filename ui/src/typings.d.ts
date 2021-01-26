export interface IScrim {
    home: string;
    away: string;
    officials: Array<IScrimOfficial> | undefined
}

export interface IScrimOfficial {
    officialId: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
    positionId: firebase.firestore.DocumentReference<firebase.firestore.DocumentData>;
}


export interface IOfficial {
    name: string;
    derbyName: string;
    insurance: string;
    league: string;
    vrdlMember: string;
    waver: string;
}