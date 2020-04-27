import React from 'react';
import SendUsingAddressContainer from './SendUsingAddress';
import TransactionAddressComponent from '../../components/transaction/send/TransactionAddress';
import { ControlGroup, FormGroup } from '@blueprintjs/core';
import { useStoreActions, useStoreState } from '../../hooks';

export default function TransactionAddressContainer() {
  const { spendable } = useStoreState((state) => state.walletSummary);
  const { fee, address } = useStoreState((state) => state.sendCoinsModel);
  const { setAddress } = useStoreActions((actions) => actions.sendCoinsModel);

  return (
    <FormGroup helperText="TOR Onion or HTTP/HTTPS URL." inline={false}>
      <ControlGroup fill={true}>
        <TransactionAddressComponent
          fee={fee}
          spendable={spendable}
          address={address}
          setAddressCb={setAddress}
        />
        <SendUsingAddressContainer />
      </ControlGroup>
    </FormGroup>
  );
}