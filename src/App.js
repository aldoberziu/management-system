import UserForm from "./components/UserForm";
import Table from "./components/Table";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />} />
        <Route path="add-user" element={<UserForm action='add'/>} />
        <Route path="edit-user/:id" element={<UserForm action='edit'/>} />
        {/* <Route path="edit-user" element={<Contact />} /> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
