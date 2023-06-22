import { useEffect, useState } from "react";

export default function SelectedContact ({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null);
    
    useEffect(() => {
        async function tryFunction() {
            try {
                const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
                const result = await response.json();
                setContact(result);
            } catch (err) {
                console.log(err);
            }
        }
        tryFunction();
    }, [selectedContactId]);

    return (
        <>
        {contact && <p>{contact.email}</p>}
        </>
    );
}