const A = artifacts.require("rootVerify");

module.exports = async function (deployer) {
  await deployer.deploy(A);
};
