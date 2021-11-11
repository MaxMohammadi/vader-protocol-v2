# vader-monorepo

The Vader monorepo (internal)

## Setup

Node version that should be utilized is 12.16.2, other versions can show unwarranted errors. For Node.JS version management, `nvm` is recommended.

```shell
npm i
# put your wallet seed here
touch .secret
# put your environment variables here
cp .env.sample .env
```

## Test

```
npx ganache-cli
npm test
```

## Deploy

```shell
# deploy (run migration script from x to y)
npx truffle migrate -f x --to y --network kovan
# verify contract
npx truffle run verify MyContract --network kovan
```

## Networks & Addresses

### Kovan

-   Vether: [0x4402A7C8829489705852e54Da50Ebec60C8C86a8](https://kovan.etherscan.io/address/0x4402A7C8829489705852e54Da50Ebec60C8C86a8)
-   Vader: [0x42e05423368A8F937F4cA6463ff3E1Af581226A1](https://kovan.etherscan.io/address/0x42e05423368A8F937F4cA6463ff3E1Af581226A1)
-   Converter: [0x59931212011bF57a466B71257275Ff6D38432Be7](https://kovan.etherscan.io/address/0x59931212011bF57a466B71257275Ff6D38432Be7)
-   LinearVesting: [0x34f08b70a1A32A5c107Af7548F634038ac6CC856](https://kovan.etherscan.io/address/0x34f08b70a1A32A5c107Af7548F634038ac6CC856)
-   VaderReserve: [0xd3d6e14150530105ef7873D860BEc97F75a4F369](https://kovan.etherscan.io/address/0xd3d6e14150530105ef7873D860BEc97F75a4F369)
-   USDV: [0xfd87ba583bd2071713fb5CB12086536a26eec18e](https://kovan.etherscan.io/address/0xfd87ba583bd2071713fb5CB12086536a26eec18e)

-   VaderMath: [0x3a04c32a4146746D2c0AF48d9412277303e070Ea](https://kovan.etherscan.io/address/0x3a04c32a4146746D2c0AF48d9412277303e070Ea)
-   VaderPoolV2: [0xf780120f249Cd518309a2315b73288B05Ff6Abc3](https://kovan.etherscan.io/address/0xf780120f249Cd518309a2315b73288B05Ff6Abc3)
-   VaderRouterV2: [0x784634B1c7136575D93Ce66Da3A14a9352015063](https://kovan.etherscan.io/address/0x784634B1c7136575D93Ce66Da3A14a9352015063)
-   SynthFactory: [0xfdD944fa68C5a0D08D814E58a72a685BcA59105F](https://kovan.etherscan.io/address/0xfdD944fa68C5a0D08D814E58a72a685BcA59105F)
-   LPWrapper: [0x27Fa1AE61Ab123491Bd29013F4481bB7B0f6c4D8](https://kovan.etherscan.io/address/0x27Fa1AE61Ab123491Bd29013F4481bB7B0f6c4D8)

-   Vault (Mock): [0xA677a539A170eBC9fd6E6011b726d68099E55EA9](https://kovan.etherscan.io/address/0xA677a539A170eBC9fd6E6011b726d68099E55EA9)
-   Timelock: [0x02e3157Df831C3454d008901ddBB108C301E378a](https://kovan.etherscan.io/address/0x02e3157Df831C3454d008901ddBB108C301E378a)
-   GovernorAlpha: [0xa8D27FEF019B93Cb99e1a51ef463919ec4BDAb0e](https://kovan.etherscan.io/address/0xa8D27FEF019B93Cb99e1a51ef463919ec4BDAb0e)

-   XVader (fake Vader): [0xD72237277a5A0EcDD87D1F16ae00b5dBe6C61C6a](https://kovan.etherscan.io/address/0xD72237277a5A0EcDD87D1F16ae00b5dBe6C61C6a)
