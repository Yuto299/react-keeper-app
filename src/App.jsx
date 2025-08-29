import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import Notes from "./Notes";

function createNotes(noteItem) {
  return (
    <Note key={noteItem.key} title={noteItem.title} text={noteItem.content} />
  );
}

function App() {
  return (
    <>
      <Header />
      {Notes.map(createNotes)}
      <Footer />
    </>
  );
}

export default App;
