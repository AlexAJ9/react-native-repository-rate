import { render, fireEvent, waitFor } from "@testing-library/react-native";
import SignInForm from "./SignInForm";
import React from "react";

describe("SignIn", () => {
  describe("SignInContainer", () => {
    it("calls onSubmit function with correct arguments when a valid form is submitted", async () => {
      const onSubmit = jest.fn();

      const { getByPlaceholderText, getByText } = render(
        <SignInForm onSubmit={onSubmit} />
      );

      fireEvent.changeText(getByPlaceholderText("Username"), "Alex");
      fireEvent.changeText(getByPlaceholderText("Password"), "hardpassword");

      await waitFor(() => {
        fireEvent.press(getByText("Sign in"));
      });
      expect(onSubmit).toHaveBeenCalledTimes(1);

      expect(onSubmit.mock.calls[0][0]).toEqual({
        username: "Alex",
        password: "hardpassword",
      });
    });
  });
});
