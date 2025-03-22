import {ConnectionProvider, useWallet, WalletProvider} from "@solana/wallet-adapter-react"
import { WalletModalProvider, WalletDisconnectButton, WalletMultiButton} from "@solana/wallet-adapter-react-ui"
import "@solana/wallet-adapter-react-ui/styles.css"
import {PhantomWalletAdapter} from "@solana/wallet-adapter-wallets"
import { useEffect } from "react";
import { ConnectWallet } from "./components/ConnectWallet";

function App(){
  const wallets = [new PhantomWalletAdapter()];
  
  return (
    <div>
      <ConnectionProvider endpoint={"https://api.devnet.solana.com"}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <ConnectWallet></ConnectWallet>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App