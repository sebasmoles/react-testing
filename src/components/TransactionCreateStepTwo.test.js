import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// Run tests with: yarn test (in this project)
// screen.getByRole("") is a good way to debug our tests;
// Follow Arrange, Act, Assert pattern for unit testing
// Try to test the contrary of whatever you want to test for debugging. For instance if you want to check if a button is enabled, also test if is disabled.

test("on initial render, the pay button is disabled", async () => {
  // Arrange
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // Assert, no act needed in this particular test
  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();
});

test("if an amount and note is entered, the pay button becomes enabled", async () => {
  // Arrange (which is basically rendering de component first)
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  // Act (could be clicking, typing, any user event)
  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  // Assert
  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
