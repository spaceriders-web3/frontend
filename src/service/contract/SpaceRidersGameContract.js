import { ethers } from "ethers";
import ContractAddress from "./ContractAddress";
import Contract from "./Contract";
import SignatureData from "./types/SignatureData";

const ABI = require("../../ABI/SpaceRidersGame.json");

class BenefitStakingAttributes {
  /**
   *
   * @param {string} planetId
   * @param {int} amount
   * @param {string} tier
   * @param {int} timeRelease
   * @param {string} router
   */
  constructor(planetId, amount, tier, timeRelease, router) {
    this.planetId = planetId;
    this.amount = amount;
    this.tier = tier;
    this.timeRelease = timeRelease;
    this.router = router;
  }
}

class EnergyDepositAttributes {
  /**
   *
   * @param {string} guid
   * @param {number} amount
   * @param {string} planetId
   */
  constructor(guid, amount, planetId) {
    this.guid = guid;
    this.amount = amount;
    this.planetId = planetId;
  }
}

class TokenExchangeAttributes {
  /**
   *
   * @param {*} id
   * @param {*} tokens
   * @param {*} validTimeWindow
   * @param {*} forAddress
   */
  constructor(id, tokens, forAddress) {
    this.id = id;
    this.tokens = tokens;
    this.forAddress = forAddress;
  }
}

class SpaceRidersGameContract extends Contract {
  constructor() {
    super();
  }

  getContract() {
    const contractAddress = ContractAddress.getSpaceRidersGameAddress();
    return super.buildContract(contractAddress, ABI);
  }

  /**
   * @param {string} planetGuid Planet GUID.
   *
   **/
  async stakingRequest(signatureData, attributes) {
    const contract = await this.getContract();

    const overrides = {
      value: ethers.utils.parseEther("0.0025"),
      gasLimit: 1972197,
    };

    return await contract.stakingRequestV2(
      signatureData,
      attributes.planetId,
      attributes.amount,
      attributes.tier,
      attributes.timeRelease,
      attributes.router,
      overrides
    );
  }

  /**
   * @param {string} planetGuid Planet GUID.
   *
   **/
  async unstakingRequest(planetId) {
    const contract = await this.getContract();

    const overrides = {
      value: ethers.utils.parseEther("0.0025"),
      gasLimit: 6721975,
    };

    return await contract.unstakingRequestV2(planetId, overrides);
  }

  /**
   * @param {EnergyDepositAttributes} energyDeposit
   **/
  async energyDeposit(energyDeposit) {
    const contract = await this.getContract();

    const overrides = {
      // To convert Ether to Wei:
      //@todo: get price from smart contract
      //value: ethers.utils.parseEther("0.05"),
      value: ethers.utils.parseEther("0.0025"),
      gasLimit: 1972197,
    };

    const amountInWei = ethers.utils
      .parseEther(energyDeposit.amount)
      .toString();
    return await contract.energyDeposit(
      amountInWei,
      energyDeposit.guid,
      energyDeposit.planetId,
      overrides
    );
  }

  /**
   * @param {EnergyDepositAttributes} energyDeposit
   **/
  async bkmDeposit(bkmDeposit) {
    const contract = await this.getContract();

    const overrides = {
      // To convert Ether to Wei:
      //@todo: get price from smart contract
      //value: ethers.utils.parseEther("0.05"),
      value: ethers.utils.parseEther("0.0025"),
      gasLimit: 1972197,
    };

    const amountInWei = ethers.utils.parseEther(bkmDeposit.amount).toString();

    return await contract.bkmDeposit(
      amountInWei,
      bkmDeposit.guid,
      bkmDeposit.planetId,
      overrides
    );
  }

  async bkmWithdraw(bkmDeposit, sD) {
    const contract = await this.getContract();

    const overrides = {
      // To convert Ether to Wei:
      //@todo: get price from smart contract
      //value: ethers.utils.parseEther("0.05"),
      value: ethers.utils.parseEther("0.0025"),
      gasLimit: 1972197,
    };

    return await contract.bkmWithdraw(
      bkmDeposit.amount,
      bkmDeposit.guid,
      bkmDeposit.planetId,
      sD,
      overrides
    );
  }
  /**
   *
   * @param {*} planetGuid
   * @param {*} price
   * @param {*} sD
   * @param {*} tokenURI
   * @returns
   */
  async buyPlanet(planetGuid, price, sD, tokenURI) {
    const contract = await this.getContract();

    const overrides = {
      // To convert Ether to Wei:
      //@todo: get price from smart contract
      value: ethers.utils.parseEther("0.0025"),
      gasLimit: 1972197,
    };

    return await contract.buyPlanet(planetGuid, price, sD, tokenURI, overrides);
  }

  async stakedLpAmount(planetId) {
    const contract = await this.getContract();
    const stakedLpAmount = (await contract.userStakingLpInfo(planetId))[1];
    return parseFloat(ethers.utils.formatEther(stakedLpAmount));
  }
}

export default new SpaceRidersGameContract();
export {
  BenefitStakingAttributes,
  EnergyDepositAttributes,
  TokenExchangeAttributes,
  SignatureData,
};
