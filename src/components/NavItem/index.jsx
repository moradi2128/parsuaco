import styled from "styled-components";
export const Li = styled.li`
  list-style: none;
  margin-right: 40px;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 10px;
  letter-spacing: 4px;
  a {
    display: block;
    padding: 1.5rem 0;
  }
  a::first-letter {
    color: ${(props) => props.theme.colors.colorPrimary};
  }
`;