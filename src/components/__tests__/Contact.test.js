import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
test("should load contact compo" , ()=> {
    render(<Contact/>);

  const heading =  screen.getByRole("heading");

  expect(heading).toBeInTheDocument();
})
