import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import {useState, useEffect} from "react";

export const useAuth = () => {
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled] = useState(false);

    const auth = getAuth();

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password,
            )

            await updateProfile(user, {
                displayName: data.displayName
            })

            return user

        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

            let systemErrorMessage;

            if (error.message.includes('Password')) {
                systemErrorMessage = 'A senha precisa conter pelo menos 6 caracteres.'
                return systemErrorMessage;
            } else if(error.message.includes('email-already')) {
                systemErrorMessage = 'E-mail já cadastrado.'
                return systemErrorMessage;
            } else {
                systemErrorMessage = 'Ocorreu um erro, por favor tente mais tarde.'
                return systemErrorMessage;
            }

            setError(systemErrorMessage);
        }

        setLoading(false);
    }

    const logOut = () => {
        checkIfIsCancelled();
        signOut(auth);
    }

    const logIn = async(data) => {
        checkIfIsCancelled();
        setError(false);
        setLoading(false);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
            setLoading(false);

        } catch (error) {
            let systemErrorMessage;

            if (error.message.includes('user-not-found')) {
                systemErrorMessage = 'Usuário não encontrado'
            } else if (error.message.includes('wrong-password')) {
                systemErrorMessage = 'Senha errada.'
            } else {
                systemErrorMessage = 'Ocorreu um erro'
            }
            setError(systemErrorMessage);
            setLoading(false);
        }

    }

    useEffect(() => {
        return () => setCancelled(true);
    }, [])

    return {
        auth,
        createUser,
        error,
        loading,
        logOut,
        logIn,
    }
};