import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Notes from "./Notes";

function App() {
  return (
    <>
      <Header />
      {Notes.map((note) => (
        <Note key={note.key} title={note.title} text={note.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
