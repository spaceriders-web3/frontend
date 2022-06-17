import axios from "axios";

export default class ApiRequests {
  static async authenticate(address, signature) {
    const body = {
      address: address,
      signature: signature,
    };

    const path = `${process.env.BASE_API_PATH}/jwt`;
    return await axios.post(path, body);
  }

  /**
   *
   * @param {string} tx Planet purchase TX.
   * @param {string} planetGuid Planet GUID.
   */
  static async buyPlanet(planetGuid, name) {
    const path = `${process.env.BASE_API_PATH}/planet/buy`;

    const body = {
      planet_id: planetGuid,
      name: name,
    };

    return (await axios.post(path, body));
  }

    /**
   *
   * @param {string} tx Planet purchase TX.
   * @param {string} planetGuid Planet GUID.
   */
    static async mintFreePlanet(name) {
      const path = `${process.env.BASE_API_PATH}/planet/free`;
      const body = {
        name: name,
      };
      return (await axios.post(path, body));
    }
  
  /**
   *
   * @param {string} planetGuid Planet GUID.
   */
  static async claimPlanet(planetGuid) {
    const path = `${process.env.BASE_API_PATH}/planet/claim`;

    const body = {
      planet_id: planetGuid,
    };

    return (await axios.post(path, body));
  }

  /**
   * @param {string} txHash Hash which claims the planet
   * @param {string} planetGuid Planet GUID.
   */
  static async confirmClaimPlanet(txHash, planetGuid) {
    const path = `${process.env.BASE_API_PATH}/planet/claim/confirm`;

    const body = {
      claimTx: txHash,
      planetId: planetGuid,
    };

    return (await axios.post(path, body)).data;
  }

  static async fetchPlanetCost() {
    const path = `${process.env.BASE_API_PATH}/planet/cost`;
    return (await axios.get(path)).data;
  }

  /**
   * @param {string} planetGuid planetGuid
   */
  static async fetchPlanetCostData(planetGuid) {
    const path = `${process.env.BASE_API_PATH}/planet/cost/sign`;

    const body = {
      planet_id: planetGuid,
    };

    return (await axios.post(path, body)).data;
  }

  /**
   * Gets all planets (claimed/unclaimed)
   */
  static async getAllPlanets() {
    const path = `${process.env.BASE_API_PATH}/planets`;
    return (await axios.get(path)).data;
  }

  /**
   * Gets defense data for a given planet
   *
   * @param {string} planetId
   * @returns
   */
  static async getDefenseData(planetId) {
    const path = `${process.env.BASE_API_PATH}/defense/${planetId}`;
    return (await axios.get(path)).data;
  }



  /**
   * Gets all resources for a given planet
   *
   * @param {string} planetId
   * @returns
   */
  static async getResourceData(planetId) {
    const path = `${process.env.BASE_API_PATH}/ressource/${planetId}`;
    return (await axios.get(path)).data;
  }

  /**
   * @param {string} label
   * @param {string} planetGuid
   * @returns
   */
  static async build(data) {
    const path = `${process.env.BASE_API_PATH}/planet/build`;

    const body = {
      type: data.type,
      label: data.label,
      planet_id: data.planetGuid,
      quantity: data.quantity
    };

    return (await axios.post(path, body));
  }

  /**
   * Gets all installations for a given planet
   *
   * @param {string} planetId
   * @returns
   */
  static async getInstallationData(planetId) {
    const path = `${process.env.BASE_API_PATH}/installation/${planetId}`;
    return (await axios.get(path)).data;
  }

  /**
   * Gets all research data for a given planet
   *
   * @param {string} planetId
   * @returns
   */
  static async getResearchData(planetId) {
    const path = `${process.env.BASE_API_PATH}/research/${planetId}`;
    return (await axios.get(path)).data;
  }


  /**
   * Conversion Request.
   * @param {string} label
   * @param {string} planetGuid
   * @returns
   */
  static async conversionRequest(data) {
    const path = `${process.env.BASE_API_PATH}/planet/resources/convert/sign`;

    const body = {
      planet_id: data.planetId,
      metal: data.metal,
      crystal: data.crystal,
      petrol: data.petrol,
    };

    return (await axios.post(path, body));
  }

  /**
   * Get tier upgrade info
   *
   * @param {string} planetId
   * @returns
   */
  static async getTierInfo() {
    const path = `${process.env.BASE_API_PATH}/planet/staking/info`;
    return (await axios.get(path));
  }

  /**
   * Create staking request.
   * @param {string} label
   * @param {string} planetGuid
   * @returns
   */
  static async createStakingRequest(data) {
    const path = `${process.env.BASE_API_PATH}/planet/staking/create`;

    const body = {
      tier_code: data.tier,
      planet_id: data.planetId,
    };

    return (await axios.post(path, body));
  }

  /**
   * Confirm staking request.
   * @param {string} label
   * @param {string} planetGuid
   * @returns
   */
  static async confirmStakingRequest(data) {
    const path = `${process.env.BASE_API_PATH}/planet/staking/confirm`;

    const body = {
      planet_id: data.planetId,
    };

    return (await axios.post(path, body));
  }

  static async unstakeRequest(data) {
    const path = `${process.env.BASE_API_PATH}/planet/staking/unstake`;

    const body = {
      planet_id: data.planetId,
    };

    return (await axios.post(path, body));
  }

  /**
   * Mark Email as read
   * @param {string} planetId
   * @returns
   */
  static async markEmailRead(planetId, emailId) {
    const path = `${process.env.BASE_API_PATH}/planet/email/${emailId}/read`;

    const body = {};

    return (await axios.post(path, body)).data;
  }

  /**
   * Mark Email as read
   * @param {string} planetId
   * @returns
   */
  static async deleteEmail(planetId, emailId) {
    const path = `${process.env.BASE_API_PATH}/planet/email/${emailId}/delete`;

    const body = {};

    return (await axios.post(path, body)).data;
  }

  /**
   * Get All planet info
   * @param {string} planetId
   * @returns
   */
  static async getAllInfoPlanet(planetId) {
    const path = `${process.env.BASE_API_PATH}/planet/${planetId}`;
    return (await axios.get(path));
  }

  /**
   * Repair Resource
   * @param {object} data
   * @returns
   */
  static async repairResource(data) {
    const path = `${process.env.BASE_API_PATH}/ressource/repair`;

    const body = {
      label: data.label,
      planetId: data.planetGuid,
    };

    return (await axios.post(path, body)).data;
  }

  /**
   * Energy deposit
   * @param {object} data
   * @returns
   */
  static async depositEnergy(data) {
    const path = `${process.env.BASE_API_PATH}/planet/energy`;

    const body = {
      planet_id: data.planetId,
      deposit_id: data.guid,
      amount: data.amount,
    };

    return (await axios.post(path, body)).data;
  }

  /**
   * Token Price
   * @param {object} data
   * @returns
   */
  static async tokenPrice() {
    const path = `${process.env.BASE_API_PATH}/chain/tokenprice`;
    return (await axios.get(path)).data.spr_price_usd;
  }

  /**
   * Get chain info
   * @returns
   */
  static async getChainInfo() {
    const path = `${process.env.BASE_API_PATH}/chain`;
    return (await axios.get(path)).data;
  }

  /**
   * Conversion preview
   * @returns
   */
  static async getPreviewConversion(planetId) {
    const path = `${process.env.BASE_API_PATH}/planet/resources/convert/${planetId}/preview`;
    return (await axios.get(path));
  }


  /**
   * Confirm conversion
   * @param {object} data
   * @returns
   */
  static async confirmConversion(data) {
    const path = `${process.env.BASE_API_PATH}/planet/resources/convert/confirm`;

    const body = {
      planet_id: data.planetId,
      token_conversion_id: data.guid,
    };

    return (await axios.post(path, body));
  }

  /**
   * Conversion preview
   * @returns
   */
  static async getPendingConversions(planetId) {
    const path = `${process.env.BASE_API_PATH}/planet/resources/convert/${planetId}/pending`;
    return (await axios.get(path));
  }

    /**
   * Confirm conversion
   * @param {object} data
   * @returns
   */
    static async retryConversion(data) {
      const path = `${process.env.BASE_API_PATH}/planet/resources/convert/retry`;
  
      const body = {
        planet_id: data.planetId,
        token_conversion_id: data.guid,
      };
  
      return (await axios.post(path, body));
    }


  /**
   * @param {object} data
   * @returns
   */
    static async claimPendingLvlUpReward(data) {
      const path = `${process.env.BASE_API_PATH}/planet/level/reward/${data.claimId}/sign`;
      return (await axios.get(path));
    }

    /**
     * @param {object} data
     * @returns
     */
    static async confirmPendingLvlUpReward(data) {
      const path = `${process.env.BASE_API_PATH}/planet/level/reward/${data.claimId}/confirm`;
      return (await axios.get(path));
    }

    /**
     * @param {object} data
     * @returns
     */
     static async getPlanetsByPositionRange(data) {
      const path = `${process.env.BASE_API_PATH}/planets/${data.galaxy}/${data.fromSolarSystem}/${data.toSolarSystem}`;
      return (await axios.get(path));
    }
}