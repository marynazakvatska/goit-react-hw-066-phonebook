
import css from './ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';


const ContactList = () => {

/*   contacts={dispatch(getVisisbleContacts())} onDelete={dispatch(deleteContact) */

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter)
  /* console.log(contacts)
   console.log(filter) */


  const getVisisbleContacts = () => {
    const normalizeContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts)
    )
   
  }

  
 
    return (<ul className={css.list_contacts}>
    {/*   {contacts.map(({ id, name, number }) => { */}
        {dispatch(getVisisbleContacts).map(({ id, name, number }) => {
          return  (
                <li className={css.element} key={id}>
                    <p >{name} :</p> <p className={css.number}>{number}</p>
                  <button className={css.btn} onClick={() =>dispatch(deleteContact(id))}>Delete</button>
                    
              </li>
          )
        }
        )}
      </ul>)
}
    
export default ContactList


