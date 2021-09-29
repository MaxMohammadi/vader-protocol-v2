// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.6.8;
pragma experimental ABIEncoderV2;

import "../governance/GovernorAlpha.sol";

contract MockGovernorAlpha is GovernorAlpha {
    constructor(
        address vault_,
        address guardian_,
        address USDV_,
        address feeReceiver_,
        uint256 feeAmount_,
        address council_
    )
        public
        GovernorAlpha(
            vault_,
            guardian_,
            USDV_,
            feeReceiver_,
            feeAmount_,
            council_
        )
    {}

    function votingPeriod() public pure override returns (uint256) {
        return 50;
    }

    /// @notice mock function to get chain id from CHAINID opcode.
    /// Using ganache in truffle sets chainid but the a separate ganache or ganache in solidity-coverage
    /// does not set the CHAINID opcode and it default to 1, which results in web3.eth.getChainId and CHAINID opcode
    /// both returning different values.
    /// https://github.com/ethereum/web3.py/issues/1677
    function CHAINID() public pure returns (uint256 chainId) {
        assembly {
            chainId := chainid()
        }
    }
}
