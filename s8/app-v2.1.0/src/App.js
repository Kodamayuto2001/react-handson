import React, { useState } from "react";
import GitHubUser from "./GithubUser";
import SearchForm from "./SearchForm";

function App() {
  const [login, setLogin] = useState("Kodamayuto2001");

  return (
    <>
      <SearchForm value={login} onSearch={setLogin} />
      <GitHubUser login={login} />
    </>
  );
}

export default App;
