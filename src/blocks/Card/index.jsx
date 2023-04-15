import styled from 'styled-components';

import Header from './Header';
import Figure from './Figure';
import Image from './Image';
import Title from './Title';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 300px;
  border-radius: 16px;
  margin: 8px;
  color: rgb(78, 78, 78);
  padding: 18px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  cursor: pointer;

	&:hover {
    scale: 1.04;
    transition: ease 0.2s;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

		img {
			animation: bounce 0.8s ease infinite;
		}

		@keyframes bounce {
			0%, 100% {
				transform: translateY(0%) scaleX(1) scaleY(1);
			}
			50% {
				transform: translateY(10%) scaleX(0.95) scaleY(1.03);
			}
		}
	}
`;

Card.Header = Header;
Card.Figure = Figure;
Card.Image = Image;
Card.Title = Title;

export default Card;