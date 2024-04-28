import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsAPI";

const Contact = ({ data: { id, number, name } }) => {
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <div>
        <h5>{name}</h5>
        <p>{number}</p>
      </div>
      <button onClick={handleDeleteItem}>Delete</button>
    </div>
  );
};

export default Contact;
