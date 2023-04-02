
import css from './ContactList.module.css'
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/contactsSlice';
/* import { getContacts, getFilter } from 'redux/selectors'; */
import { getVisibleContacts } from 'redux/selectors';



const ContactList = () => {


  const dispatch = useDispatch();
  const contacts = useSelector(getVisibleContacts);
  
 
 
    return (<ul className={css.list_contacts}>
  
        {contacts.map(({ id, name, number }) => {
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


