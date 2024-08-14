import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Page from "../src/app/page"; // Ensure this import path is correct

describe("Welcome", () => {
  it("renders a welcome page", () => {
    render(<Page />);
    screen.debug(); // This will print the current DOM tree to the console for debugging purposes
    const heading = screen.getByText("Welcome to Blog Post", {
      exact: false, // This ensures that the match is not case-sensitive and can be a partial match
    });
    expect(heading).toBeInTheDocument();
  });
});
