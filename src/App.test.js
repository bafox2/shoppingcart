import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';
import Shop from './pages/Shop';
import { MemoryRouter } from 'react-router-dom';
import allItems from './itemData/allItems'
import Item from './components/Item'

//,ake sure to wrap the router in memoryrouter


test('renders clicking link takes you to right spot', () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter >);
  const link = screen.getByRole("link", { name: "Shop" });
  userEvent.click(link);
  expect(screen.getByRole("heading").textContent).toMatch(/shop/i);
});

// //this will mock the items         uses model https://github.com/TheOdinProject/theodinproject/blob/main/app/javascript/components/project-submissions/components/__tests__/submissions-list.test.jsx
// jest.mock('../items', () => ({ item, isDashboardView }) => (
//   <>
//     <div data-test-id="item">{item.id}</div>
//     <div data-test-id="dashboard">{isDashboardView.toString()}</div>
//   </>
// ));

test('renders header across all pages', () => {
  render(<MemoryRouter>
    <App />
  </MemoryRouter >);
  const linkElement = screen.getByText(/header/i);
  expect(linkElement).toBeInTheDocument();
});

test('correct number of items render', () => {
  const listlength = allItems.length
  //use the mock thing like from above
  render(<Shop></Shop>);
  const items = screen.getAllByRole('item');
  expect(items).toHaveLength(listlength)
});

// test('item renders with correct header', () => {
//   //will need some type of mocking 
//   render(<App />);
//   const button = screen.getByRole("button", { name: "Click Me" });
//   userEvent.click(button);
//   expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
// });

// test('shopping cart total works', () => {
//   //will need some type of mocking 
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test("input has correct values", () => {
//   const onChangeMock = jest.fn();
//   // render(<Header onChange={onChangeMock} />);
//   const input = screen.getByRole("textbox");
//   userEvent.type(input, "Whale");
//   expect(input).toHaveValue("Whale");
// });


// test('increment/decrement works', () => {
//   //will need some type of mocking can combine with a previous test 
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
