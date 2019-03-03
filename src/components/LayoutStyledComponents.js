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

