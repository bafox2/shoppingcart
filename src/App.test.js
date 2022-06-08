import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from './App';
import Shop from './pages/Shop';
import { MemoryRouter } from 'react-router-dom';
import allItems from './itemData/allItems'
import Item from './components/Item'
import Product from './components/Product';
import Header from './components/Header';

//,ake sure to wrap the router in memoryrouter


test('renders clicking link takes you to right spot', () => {
  render(<MemoryRouter>
    <Header cartNum={() => true} />
  </MemoryRouter >);
  const link = screen.getByText("Shop");
  userEvent.click(link);
  expect(screen.getByTitle("header")).toHaveTextContent(/Nate's farm/i);
});

test('renders header across all pages', () => {
  render(<MemoryRouter>
    <Header cartNum={() => true} />
  </MemoryRouter >);
  const linkElement = screen.getByText(/Nate's farm/i);
  expect(linkElement).toBeInTheDocument();
});

test('correct number of items render', () => {
  const listlength = allItems.length
  //use the mock thing like from above
  render(<MemoryRouter><Shop></Shop></MemoryRouter>);
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(listlength)
});

test('clicking buy adds one to the cart', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const shop = screen.getByText("Shop");
  userEvent.click(shop);
  const item = screen.getByText("Habanero");
  userEvent.click(item);
  const button = screen.getByText("buy this");
  userEvent.click(button);
  const cartNum = screen.getByTitle("cartNum");
  expect(cartNum.textContent).toBe('1')
});

test('buying multiple things adds one to the cart each time', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  const shop = screen.getByText("Shop");
  userEvent.click(shop);
  const item = screen.getByText("Habanero");
  userEvent.click(item);
  const button = screen.getByText("buy this");
  userEvent.click(button);
  const cartNum = screen.getByTitle("cartNum");
  expect(cartNum.textContent).toBe('1')
  userEvent.click(shop);
  expect(screen.getByTitle('shopHeader')).toHaveTextContent(/shop/);
  const item2 = screen.getByText("Peas");
  userEvent.click(item2);
  const button2 = screen.getByText("buy this");
  userEvent.click(button2);
  userEvent.click(button);
  expect(cartNum.textContent).toBe('2')
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
