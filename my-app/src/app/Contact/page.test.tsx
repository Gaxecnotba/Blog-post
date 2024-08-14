import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Contact from "./page";

describe("Contact", () => {
  it("renders a contact form", () => {
    render(<Contact />);
    screen.debug();

    const heading = screen.getByText("Contact Us", {
      exact: false,
    });
    expect(heading).toBeInTheDocument();
  });
});
