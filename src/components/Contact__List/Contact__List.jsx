import { ContactItem } from "./Contact__List.styled";

const ContactsList = ({ contacts } ) => {
  return (
    <ul>
      {contacts.map(({id, name, number}) => {
        return (
          <ContactItem key={id}>
            {name}: {number}
          </ContactItem>
        )
      })}
    </ul>
  )
}

export default ContactsList;