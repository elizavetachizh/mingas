import styled from 'styled-components';

export const AdvantageDiv = styled.div`
  max-width: 1440px;
  margin: 6% auto;
  display: flex;
  flex-direction: column;
`;

export const AdvantageTitle = styled.h3`
  font-family: 'Play', sans-serif;
  font-style: normal;
  font-size: 16px;
  color: #314d5c;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
  text-align: center;
`;

export const AdvantageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const Realize = AdvantageDiv;

export const RealizeTitle = AdvantageTitle;

export const RealizeRow = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 25%);
  grid-auto-rows: 300px 300px;
  grid-gap: 0.5em;
`;

export const Brands = styled.div``;
export const BrandsTitle = AdvantageTitle;

export const BrandsPagination = styled.div`
  margin: 4% auto;
  max-width: 1440px;

  img {
    margin: 10px;
  }
`;
