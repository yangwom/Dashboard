import styled from 'styled-components';


export const Container = styled.div`
  grid-area: AS;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-left: 20px;
  border-right: 1px solid ${props => props.theme.colors.gray};
`;

export const Header = styled.header`
height: 70px;
display: flex;
align-items: center;
`;
export const LogImg = styled.img`
width: 40px;
height: 40px;
`;
export const Title = styled.h3`
color: ${ props => props.theme.colors.white};
margin-left: 10px;

`;
export const MenuConatainer = styled.nav`
margin-top: 50px;
display: flex;
flex-direction: column;
`;
export const MenuItemLink = styled.a`
color: ${props => props.theme.colors.info};
display: flex;
align-items: center;
text-decoration: none;
margin: 7px 0;

transition: opacity .3s;
&:hover {
    opacity: .7;
}

> svg {
    font-size: 18px;
    margin-right: 5px;
}
`;
