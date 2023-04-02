
import css from './Filter.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/contactsSlice';
import { getFilter } from 'redux/selectors';


const Filter = (/* {value, onChange} */) => {
/*   const value = useSelector(state => state.filter) */
  const dispatch = useDispatch()
    const value = useSelector(getFilter);

    return ( <label >Find contacts by name 
               <input className={css.label_filter}
                 value={value}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
           type="text"
           name="name"
         
                      
        style={{
             fontSize: 26, 
             width: "300px",
           height: "40px"}}
               />
                </label>)

}
  
   
export default Filter

