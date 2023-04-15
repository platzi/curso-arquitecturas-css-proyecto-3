import styled from 'styled-components';

const FigureBlock = styled.figure`
  background-color: var(--${({type}) => (type ? type : 'normal')});
  background-image: linear-gradient(
    150deg,
    var(--${({type}) => (type ? type : 'normal')}) 50%,
    #46464646 100%
  );
  width: 100%;
  height: 150px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px inset;
  border-radius: 5px;
  display: grid;
  place-items: center;
`;

const Figure = ({ type, children }) => {
  return (
    <FigureBlock type={type}>
      {children}
    </FigureBlock>
  )
}

export default Figure;