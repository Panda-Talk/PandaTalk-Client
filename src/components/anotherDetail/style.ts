import { styled } from "styled-components";
import { Color } from "../../styles/theme/color";

export const Header = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${Color.main};
  display: flex;
  justify-content: center;
`;

export const LogoFlex = styled.div`
  width: 60%;
  display: flex;
`;

export const LogoImg = styled.img`
  width: 100px;
`;

export const ContentFlex = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-top: 6%;
`;

export const Content = styled.div`
  width: 60%;
  height: 400px;
  border: 2px solid ${Color.gray25};
  border-bottom: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const TitleFlex = styled.div`
  display: flex;
  gap: 10px;
`;

export const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  margin-top: 10px;
`;

export const SmallTitle = styled.div`
  font-size: 18px;
  color: ${Color.gray25};
  margin: 20px 0;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${Color.gray25};
`;

export const FileFlex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const FileList = styled.div`
  width: 60%;
  height: 70px;
  background-color: ${Color.gray5};
  border: 2px solid ${Color.gray25};
  border-top: 0;
  padding: 10px 20px;
  display: flex;
  align-items: center;
`;

export const Files = styled.div`
  background-color: ${Color.white};
  padding: 5px 20px;
`;
