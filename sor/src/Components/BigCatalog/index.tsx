import React from 'react';
import {Dimensions} from 'react-native';
import Styled from 'styled-components/native';

const Container = Styled.TouchableOpacity``;
const CatalogImage = Styled.Image``;
const InfoContainer = Styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: flex-start;
`;
const LabelYear = Styled.Text`
  background-color: #E70915;
  color: #FFFFFF;
  padding: 4px 8px;
  margin-left: 4px;
  margin-bottom: 4px;
  font-weight: bold;
  border-radius: 4px;
`;
const SubInfoContainer = Styled.View`
`;
const Background = Styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #141414;
  opacity: 0.9;
`;
const LabelTitle = Styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFFFFF;
  padding: 8px 16px 4px 16px;
`;
const LabelGenres = Styled.Text`
  font-size: 12px;
  color: #FFFFFF;
  padding: 4px 16px 8px 16px;
`;

// interface Props {
//   id: number;
//   image: string;
//   year: number;
//   title: string;
//   genres: Array<string>;
//   onPress?: (id: number) => void;
// }

interface Props {

  kaptCode: string,
  complexNo: number,
  kaptName: string,
  kaptAddr: string,
  kaptAddr_doro: string,
  codeAptNm: string,
  kaptUsedate: string,
  useYear: string,
  kaptdaCnt: string,
  kaptDongCnt: string,
  bjdCode: string,
  pyoengNames_m: string,
  minSupplyArea_m: string,
  maxSupplyArea_m: string,
  highFloor: string,
  lowFloor: string,
  totPkngCnt: string,
  parkingperOne: string,
  codeHeatNm: string,
  large_cover_image :string,
  onPress?: (complexNo: number) => void;
  // id: number;
  // title: string;
  // title_english: string;
  // title_long: string;
  // summary: string;
  // synopsis: string;
  // background_image: string;
  // background_image_original: string;
  // date_uploaded: string;
  // date_uploaded_unix: number;
  // description_full: string;
  // genres: Array<string>;
  // imdb_code: string;
  // language: string;
  // large_cover_image: string;
  // medium_cover_image: string;
  // mpa_rating: string;
  // rating: number;
  // runtime: number;
  // slug: string;
  // small_cover_image: string;
  // state: string;
  // url: string;
  // year: number;
  // yt_trailer_code: string;
}


const BigCatalog = ({complexNo, kaptName, kaptAddr, kaptAddr_doro, codeAptNm, onPress}: Props) => {
  return (
    <Container
      activeOpacity={1}
      onPress={() => {
        if (onPress && typeof onPress === 'function') {
          onPress(complexNo);
        }
      }}>
      {/* <CatalogImage
        source={{uri: image}}
        style={{width: Dimensions.get('window').width, height: 300}}
      /> */}
      <InfoContainer>
        <LabelYear>{kaptName}년</LabelYear>
        <SubInfoContainer>
          <Background />
          <LabelTitle>{kaptAddr}</LabelTitle>
          <LabelGenres>{codeAptNm}</LabelGenres>
        </SubInfoContainer>
      </InfoContainer>
    </Container>
  );
};

export default BigCatalog;
