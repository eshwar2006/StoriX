import abi from "../../contracts/Storix/abi.json";

const config = {
  title: "Storehouse",
  description: "Secure cloud storage on-chain",
  chainId: 11155111, // Sepolia Chain ID
  maxFileSize: 8388608, // Max file size in bytes (8 MB)
  storehouse: {
    address: "0x2e030A7a4Dc8a4b2e510B3fA116EbAAa7e967C8f", // Replace with deployed contract address on Sepolia
    abi: abi,
  },
};

export default config;
