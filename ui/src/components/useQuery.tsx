import React from "react"
import firebase from "firebase/app";
import "firebase/firestore";

export function useGet<T>(collection: string, id: string) {

    const db = firebase.firestore();

    const [state, setState] = React.useState<{loading: boolean, data: T}>({ loading: true, data: undefined });

    React.useEffect(() => {
        const get = () => {
            if (id !== undefined) {
                return db.collection(collection)
                    .doc(id)
                    .get()
                    .then(e => setState({ loading: false, data: e.data() as T }))
            } else {
                return db.collection(collection)
                    .get()
                    .then(e => setState({ loading: false, data: e.docs.map(e => e.data() as T) as T[] }))
            }

        }

        get()
    }, [])

    return state;
}

export const useSave = collection => {

    const db = firebase.firestore();

    const save = (id, data) => {
        return db.collection(collection)
            .doc(id)
            .set({
                created: firebase.firestore.FieldValue.serverTimestamp(),
                updated: firebase.firestore.FieldValue.serverTimestamp(),
                ...data
            });
    }

    return {
        save
    }

}














export const useQuery = (collection) => {

    const db = firebase.firestore();

    const add = (record) => {
        return db
            .collection(collection)
            .add({
                created: firebase.firestore.FieldValue.serverTimestamp(),
                updated: firebase.firestore.FieldValue.serverTimestamp(),
                ...record,
            })
    }

    const get = id => {
        return db.collection(collection)
            .doc(id)
            .get();
    }

    const update = (id, record) => {
        return db
            .collection(collection)
            .doc(id)
            .set({
                updated: firebase.firestore.FieldValue.serverTimestamp(),
                ...record
            })

    }

    return {
        add,
        update,
        get
    }
}


// .doc(groceryListId)
//         .get();

// .doc(groceryListId)
//         .collection('items')
//         .orderBy('created')
//         .onSnapshot(observer);