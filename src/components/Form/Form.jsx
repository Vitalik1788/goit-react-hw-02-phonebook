import React, { Component } from "react";
import { FormContainer, FormLabel, FormNameInput, FormSubmitBtn } from './Form.styled';

class Form extends Component {
  state = {
    name: '',
  }

  onInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value})
  }

  onSubmitForm = e => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.name);
    this.reset();
  }

  reset = () => {
    this.setState({ name: '' });
  }

  render() {
    return (
      <FormContainer autoComplete="off" onSubmit={this.onSubmitForm}>
        <FormLabel htmlFor="name"> Name </FormLabel>
        <FormNameInput
              id='name'
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              placeholder="Enter name"
              onChange={this.onInputChange}
            />
        <FormSubmitBtn type="submit">Add contact</FormSubmitBtn>
        </FormContainer>
    )

  }

}


export default Form;