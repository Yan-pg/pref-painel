import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;

  margin-top: 63px;

  margin-bottom: 63px;
`;

export const Card = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  margin-top: 55px;
`;

export const ContentCard = styled.div`
  box-shadow: 5px 3.86768px 3.86768px rgba(134, 142, 150, 0.07);
  background: #ffffff;
  padding: 5%;
  border-radius: 4.35px;

  border: 1px solid #868e96;

  img {
    width: 100%;
  }

  .dropzone {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    padding: 20px;
    border: 1px dashed ${(props) => props.theme.colors.blackGray};
    background-color: ${(props) => props.theme.colors.white};
    height: 100%;

    h1 {
      font-size: 1rem;
    }
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 13px;
`;

export const Buttons = styled.div`
  margin-top: 13px;

  display: flex;
  flex-direction: column;
  gap: 13px;

  button {
    width: 100%;
    background: none;
    border: 1px solid ${(props) => props.theme.colors.lighGray};

    border-radius: 4px;
    height: 26px;
    position: relative;

    color: ${(props) => props.theme.colors.blackGray};
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    input {
      opacity: 0;

      width: 100%;
      height: 100%;

      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -50%;
      z-index: 100;

      cursor: pointer;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ModalOrderContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;

  width: 400px;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme.colors.backgroundPage};

  border-left: 1px solid ${(props) => props.theme.colors.lighGray};
`;

export const ModalOrderContent = styled.div`
  overflow-y: auto;
  height: auto;

  p {
    font-weight: bold;
    margin-top: 33px;
    margin-bottom: 13px;
    text-align: center;

    color: ${(props) => props.theme.colors.blackGreen};
  }

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;

  background: #105e63;

  padding: 10px;

  width: 100%;
  height: 55px;

  button {
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ContainerImgModal = styled.div``;

export const ContentImgModal = styled.div`
  width: 360px;
  height: 170px;
  padding: 10px;
  background: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  column-gap: 10px;

  margin-top: 10px;

  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  img {
    width: 90%;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const OrderButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;

  width: 90%;
  margin-top: 10px;

  button {
    background: none;
    border: none;

    &:hover {
      cursor: pointer;
    }
  }
`;
