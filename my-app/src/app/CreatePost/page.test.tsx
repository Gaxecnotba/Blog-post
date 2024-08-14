/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Page from "./page"; // Adjust the import path as necessary
import { createnewPost } from "@/lib/actions";
import { useRouter } from "next/navigation";

jest.mock("../../lib/actions.js", () => ({
  createnewPost: jest.fn(),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Page Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should update form data on input change", () => {
    const { getByLabelText } = render(<Page />);
    const titleInput = getByLabelText("Title") as HTMLInputElement;
    fireEvent.change(titleInput, { target: { value: "New Title" } });
    expect(titleInput.value).toBe("New Title");
  });

  it("should call createnewPost with correct data on form submission", async () => {
    const { getByText, getByLabelText } = render(<Page />);
    const titleInput = getByLabelText("Title");
    const authInput = getByLabelText("Author");
    const dateInput = getByLabelText("Date");
    const descriptionInput = getByLabelText("Description");

    fireEvent.change(titleInput, { target: { value: "Test Title" } });
    fireEvent.change(authInput, { target: { value: "Test Author" } });
    fireEvent.change(dateInput, { target: { value: "2024-08-13" } });
    fireEvent.change(descriptionInput, {
      target: { value: "Test Description" },
    });

    fireEvent.click(getByText("Save New Post"));

    expect(createnewPost).toHaveBeenCalledWith(
      "Test Title",
      "Test Author",
      "2024-08-13",
      "Test Description"
    );
  });
});
