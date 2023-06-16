import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Events from "./Pages/Events";


test("componente evento", () => {
  render(
    <BrowserRouter>
      <Events />
    </BrowserRouter>
  );
  const linkElement = screen.getByText("Proximos Eventos");
  expect(linkElement).toBeInTheDocument();
});


