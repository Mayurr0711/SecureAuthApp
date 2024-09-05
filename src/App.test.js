import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

jest.mock("./components/Navbar", () => () => <div>Navbar</div>);

const renderApp = () => {
  render(
    <Router>
      <App />
    </Router>
  );
};

test("renders the Home page by default", () => {
  renderApp();
  expect(screen.getByText(/Welcome to SecureAuthApp/i)).toBeInTheDocument();
});

test("renders the Navbar component", () => {
  renderApp();
  expect(screen.getByText(/Navbar/i)).toBeInTheDocument();
});

test("navigates to the Register page", () => {
  renderApp();
  fireEvent.click(screen.getByText(/Register/i));
  expect(screen.getByText(/Register Page/i)).toBeInTheDocument();
});

test("navigates to the Login page", () => {
  renderApp();
  fireEvent.click(screen.getByText(/Login/i));
  expect(screen.getByText(/Login Page/i)).toBeInTheDocument();
});
