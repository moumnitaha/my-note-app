import { Dispatch, SetStateAction, useState } from "react";
import { my_notes } from "../App";
import { IoIosArrowBack } from "react-icons/io";
import { NavLink, useNavigate } from "react-router-dom";
import getTime from "../getTime";
import "../index.css";

const CreateNote: React.FC<{
  notes: my_notes[];
  setNotes: Dispatch<SetStateAction<my_notes[]>>;
}> = ({ setNotes }) => {
  const [title, setTile] = useState("");
  const [details, setDetails] = useState("");
  const navigate = useNavigate();

  const addNote = () => {
    if (title && details) {
      const id = Math.random().toString(36).slice(2);
      const date = getTime();
      const new_note = { title, details, id, date };
      setNotes((prev) => [new_note, ...prev]);
      navigate("/");
    }
  };
  return (
    <section>
      <header className="create-note__header">
        <NavLink to="/" className="btn">
          <IoIosArrowBack />
        </NavLink>
        <button className="btn lg primary" onClick={addNote}>
          Save
        </button>
      </header>
      <div className="create-note__form">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTile(e.target.value)}
          autoFocus={true}
        />
        <textarea
          rows={28}
          placeholder="Note Details..."
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </div>
    </section>
  );
};

export default CreateNote;
