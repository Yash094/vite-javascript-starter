import {
  ConnectWallet,
  useSDK,
  useContract,
  useNFT,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  const { contract } = useContract(
    import.meta.env.VITE_TEMPLATE_CONTRACT_ADDRESS,
    "nft-collection"
  );
  const { data: nft, isLoading, error } = useNFT(contract, 0);

  const sdk = useSDK();

  async function getNft() {
    const con = await sdk.getContract(
      import.meta.env.VITE_TEMPLATE_CONTRACT_ADDRESS
    );
    const nft = await contract.erc721.get(0);
    console.log(nft);
  }
  getNft();
  if (isLoading) return <div>Loading...</div>;
  if (error || !nft) return <div>NFT not found</div>;

  return (
    <>
      <ThirdwebNftMedia metadata={nft.metadata} />
    </>
  );
}
