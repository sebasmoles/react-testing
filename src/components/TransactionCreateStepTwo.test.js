import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

// Run tests with: yarn test
// Integration tests are about testing multiple units of code, which usually results in one larger test.
// Integration testing is about realistic user flows. Think really how the user would use your application, and test that process.
// Is common to have multiple assertions in this type of test.
// In general, is better to have a few integration tests than hundreds of small and precise unit tests.

test("if an amount and note is entered, the pay button becomes enabled, if not it remains disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
