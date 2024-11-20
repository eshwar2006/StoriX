import { ethers } from "ethers";
import contractAbi from "../../contracts/storehouse/abi.json";
import { CONTRACT_ADDRESS } from "./config";

// Connect to the Ethereum provider in the browser (e.g., Metamask)
const provider = new ethers.providers.Web3Provider((window as any).ethereum);

// Get the signer (user who connects with Metamask)
const signer = provider.getSigner();

// Initialize the contract instance
const storixContract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi, signer);

export const getContract = () => storixContract;
