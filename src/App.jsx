import { ConnectWallet, useSDK, useContract, useNFT } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const contract = useContract("0x95d29191a794A5B4f25ff1777943106C3f82516e")
  const contract2 = useContract("0x72e190ea693c2E9b522d0abd66ebFd4240140004")
  const { data: nft, isLoading, error } = useNFT(contract, 0);
  const { data: nft2, isLoading2, error2 } = useNFT(contract2, 0);
  const sdk = useSDK()

  async function getNft() {
    const con = await sdk.getContract("0x95d29191a794A5B4f25ff1777943106C3f82516e")
    const nft = await contract.erc721.get(0);
    console.log(nft)



  }
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;
  if (isLoading2) return <div>Loading...</div>;
  if (error2 || !nft2) return <div>NFT not found</div>;
  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} />
      <ThirdwebNftMedia metadata={nft2.metadata} />
    </>
  );
}
