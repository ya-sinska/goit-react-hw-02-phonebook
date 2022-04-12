import PropTypes from 'prop-types';
import { ContactList, Item, Name, Delete } from './Contacts.styled'
export const Contacts = ({ contacts, onDeleteContact }) => {
    return (
        <ContactList>
            {contacts.map(({id, name, number})=> (<Item key={id} >
                <Name>{name}: </Name>
                <>{number}</>
                <Delete onClick={()=>{onDeleteContact(id)}}>Delete</Delete>
            </Item>))}
        </ContactList>
    )
}
Contacts.propTypes = {
    onDeleteContact: PropTypes.func,
    contacts:PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),),
}