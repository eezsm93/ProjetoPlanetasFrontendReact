import styled from "styled-components";

export const Background = styled.section`
  background-color: #f7f7f7;
  width: 100%;
  height: 100%;
`;

export const Container = styled.div`
  height: 100vh;
  max-width: 90rem;
  margin: 0 auto;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 2rem;
`;

export const ContainerLoginLeft = styled.div`
  height: 100%;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;

  img {
    width: 100%;
    max-height: 100vh;
  }

  @media (max-width: 660px) {
    display: none;
  }
`;
export const ContainerLoginRight = styled.div`
  height: 100vh;
  width: 55%;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  @media (max-width: 660px) {
    width: 100vw;
  }
  form {
    display: flex;
    width: 55%;
    flex-flow: column nowrap;
    align-items: center;
    gap: 1.2rem;

    @media (max-width: 1020px) {
      width: 60%;
    }
    @media (max-width: 580px) {
      width: 332px;
    }
  }

  img {
    position: absolute;
    bottom: 2rem;
    right: 2rem;
  }

  .label {
    align-self: start;
    color: #666666;
  }
`;

export const TitleImage = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;

  h1 {
    color: #3e4756;
    font-size: 2rem;
    font-weight: 200;
  }

  .timerIcon {
    color: #19dbd1;
    padding-top: 1rem;
    position: relative;
    top: 4px;
  }
`;
