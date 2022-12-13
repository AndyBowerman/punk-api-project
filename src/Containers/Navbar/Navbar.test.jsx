import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar";
import FilterOptions from "../../Components/FilterOptions/FilterOptions";

it("should render the navbar", () => {
  //Arrange
  render(<Navbar />);
  //Act
  const navContainer = screen.getByRole("nav");
  //Assert
  expect(navContainer).toBeInDocument();
});

it("should not render the filter options on load", () => {
  //Arrange
  render(<Navbar />);
  //Act
  const filterOptions = screen.queryAllByRole("checkbox");
  //Assert
  filterOptions.map((input) => {
    expect(input).toBeNull();
  });
});
