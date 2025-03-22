import { useWallet } from "@solana/wallet-adapter-react"
import { useEffect } from "react";
import axios from "axios"
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export const ConnectWallet = ()=>{
    const wallet = useWallet();

    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search)
        const telegramIdFromUrl = urlParams.get("telegramId")
        if(wallet.publicKey && wallet.connected){
            console.log("request sent")
            const publicKey = wallet.publicKey.toBase58()

        axios.post("http://localhost:3000/save-wallet",{
            publicKey,
            telegramId : telegramIdFromUrl

        }).then((response)=>{
            console.log(response)
            window.location.href = "https://web.telegram.org/k/#@Meteora_Jupiter_bot"
        }).catch(error =>{console.log(error)})}

    },[wallet.connected])

    return <div style={{display: "flex",justifyContent: "center" , padding:10}}>
            {!wallet.publicKey && !wallet.connected && <WalletMultiButton></WalletMultiButton>}            
        </div>
}