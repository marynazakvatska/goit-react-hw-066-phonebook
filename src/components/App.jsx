
import ContactList from "./ContactList";
import Form from "./Form";
import Filter from "./Filter";




export function App() {

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
      <Form  />   

      <h2>Contacts</h2>
      <Filter  />
      <ContactList />
  
    </div>
  );
  
}

