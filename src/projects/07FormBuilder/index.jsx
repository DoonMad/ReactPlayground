import { RouterProvider, Routes, Route } from "react-router-dom";
import App from "./components/Home";
import CreateForm from "./components/CreateForm";
import PreviewForm from "./components/PreviewForm";


function FormBuilderApp() {
    return (
        <Routes>
            <Route path="/" element={<App/>} />
            <Route path="/create" element={<CreateForm/>} />
            <Route path="/preview" element={<PreviewForm/>} />
        </Routes>
    )
}

export default FormBuilderApp