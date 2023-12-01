import React from 'react';
import { useAccount } from "wagmi";

const GetAccount = () => {
  const { address: account, status } = useAccount();

  if (status === 'connected') {
    return <div>Connected Account: {account}</div>;
  } else {
    return <div>No account connected</div>;
  }
}

export default GetAccount;
