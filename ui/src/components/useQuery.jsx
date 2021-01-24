import firebase from "firebase/app";
import "firebase/firestore";

export const useGet = (collection, id) => {
    
    const db = firebase.firestore();


    
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