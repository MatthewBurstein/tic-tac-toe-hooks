import styled from 'styled-components';

export const HeadingContainer = styled.div`
  text-align: center;
`

export const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  margin: auto;
  max-width: 500px;
`
export const SquareContainer = styled.div`
  position: relative;
  overflow: hidden;
  border: 1px solid black;

  &:before {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

export const SquareContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
`

export const ControlsContainer = styled.div`
  margin: 20px auto;
  max-width 400px;
  text-align: center;
  border: 1px solid black;
  padding 20px;
`

export const PlayersDetailsContainer = styled.div`
  margin: 20px;
  max-width 400px;
  border-radius: 10px;
  border: 1px solid black;
  min-height: 100px;
  padding 20px;
  text-align: left;
`

export const SignInModalContainer = styled.div`
  display: ${p => p.open ? "block" : "none"};
  width: 400px;
  border: 1px solid black;
  padding: 20px;
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 20%;
  margin-left: -200px;
  background-color: white;
`