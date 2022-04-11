import {ContactList,Item, Name, Delete} from './Contacts.styled'
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