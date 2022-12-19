import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// a) importação do react
// b) o react pode ser utilizdo para multiplataforma, como celular, tv, web, etc.
// c) o React é o core, o coração do React, onde tem as funcionalidades compartilhadas por todos os ambientes.
// d)O reactDom é a integraçaõ do react com o dom, que é a representação do html com o javascript.
// e) Nos chamamos o react dom que recebe um parâmetro que busca o elemento root do index.html
// f) o Rect então vai criar tudo dentro desse root.
// g) Como nos SPA tudo é criado a partir do javascript, a aplicação não estará no html mas no javascript.
