import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

export const Background = styled.div`
  width: 100%;
  background-color: ${Color.gray5};
  display: flex;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 100px;
  word-break: keep-all;
`;

export const Box = styled.div`
  width: 50%;
  min-width: 800px;
  height: 1000px;
  background-color: ${Color.white};
  padding: 0 40px;
`;

export const ReceivePeople = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${Color.black};
`;

export const Essential = styled.div`
  font-size: 14px;
  color: ${Color.black};
`;

export const People = styled.div`
  font-size: 24px;
  font-weight: 800;
  color: ${Color.black};
  margin: 0 3% 0 15%;
`;

export const Bar = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray5};
`;

export const EssentialFlex = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const PeopleFlex = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 4%;
  margin-top: 10%;
`;

export const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  gap: 10px;
  margin-left: 10%;

  font-size: 20px;
`;

export const CheckBox = styled.input`
  appearance: none;
  width: 25px;
  height: 25px;
  border: 1px solid ${Color.black};
  border-radius: 99px;

  &:checked {
    background-color: ${Color.white};
    background-image: url("/assets/img/CircleCheck.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100% 100%;
    border: 0;
  }
`;

export const TitleInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 10px 10px;
  outline: none;
  border: 1px solid ${Color.gray25};
  border-radius: 5px;
`;