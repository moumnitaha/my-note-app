import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { my_notes } from "../App";
import "../index.css";

const EditNote: React.FC<{
  notes: my_notes[];
  setNotes: Dispatch<SetStateAction<my_notes[]>>;
}> = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = notes.find((item) => id && item.id === id);
  const [title, setTile] = useState(note?.title);
  const [details, setDetails] = useState(note?.details);

  useEffect(() => {
    if (!note) navigate("/404");
  }, [note, navigate]);

  const editNote = () => {
    if (title && details) {
      const new_notes = notes.map((item) => {
        if (id && item.id === id) {
          item.title = title;
          item.details = details;
        }
        return item;
      });
      new_notes && setNotes(new_notes);
      navigate("/");
    }
  };

  const deleteNote = () => {
    const new_notes = notes.filter((item) => id && item.id !== id);
    setTimeout(() => setNotes(new_notes), 200);
    navigate("/");
  };

  return (
    <section>
      <header className="create-note__header">
        <NavLink to="/" className="btn">
          <IoIosArrowBack />
        </NavLink>
        <button className="btn lg primary" onClick={editNote}>
          Save
        </button>
        <button className="btn danger" onClick={deleteNote}>
          <RiDeleteBin6Line />
        </button>
      </header>
      <div className="create-note__form">
        <input
          type="text"
          value={title}
          onChange={(e) => setTile(e.target.value)}
          autoFocus={true}
          placeholder="Title"
        />
        <textarea
          rows={28}
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        ></textarea>
      </div>
    </section>
  );
};

export default EditNote;
