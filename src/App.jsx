import ContactList from './components/ContactList.jsx'
import SelectedContact from './components/SelectedContact.jsx'
import { useState } from 'react'
import './App.css'

export default function App() {
    const [selectedContactId, setSelectedContactId] = useState(null);
    return (
        <>
        { selectedContactId ? (
            <div>
              <SelectedContact selectedContactId={selectedContactId} />
            </div>
        ) : (
            <ContactList setSelectedContactId = {setSelectedContactId}/>
        )}
        </>
    );
}
