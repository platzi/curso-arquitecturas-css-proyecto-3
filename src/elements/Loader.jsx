import styled from 'styled-components';

const LoaderElement = styled.span`
  font-size: 24px;
  font-weight: 600;
  margin-top: 100px;
`;

const Loader = () => {
  return (
    <LoaderElement>
      Loading...
    </LoaderElement>
  )
}

export default Loader;