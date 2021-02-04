import { useState } from 'react';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contact = { name, number };

  const handleChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit(contact);

    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.item}>
      <label>
        Name
        <input type="text" name="name" value={name} onChange={handleChange} />
      </label>

      <label>
        Number
        <input
          type="text"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit" disabled={!name || !number} className={s.btn}>
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: '',
//     number: '',
//   };

//   handleChange = event => {
//     const { name, value } = event.currentTarget;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = event => {
//     event.preventDefault();

//     this.props.onSubmit(this.state);
//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: '',
//       number: '',
//     });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit} className={s.item}>
//         <label>
//           Name
//           <input
//             type="text"
//             name="name"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//         </label>

//         <label>
//           Number
//           <input
//             type="text"
//             name="number"
//             value={this.state.number}
//             onChange={this.handleChange}
//           />
//         </label>

//         <button
//           type="submit"
//           disabled={!this.state.name || !this.state.number}
//           className={s.btn}
//         >
//           Add contact
//         </button>
//       </form>
//     );
//   }
// }

// export default ContactForm;
