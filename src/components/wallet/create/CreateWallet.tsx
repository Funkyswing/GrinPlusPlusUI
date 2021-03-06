import { InputPasswordComponent } from "../../../components/custom/InputPassword";
import React from "react";
import { SubmitButton } from "../../styled";
import {
  Button,
  Dialog,
  FormGroup,
  InputGroup,
  Intent,
} from "@blueprintjs/core";
import { useTranslation } from "react-i18next";

type CreateWalletProps = {
  username: string;
  password: string;
  confirmation: string;
  status: string;
  minPasswordLength: number;
  receivedSeed: {
    position: number;
    text: string;
    disabled: boolean;
  }[];
  setUsernameCb: (username: string) => void;
  setPasswordCb: (password: string) => void;
  setConfirmationCb: (password: string) => void;
  signUpButtonCb: () => void;
  SeedValidationComponent: React.ReactNode;
};

export const CreateWalletComponent = ({
  username,
  password,
  confirmation,
  status,
  minPasswordLength,
  receivedSeed,
  setUsernameCb,
  setPasswordCb,
  setConfirmationCb,
  signUpButtonCb,
  SeedValidationComponent,
}: CreateWalletProps) => {
  const { t } = useTranslation();

  return (
    <div data-testid="create-wallet">
      <FormGroup
        label={t("username")}
        helperText={t("username_helper")}
        labelFor="create-wallet-name"
        labelInfo={true}
      >
        <InputGroup
          placeholder={t("username")}
          type="text"
          className="bp3-dark"
          style={{ backgroundColor: "#21242D" }}
          autoFocus={true}
          required={true}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setUsernameCb(e.target.value);
          }}
          value={username}
        />
      </FormGroup>
      <FormGroup
        label={t("password")}
        helperText={`${t("password_helper.1")} ${minPasswordLength} ${t("password_helper.2")}`}
        labelFor="create-wallet-password"
        labelInfo={true}
      >
        <InputPasswordComponent
          password={password}
          cb={setPasswordCb}
          autoFocus={false}
        />
      </FormGroup>
      <FormGroup
        label={t("confirm_password")}
        helperText={t("confirm_password_helper")}
        labelFor="create-wallet-password-confirm"
        labelInfo={true}
      >
        <InputPasswordComponent
          password={confirmation}
          cb={setConfirmationCb}
          autoFocus={false}
        />
      </FormGroup>
      <SubmitButton>
        <Button
          data-testid="create-wallet-button"
          intent={Intent.PRIMARY}
          text={t("create_wallet")}
          style={{ color: "black", width: "200px" }}
          onClick={signUpButtonCb}
          disabled={
            !(
              username !== "" &&
              password.length >= minPasswordLength &&
              password === confirmation
            ) || status.toLowerCase() === "not connected"
          }
        />
      </SubmitButton>
      <Dialog
        isOpen={receivedSeed.length > 0}
        title={t("wallet_seed")}
        isCloseButtonShown={false}
        className="bp3-dark"
      >
        {SeedValidationComponent}
      </Dialog>
    </div>
  );
};
