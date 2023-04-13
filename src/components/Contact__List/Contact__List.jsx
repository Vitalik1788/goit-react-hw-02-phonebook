import { ContactItem } from "./Contact__List.styled";

const ContactsList = ({ contacts } ) => {
  return (
    <ul>
      {contacts.map(({id, name}) => {
        return (
          <ContactItem key={id}>
            {name}
          </ContactItem>
        )
      })}
    </ul>
  )
}

export default ContactsList;