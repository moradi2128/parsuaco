import styled from "styled-components";
export const Form = styled.form`
  margin-top: 4rem;
  button {
    outline: none;
    border: none;
    position: relative;
    bottom: unset;
    right: unset;
  }
  textarea {
    height: 200px;
    resize: none;
    padding: 25px 30px;
    -webkit-appearance: none;
    border: 1px solid ${(props) => props.theme.colors.colorMainSecLight};
    &:focus {
      border: 1px solid ${(props) => props.theme.colors.colorPrimary};
    }
  }
  @media screen and (min-width: 1024px) {
    div {
      display: flex;
      gap: 1rem;
    }
  }
`;
export const FormItem = styled.input`
  display: block;
  outline: none;
  margin-bottom: 1rem;

  border: 1px solid ${(props) => props.theme.colors.colorMainSecLight};
  background: ${(props) => props.theme.colors.colorText};
  width: 100%;
  padding: 15px 20px;
  color: #666;
  font-size: 12px;
  transition: all 0.3s ease;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.colorPrimary};
  }
`;
