import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';
//import Searchbox from components

//this will mock the items         uses model https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/__tests__/submissions-list.test.jsx
jest.mock('../items', () => ({ item, isDashboardView }) => (
  <>
    <div data-test-id="item">{item.id}</div>
    <div data-test-id="dashboard">{isDashboardView.toString()}</div>
  </>
));

test('renders header across all pages', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders clicking link takes you to right spot', () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Click Me" });
  userEvent.click(button);
  expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);

});

test('correct number of items render', () => {
  //use the mock thing like from above
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('item renders with correct header', () => {
  //will need some type of mocking 
  render(<App />);
  const button = screen.getByRole("button", { name: "Click Me" });
  userEvent.click(button);
  expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);

});

test('shopping cart total works', () => {
  //will need some type of mocking 
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("input has correct values", () => {
  const onChangeMock = jest.fn();
  // render(<Header onChange={onChangeMock} />);
  const input = screen.getByRole("textbox");

  userEvent.type(input, "Whale");

  expect(input).toHaveValue("Whale");
});

test('increment/decrement works', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
