import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import { SocialIcon } from "react-social-icons";

import Popper from "./components/Popper";
import { FileText } from "react-feather";

const truncate = (input, len) =>
  input.length > len ? `${input.substring(0, len)}...` : input;

export const StyledButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 50px;
  font-weight: 300;
  font-size: 16px;
  border: none;
  color: var(--accent-text);
  background-color: #2875E2;
  width: 150px;
  cursor: pointer;
  width: 100%;

  :hover{
  
  color: var(--secondary-text);
  background-color: #418FF5;
  transition: all 200ms cubic-bezier(.175, .885, .32, 1.275)
  -webkit-transition: all 200ms cubic-bezier(.175, .885, .32, 1.275);
  }
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledMintButton = styled.button`
  margin-top: 10px;
  padding: 10px;
  border-radius: 50px;
  font-weight: 300;
  font-size: 16px;
  border: none;
  color: var(--accent-text);
  background-color: #2875E2;
  cursor: pointer;
  width: 100%;

  :hover{
  background-color: #418FF5;
  color: var(--secondary-text);
  transition: all 200ms cubic-bezier(.175, .885, .32, 1.275)
  -webkit-transition: all 200ms cubic-bezier(.175, .885, .32, 1.275);
  }
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const StyledRoundButton = styled.button`
  padding: 10px;
  border-radius: 100%;
  width: 25px;
  height: 25px;
  border: 1px solid var(--accent-text);
  background-color: transparent;

  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  color: var(--accent-text);
  text-align: center;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  :hover{
    background-color: var(--secondary);
    color: var(--secondary-text);
    border: none;
    }

  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export const ResponsiveWrapper = styled.div`
width: 100%;
margin: 30px 0px 0px 0px;
padding: 0px;

display: flex;
flex-direction: column;
justify-content: flex-start;
align-contents: space-between;
border-radius: 20px;
border: 1.5px solid white;
max-width: 800px;

@media (min-width: 768px) {
  flex-direction: row;
  
}
`;

export const StyledLogo = styled.img`
  width: 150px;
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: -20px;

  @media (min-width: 768px) {
    width: 250px;
    margin-top: 30px;
    margin-bottom: 0px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

export const StyledImg = styled.img`
  
  display: none;
  width: 100%;
  transition: width 0.5s;
  border-radius: 0px 0px 20px 20px;
  
  @media (min-width: 768px) {
  display: flex;
  border-radius: 0px 20px 20px 0px;
  }
`;

export const StyledImgM = styled.img`
  width: 100%;
  transition: width 0.5s;
  border-radius: 0px 0px 20px 20px;

  @media (min-width: 768px) {
  display: none;
  border-radius: 20px 0px 0px 20px;
  }
`;

export const Psh = styled.img`
  display: none;
  transition: width 0.5s;
  width: 48px;
  height: 48px;
  filter: invert(1); 

  position: fixed;
  margin: 20px 20px;
  bottom:0px;
  right:0px;

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const StyledLink = styled.a`
  color: var(--secondary);
  text-decoration: none;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`How many $STEAK do you want?`);
  const [mintAmount, setMintAmount] = useState(1);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = () => {
    let cost = CONFIG.WEI_COST;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);
    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback(
          "Sorry, something went wrong please refresh and try again."
        );
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `Congrats 🥳 the ${CONFIG.NFT_NAME} 🥩 is yours! Please visit OpenSea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 2) {
      newMintAmount = 2;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  return (
    <s.Screen>
      <s.Container
        flex={1}
        ai={"center"}
        style={{ padding: 20, backgroundColor: "var(--primary)" }}
        image={CONFIG.SHOW_BACKGROUND ? "/config/images/bg.png" : null}
      >
        <s.Container flex={0} fd={"row"} ai={"flex-start"} jc={"center"}>
          <s.MenuWrapper>
            <s.MenuSelected>Mint</s.MenuSelected>

            <a
              className="nav-link"
              target="_blank"
              href="https://passch.medium.com/introducing-sharedstake-nft-collection-ce74cb82ca60"
            >
              <s.MenuLink>Story</s.MenuLink>{" "}
            </a>

            <a
              className="nav-link"
              target="_blank"
              href="https://passch.medium.com/how-to-mint-sharedsteak-nft-2434395093ae"
            >
              <s.MenuLink>How to</s.MenuLink>{" "}
            </a>

            <a
              className="nav-link"
              target="_blank"
              href={CONFIG.MARKETPLACE_LINK}
            >
              <s.MenuLink>OpenSea</s.MenuLink>{" "}
            </a>
          </s.MenuWrapper>
        </s.Container>

        <StyledLogo alt={"logo"} src={"/config/images/logo.svg"} />
        <s.SpacerSmall />

        <ResponsiveWrapper>
          <s.Container
            flex={1}
            fd={"column"}
            ai={"space-between"}
            style={{ backgroundColor: "" }}
          >
            <s.Container
              flex={0}
              fd={"row"}
              jc={"space-between"}
              ai={"flext-start"}
            >
              <s.TextTitle>Mint your $STEAK</s.TextTitle>
              <a className="nav-link" target="_blank" href={CONFIG.SCAN_LINK}>
                <FileText type="button" className={"contract"}></FileText>
              </a>
            </s.Container>
            <s.Trenner />

            {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
              <>
                <s.Container flex={2} fd={"column"} jc={"center"} ai={"center"}>
                  <s.SpacerMedium />
                  <s.TextTitle
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    🥩 Round 2 are sold out 🥩
                  </s.TextTitle>
                  <s.TextTitle
                    style={{ textAlign: "center", color: "var(--accent-text)" }}
                  >
                    Stay tuned for the next round. Follow{" "}
                    <a
                      className="nav-link"
                      target="_blank"
                      href="https://twitter.com/_passch"
                    >
                      <s.MenuLink>@_passch</s.MenuLink>
                    </a>
                    to be informed.
                  </s.TextTitle>
                  <s.SpacerMedium />
                </s.Container>
              </>
            ) : (
              <>
                <s.Container
                  flex={2}
                  fd={"column"}
                  jc={"center"}
                  ai={"center"}
                  style={{ backgroundColor: "" }}
                >
                  {blockchain.account === "" ||
                  blockchain.smartContract === null ? (
                    <s.Container
                      ai={"center"}
                      jc={"center"}
                      style={{ padding: "0px 20px 30px 20px" }}
                    >
                      <s.TextRound1
                        style={{
                          margin: "0px 0px 0px 0px",
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        🥩 Round 2 is live 🥩
                      </s.TextRound1>

                      <s.TextRound1b
                        style={{
                          margin: "0px 0px 0px 0px",
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        Please connect to MetaMask
                      </s.TextRound1b>

                      {blockchain.errorMsg !== "" ? (
                        <>
                          <StyledButton
                            style={{
                              backgroundColor: "#FF4343",
                              border: "1px solid transparent",
                            }}
                            onClick={(e) => {
                              e.preventDefault();
                              dispatch(connect());
                              getData();
                            }}
                          >
                            Wrong Network
                          </StyledButton>
                        </>
                      ) : (
                        <StyledButton
                          onClick={(e) => {
                            e.preventDefault();
                            dispatch(connect());
                            getData();
                          }}
                        >
                          Connect Wallet
                        </StyledButton>
                      )}

                      <s.TextErrorMobile
                        style={{
                          textAlign: "center",
                          color: "var(--accent-text)",
                        }}
                      >
                        {blockchain.errorMsg}
                      </s.TextErrorMobile>
                    </s.Container>
                  ) : (
                    <>
                      <s.Container flex={2} fd={"column"}>
                        <s.TextInfo
                          style={{
                            position: "relative",
                            top: "10px",
                            left: "20px",
                            zIndex: "999",
                          }}
                        >
                          ROUND 2
                        </s.TextInfo>

                        <s.TextSupply
                          style={{
                            width: "100%",
                            textAlign: "center",
                          }}
                        >
                          {data.totalSupply} / {CONFIG.MAX_SUPPLY}
                        </s.TextSupply>
                      </s.Container>

                      <s.Trenner />

                      <s.Container
                        flex={2}
                        fd={"column"}
                        ai={"center"}
                        jc={"center"}
                      >
                        <s.TextDescription
                          style={{
                            width: "100%",
                            padding: "15px 20px 5px 20px",
                          }}
                        >
                          {feedback}
                        </s.TextDescription>

                        <s.Container
                          ai={"center"}
                          jc={"center"}
                          fd={"row"}
                          style={{ padding: "5px 0px 10px 0px" }}
                        >
                          <StyledRoundButton
                            style={{ lineHeight: 0.4 }}
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              decrementMintAmount();
                            }}
                          >
                            -
                          </StyledRoundButton>
                          <s.SpacerMedium />
                          <s.TextDescription
                            style={{
                              position: "relative",
                              top: "-8px",
                              textAlign: "center",
                              color: "var(--accent-text)",
                            }}
                          >
                            {mintAmount}
                          </s.TextDescription>
                          <s.SpacerMedium />
                          <StyledRoundButton
                            disabled={claimingNft ? 1 : 0}
                            onClick={(e) => {
                              e.preventDefault();
                              incrementMintAmount();
                            }}
                          >
                            +
                          </StyledRoundButton>
                        </s.Container>
                      </s.Container>

                      <s.Trenner />

                      <s.TextInfo
                        style={{
                          padding: "10px 0px 0px 20px",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        1 {CONFIG.SYMBOL} = {CONFIG.DISPLAY_COST}{" "}
                        {CONFIG.NETWORK.SYMBOL}
                      </s.TextInfo>

                      <s.Container
                        ai={"center"}
                        jc={"center"}
                        fd={"row"}
                        style={{ padding: "0px 20px 30px 20px" }}
                      >
                        <StyledMintButton
                          disabled={claimingNft ? 1 : 0}
                          onClick={(e) => {
                            e.preventDefault();
                            claimNFTs();
                            getData();
                          }}
                        >
                          {claimingNft ? "Busy" : "Mint"}
                        </StyledMintButton>
                      </s.Container>
                    </>
                  )}
                </s.Container>
              </>
            )}
          </s.Container>

          <s.Container flex={1} jc={"center"} ai={"center"}>
            <StyledImg alt={"example"} src={"/config/images/example.gif"} />
            <StyledImgM
              alt={"example"}
              src={"/config/images/example_mobile.gif"}
            />
          </s.Container>
        </ResponsiveWrapper>
        <s.TextErrorDesktop
          style={{
            textAlign: "center",
            color: "var(--accent-text)",
          }}
        >
          {blockchain.errorMsg}
        </s.TextErrorDesktop>
      </s.Container>

      <s.Container flex={0} fd={"row"} ai={"flex-start"} jc={"center"}>
        <s.MenuWrapperMobile>
          <s.MenuSelected>Mint</s.MenuSelected>

          <a
            className="nav-link"
            target="_blank"
            href="https://passch.medium.com/introducing-sharedstake-nft-collection-ce74cb82ca60"
          >
            <s.MenuLink>Story</s.MenuLink>{" "}
          </a>

          <a
            className="nav-link"
            target="_blank"
            href="https://passch.medium.com/how-to-mint-sharedsteak-nft-2434395093ae"
          >
            <s.MenuLink>How to</s.MenuLink>{" "}
          </a>

          <a
            className="nav-link"
            target="_blank"
            href={CONFIG.MARKETPLACE_LINK}
          >
            <s.MenuLink>OpenSea</s.MenuLink>{" "}
          </a>
        </s.MenuWrapperMobile>
      </s.Container>

      <s.SocialWrapper>
        <SocialIcon
          url="https://twitter.com/_passch"
          target="_blank"
          className="test"
          network="twitter"
          style={{ height: 30, width: 30 }}
        />
        <SocialIcon
          url="https://discord.com/invite/C9GhCv86My"
          target="_blank"
          className="test"
          network="discord"
          style={{ height: 30, width: 30 }}
        />
      </s.SocialWrapper>

      <a target="_blank" href="https://passch.com/">
        <Psh src={"/config/images/psh.gif"} />
      </a>
    </s.Screen>
  );
}

export default App;
