import {collection, query, orderBy, onSnapshot, where} from "firebase/firestore";
import {useEffect, useState} from "react";
import {db} from "../firebase/config";

export const useFetchDocuments = (docCollection, search = null, uid = null) => {

    const [documents, setDocuments] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoaging] = useState(true);

    //memory leak
    const [cancelled, setCancelled] = useState(false);

    useEffect(() => {

        async function loadData() {
            if (cancelled) return;

            setLoaging(true);

            const collectionRef = await collection(db, docCollection);

            try {
                let q;
                q = await query(collectionRef, orderBy('createdAt', "desc"));

                await onSnapshot(q,(querySnapshot) => {
                    setDocuments(
                        querySnapshot.docs.map((doc) => ({
                            id: doc.id,
                            ...doc.data(),
                        }))
                    )
                    setLoaging(false);
                })

            } catch (error) {
                console.log(error)
                setError(error.message);
                setLoaging(false);
            }
        }

        loadData()
    },[docCollection, search, uid, cancelled]);

    useEffect(() => {
        return () => setCancelled(true);
    }, []);

    return {documents, loading, error};
}