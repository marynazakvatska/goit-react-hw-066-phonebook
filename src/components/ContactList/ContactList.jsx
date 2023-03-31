import PropTypes from 'prop-types';
import css from './ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';



  

const ContactList = (/* { contacts, onDelete } */) => {

/*   contacts={dispatch(getVisisbleContacts())} onDelete={dispatch(deleteContact) */

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  console.log(contacts)

const filter = useSelector(getFilter)

  const getVisisbleContacts = () => {
    const normalizeContacts = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeContacts)
    )
   
  }
 
    return (<ul className={css.list_contacts}>
      {contacts.map(({ id, name, number }) => {
      
          return  (
                <li className={css.element} key={id}>
                    <p >{name} :</p> <p className={css.number}>{number}</p>
                  <button className={css.btn} onClick={(id) =>dispatch(deleteContact(id))}>Delete</button>
                    
              </li>
          )
        }
        )}
      </ul>)
}
    
export default ContactList


/* ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.any,
       name: PropTypes.string.isRequired,
       number: PropTypes.string.isRequired
  })),
    onDelete: PropTypes.func.isRequired
} */