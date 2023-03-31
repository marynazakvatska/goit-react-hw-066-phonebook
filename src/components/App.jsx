import {useState} from "react";
import { nanoid } from 'nanoid'
import ContactList from "./ContactList";
import Form from "./Form";
import Filter from "./Filter";
/* import useLocalStorage from "hooks/hooks";
import { useDispatch, useSelector } from "react-redux";
import { addContact, deleteContact, changeFilter } from "redux/actions"; */




export function App() {
/*   const dispatch = useDispatch(); */

  /*  const [contacts, setContacts] = useLocalStorage('contacts', 
  [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}], ); 
 const [filter, setFilter] = useState('') */
  
  /*    const addContact = ({ name, number }) => { */
  /*   console.log(contacts); */

  /*   const contact = {
      id: nanoid(),
      name,
      number,
    } */
 
  /*  console.log(contact)
   contacts.find(cont =>
     cont.name.toLowerCase().includes(contact.name.toLowerCase())
   )
     ? alert(`${contact.name} is already in your list`)
     : setContacts(prevState => [contact, ...prevState]
    
      ) 

}*/

  /* const changeFilter = e => {
    setFilter(e.currentTarget.value)
    } */

  /* const getVisisbleContacts = () => {
    const normalizeContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts)
    )
   
  } */

  /*  const deleteContact = (id) => {
      setContacts(prevState => 
     prevState.filter(contact => contact.id !== id)
  )
    } */



 
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        marginLeft: 30,
        backgroundColor: 'powderblue',
           
      }}
    >
 
         
      <h1>Phonebook</h1>
      <Form /* onSubmit={dispatch(addContact)} */ />   

      <h2>Contacts</h2>
      <Filter /* value={filter} onChange={dispatch(changeFilter)} */ />


      <ContactList /* contacts={dispatch(getVisisbleContacts())} onDelete={dispatch(deleteContact)} */ />
  

    </div>
  );
  
}

