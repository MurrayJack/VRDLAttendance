import React from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

export interface IUseGet<T> {
    data: T | null;
    ids: string[];
    loading: boolean;
}

export function useSubscription<T>(
    collection: string,
    id: string
): { data: T } {
    const [state, setState] = React.useState<{ data: any }>({
        data: undefined,
    });

    React.useEffect(() => {
        const db = firebase.firestore();

        const get = () => {
            db.collection(collection).doc(id).onSnapshot(setState);
        };

        get();
    }, [collection, id]);

    return {
        data: state && state.data && state.data(),
    };
}

export function useGet<T>(collection: string, id?: string): IUseGet<T> {
    const [state, setState] = React.useState<{
        loading: boolean;
        ids: string[];
        data: any;
    }>({ loading: true, ids: [], data: undefined });

    React.useEffect(() => {
        const db = firebase.firestore();

        if (id !== undefined) {
            db.collection(collection)
                .doc(id)
                .get()
                .then(e =>
                    setState({ loading: false, ids: [], data: e.data() as T })
                );
        } else {
            db.collection(collection)
                .get()
                .then(e =>
                    setState({
                        loading: false,
                        ids: e.docs.map(e => e.id),
                        data: e.docs.map(e => e.data() as T),
                    })
                );
        }
    }, [collection, id]);

    return {
        data: state.data,
        loading: state.loading,
        ids: state.ids,
    };
}

export const useSave = (collection: string) => {
    const db = firebase.firestore();

    const save = (id: string, data: {} | Array<{}>) => {
        return db
            .collection(collection)
            .doc(id)
            .set({
                created: firebase.firestore.FieldValue.serverTimestamp(),
                ...data,
                updated: firebase.firestore.FieldValue.serverTimestamp(),
            });
    };

    return {
        save,
    };
};
