import styled from 'styled-components';

const PillBlock = styled.span`
  background-color: var(--${({type}) => (type ? type : 'normal')});
  background-image: linear-gradient(
    150deg,
    var(--${({type}) => (type ? type : 'normal')}) 50%,
    #46464646 100%
  );
  color: white;
  font-size: 14px;
  margin: 0px 6px;
  padding: 5px 10px;
  border-radius: 12px;
`;

const Pill = ({ type, children }) => {
  return (
    <PillBlock type={type}>
      {children}
    </PillBlock>
  )
}

export default Pill;