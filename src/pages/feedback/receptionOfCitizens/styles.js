import styled from 'styled-components';

export const Table = styled.table`
  width: 100%;
  margin: 0 auto;
  text-align: left;
  font-size: 18px;
  border-collapse: collapse;
  td,
  th {
    border: 1px solid grey;
  }
  @media (max-width: 900px) {
    font-size: 14px;
    width: 80%;
  }
  @media (max-width: 550px) {
    width: 100%;
    margin: 0 auto;
  }
  &.firstColumn {
    width: 40%;
  }
`;

export const Thead = styled.thead`
  tr {
    color: white;
    background-color: #0d4475;
    text-align: center;
  }
`;

export const Tbody = styled.tbody`
  color: #314d5c;
  tr {
    height: 200px;
    @media (max-width: 1049px) {
      height: 250px;
    }
    @media (max-width: 1004px) {
      height: 270px;
    }
    @media (max-width: 950px) {
      height: 300px;
    }
    td {
      height: 200px;
      @media (max-width: 1390px) {
        height: 225px;
      }
    }
  }
  &.firstColumn {
    tr {
      td {
        height: 200px;
        //@media (max-width: 1390px) {
        //  height: 225px;
        //}
      }
    }
  }
`;

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: row;
  align-items: inherit;
`;
