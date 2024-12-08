import styled from "styled-components";

// Used for wrapping a page component
export const Screen = styled.div`
  background-color: var(--primary);
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  padding: 0px 20px 0px 20px;

  @media (min-width: 768px) {
    padding:0px;
  }
`;

// Used for providing trenner between components
export const Trenner = styled.div`
  width: 100%;
  // top right bottom left
  margin: 0px 0px 0px 0px;
  border-bottom: 1px solid #AAAAAA;
`;

// Used for providing space between components
export const SpacerXSmall = styled.div`
  height: 8px;
  width: 8px;
`;

// Used for providing space between components
export const SpacerSmall = styled.div`
  height: 16px;
  width: 16px;
`;

// Used for providing space between components
export const SpacerMedium = styled.div`
  height: 24px;
  width: 24px;
`;

// Used for providing space between components
export const SpacerLarge = styled.div`
  height: 32px;
  width: 32px;
`;

// Used for providing a wrapper around a component
export const Container = styled.div`
  display: flex;
  flex: ${({ flex }) => (flex ? flex : 0)};
  flex-direction: ${({ fd }) => (fd ? fd : "column")};
  justify-content: ${({ jc }) => (jc ? jc : "flex-start")};
  align-items: ${({ ai }) => (ai ? ai : "flex-start")};
  background-color: ${({ test }) => (test ? "pink" : "none")};
  width: 100%;
  background-image: ${({ image }) => (image ? `url(${image})` : "none")};
  background-size: cover;
  background-position: center;
`;

export const TextTitle = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  padding: 10px 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
    padding: 13px 0px 10px 20px;
  }
`;

export const TextSupply = styled.p`
  padding: 0px 0px 0px 0px;
  font-size: 55px;
  font-weight: 300;
  line-height: 1.5;
  color: white;

`;

export const TextInfo = styled.p`
  color: #AAAAAA;
  font-size: 12px;
  font-weight: 300;
  line-height: 1.5;
`;

export const TextDescription = styled.p`
  color: #fff;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  padding: 15px 0px 0px 0px;
`;

export const TextErrorDesktop = styled.p`
color: #fff;
font-size: 14px;
font-weight: 300;
line-height: 1.5;
margin: 20px 0px;
display: none;
@media (min-width: 768px) {
  display: flex;
}
`;
export const TextErrorMobile = styled.p`

color: #fff;
width: 100%;
font-size: 12px;
font-weight: 300;
line-height: 1.5;
margin: 10px 0px -10px 0px;
@media (min-width: 768px) {
display: none;
}
`;

export const StyledClickable = styled.div`
  :active {
    opacity: 0.6;
  }
`;

export const MenuWrapper = styled.div`
display: none;
font-size: 15px;
letter-spacing: 0.1px;
margin: 15px 15px 15px 10px;
background-color: #2D2D2E;
border-radius: 15px;
border: 1px solid #4A505A;
padding: 12px 8px 10px 4px;
height: 40px; 

@media (min-width: 500px) {
display: inline;
}


`;

export const MenuSelected = styled.span`

color: #fff;
background-color: #FE4444;
border-radius: 10px;
padding: 6px 10px;
margin: 0px 2px;

@media (min-width: 500px) {
display: inline;

`;

export const MenuLink = styled.span`
cursor: pointer;
//background-color: #2C2F36;
border-radius: 12px;
padding: 6px 4px;
margin: 0px 0px;
@media (min-width: 768px) {
display: inline;
padding: 6px 10px;
}

:hover {
  color: white;
}
`;

export const MenuWrapperMobile = styled.div`
display: inline;
position: fixed;
z-index: 999;
bottom: 10px;
font-size: 12px;
letter-spacing: 0px;
margin: 15px 15px 15px 10px;
background-color: #2D2D2EBF;
border-radius: 15px;
border: 1px solid #4A505A;
padding: 12px 8px 10px 4px;
height: 38px; 

@media (min-width: 500px) {
display: none;
}
`;

export const SocialWrapper = styled.div`
display: none;

flex-direction: row;
align-items: flex-start;
justify-content: space-between;
width: 65px;
position: fixed;
left: 20px;
bottom: 20px;

@media (min-width: 768px) {
  display: flex;
  }
`;

export const TextRound1 = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  padding: 20px 20px 0px 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
    padding: 0px 20px 0px 20px;
  }
`;

export const TextRound1b = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.5;
  text-align: center;
  padding: 0px 20px 10px 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    text-align: left;
    padding: 0px 20px 10px 20px;
  }
`;
