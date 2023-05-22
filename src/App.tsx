import { useEffect, useState } from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Notes from "./components/notes";
import EditNote from "./components/edit-notes";
import CreateNote from "./components/create-note";
import NotFound from "./components/404";

export interface my_notes {
  id: string;
  title: string;
  details: string;
  date: string;
}

function App() {
  const [notes, setNotes] = useState<my_notes[]>(
    (localStorage.notes && JSON.parse(localStorage.notes)) || []
  );

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <main id="app">
      <Router>
        <Routes>
          <Route index element={<Notes notes={notes} />} />
          <Route
            path="/edit-note/:id"
            element={<EditNote notes={notes} setNotes={setNotes} />}
          />
          <Route
            path="/create-note"
            element={<CreateNote notes={notes} setNotes={setNotes} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
