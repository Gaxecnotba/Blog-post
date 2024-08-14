import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "./page";

describe("About", () => {
  it("renders multiple paragraphs", () => {
    const { container } = render(<About />);
    screen.debug();

    const paragraphs = screen.getAllByRole("paragraph");
    expect(paragraphs.length).toBe(3); // Adjust the number based on how many paragraphs you have
    paragraphs.forEach((paragraph) => {
      expect(paragraph).toBeInTheDocument();
    });
  });
});
