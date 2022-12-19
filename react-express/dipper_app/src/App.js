import React, { useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import Web3 from "web3";
import rootVerify from "./abis/rootVerify.json";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [dipperName, setDipperName] = useState("what is your name?");
  const [routeName, setRouteName] = useState("which Route do you want?");
  const [route, setRoute] = useState([]);
  const [message, setMessage] = useState("Do you want to verify?");

  useEffect(() => {
    window.ethereum.on("accountsChanged", (accounts) => {
      console.log(accounts);
    });

    window.ethereum.on("chainChanged", async (chainId) => {
      if (window.ethereum.networkVersion !== 5) {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x5" }],
        });
      }
    });
  }, []);

  const metamaskConnection = useCallback(async () => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
      try {
        if (window.ethereum.networkVersion !== 5) {
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x5" }],
          });
        }

        await window.ethereum.request({
          method: "eth_requestAccounts",
        });
      } catch (error) {
        console.error(`Error:${error}`);
      }
    } else if (window.web3) {
      const web3Instance = new Web3(window.web3.currentProvider);
      setWeb3(web3Instance); // 예전 legacy version 사용하는 경우
    } else {
      console.log("MetaMask should be installed!");
    }
  }, []);

  // 입력값으로 배열 가능????? => 가
  const setRoot = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const dipperAddress =
      rootVerify.networks[networkId] && rootVerify.networks[networkId].address;
    let rootContract = new web3.eth.Contract(rootVerify.abi, dipperAddress);
    const account = window.ethereum.selectedAddress;
    await rootContract.methods
      .setRoot("BTS", [1, 2, 3, 4, 5])
      .send({ from: account });
  }, [web3]);

  const getRoot = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const dipperAddress =
      rootVerify.networks[networkId] && rootVerify.networks[networkId].address;
    let rootContract = new web3.eth.Contract(rootVerify.abi, dipperAddress);
    let rootName = await rootContract.methods.getRootName("BTS").call();
    let rootHashs = await rootContract.methods.getRootHashs("BTS").call();
    setRouteName(rootName);
    setRoute(rootHashs);
  }, [web3]);

  const setDipper = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const dipperAddress =
      rootVerify.networks[networkId] && rootVerify.networks[networkId].address;
    let rootContract = new web3.eth.Contract(rootVerify.abi, dipperAddress);
    const account = window.ethereum.selectedAddress;
    await rootContract.methods.setDipper("sejun").send({ from: account });
  }, [web3]);

  const getDipper = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const dipperAddress =
      rootVerify.networks[networkId] && rootVerify.networks[networkId].address;
    let rootContract = new web3.eth.Contract(rootVerify.abi, dipperAddress);
    const account = window.ethereum.selectedAddress;
    let name = await rootContract.methods.getDipper(account).call();
    setDipperName(name);
  }, [web3]);

  const currentLocation = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const simpleAddress =
      rootVerify.networks[networkId] && rootVerify.networks[networkId].address;
    let rootContract = new web3.eth.Contract(rootVerify.abi, simpleAddress);
    const account = window.ethereum.selectedAddress;
    await rootContract.methods.currentLocation(1).send({ from: account });
    let currentLocation = await rootContract.methods.currentLocation(1).call();
    setMessage(`currentLocation: ${currentLocation}`);
  }, [web3]);

  const verifyLocation = useCallback(async () => {
    const networkId = await web3.eth.net.getId();
    const simpleAddress =
      rootVerify.networks[networkId] && rootVerify.networks[networkId].address;
    let rootContract = new web3.eth.Contract(rootVerify.abi, simpleAddress);
    const account = window.ethereum.selectedAddress;
    let currentLocation = await rootContract.methods
      .currentLocation(5)
      .send({ from: account });
    // let info = await rootContract.getPastEvents("FromWho", {
    //   filter: { from: "0x73F8D912470B40170B8A9Ec624e59Ab7f66F1d71" },
    //   fromBlock: 0,
    //   toBlock: "latest",
    // });
    let isComplete = await rootContract.methods.verifyLocation("BTS", 5).call();
    isComplete
      ? setMessage("Verify Complete")
      : setMessage(`Current Location is ${currentLocation}`);
  }, [web3]);

  return (
    <>
      <Wrapper>
        <Title> Dipper </Title>
        <NeonText> {dipperName} </NeonText>
        <ButtonStyle>
          <button onClick={metamaskConnection}> Connect </button>
          <button onClick={setDipper}> setName </button>
          <button onClick={getDipper}> getName </button>
        </ButtonStyle>
      </Wrapper>
      <Wrapper>
        <Title> Root </Title>
        <NeonText> {routeName} </NeonText>
        <NeonText> {route} </NeonText>
        <ButtonStyle>
          <button onClick={setRoot}> RootMaking </button>
          <button onClick={getRoot}> RootFollowing </button>
        </ButtonStyle>
      </Wrapper>
      <Wrapper>
        <Title> verifyLocation </Title>
        <NeonText> {message} </NeonText>
        <ButtonStyle>
          <button onClick={currentLocation}> currentLocation </button>
          <button onClick={verifyLocation}> verifyLocation </button>
        </ButtonStyle>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  padding: 4em;
  background: black;
`;

const Title = styled.div`
  font-size: 1.2rem;
  text-align: center;
  color: pink;
`;

const NeonText = styled.div`
  font-size: 1.5rem;
  text-align: center;
  color: #fff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #0fa,
    0 0 82px #0fa, 0 0 92px #0fa, 0 0 102px #0fa, 0 0 151px #0fa;
`;

const ButtonStyle = styled.div`
  text-align: center;
`;

export default App;
