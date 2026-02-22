import { useState } from "react";
import  "./styles/app.css"
import QueryForm from "./components/QueryForm";
import ResponseCard from "./components/ResponseCard";

export default function App() {
  const [response, setResponse] = useState(null);

  return (
<div className="container">
  <h1 className="header">
    <img src="/Logo.png" alt="Logo" className="logo" />
    <span>Effortech Smart Portal</span>
  </h1>

  <QueryForm setResponse={setResponse} />
  {response && <ResponseCard response={response} />}
</div>

  );
}
