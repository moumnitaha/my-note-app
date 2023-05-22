import { IoIosArrowBack } from "react-icons/io";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <section>
      <header className="create-note__header">
        <NavLink to="/" className="btn">
          <IoIosArrowBack />
        </NavLink>
      </header>
      <div className="create-note__form">
        <center>
          <h5>Error 404</h5>
          <h1>Page Not Found</h1>
        </center>
      </div>
    </section>
  );
}
