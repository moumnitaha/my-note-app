import { NavLink } from "react-router-dom";
import { my_notes } from "../App";
import { CiSearch } from "react-icons/ci";
import { BsPlusLg } from "react-icons/bs";
import "../index.css";
import { useEffect, useState } from "react";

const Notes: React.FC<{ notes: my_notes[] }> = ({ notes }) => {
  const [query, setQuery] = useState<string>("");
  const [search, setSearch] = useState<boolean>(false);
  const [fltrd, setFiltred] = useState<my_notes[]>(notes);
  useEffect(() => {
    if (query) {
      const filtered = notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
      setFiltred(filtered);
    } else {
      setFiltred(notes);
    }
  }, [query, notes]);
  return (
    <section>
      <header className="notes__header">
        {!search && <h1>Notes</h1>}

        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${search ? "" : "hide"}`}
        />

        <button
          className="btn"
          onClick={() => {
            setQuery("");
            setSearch((prev) => !prev);
          }}
        >
          <CiSearch />
        </button>
      </header>
      <div className="notes__container">
        {fltrd?.map((item, index: number) => {
          return (
            <NavLink to={`edit-note/${item?.id}`} key={index} className="note">
              <h4>{item?.title}</h4>
              <p>{item?.date}</p>
            </NavLink>
          );
        })}
      </div>
      <NavLink to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </NavLink>
    </section>
  );
};
export default Notes;
