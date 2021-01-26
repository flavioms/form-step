import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;

export const Label = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  margin-bottom: 0.5rem;
`;

export const InputWrapper = styled.input`
  width: 100%;
  background: #ccc;
  border: none;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: normal;
  color: #000;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: #333;
  }
  :-ms-input-placeholder {
    color: #333;
  }
  padding: 2rem 3rem;
  margin-right: 2rem;

  &:focus {
    border: 1px solid #666;
  }
`;
