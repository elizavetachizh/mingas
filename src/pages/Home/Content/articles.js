import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const GeneralContainer = styled.div`
  width: 100%;
  background-color: rgba(14, 78, 129, 0.1);
  margin: 147px auto 0;
  @media (max-width: 900px) {
    margin: 79px auto 0;
  }
`;
const ArticleContainer = styled.div`
  display: flex;
  width: 80%;
  height: 450px;
  margin: 0 auto;
  //border: 1px solid #ddd;
  //box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  @media (max-width: 1256px) {
    width: 90%;
  }
  @media (max-width: 1130px) {
    width: 100%;
  }
`;

const Sidebar = styled.div`
  width: 30%;
  overflow-y: auto;
  //border-right: 1px solid #ddd;
  background-color: transparent;
  //background-image: linear-gradient(
  //  -55deg,
  //  rgb(1, 95, 156) 0%,
  //  rgb(16, 69, 141) 0%,
  //  rgb(15, 89, 141) 19%,
  //  rgb(15, 78, 140) 60%,
  //  rgb(14, 78, 129) 79%,
  //  rgb(13, 68, 117) 100%
  //);
  &::-webkit-scrollbar {
    width: 8px;
    border-radius: 5px;
  }

  &::-webkit-scrollbar-track {
    background-color: #ccc;
    border-radius: 5px;
    margin: 1px 0;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: #666;
  }
`;

const Title = styled.div`
  padding: 15px 25px;
  cursor: pointer;
  border-bottom: 1px solid white;
  //color: white;
  color: #0d4475;
  a {
    //color: white;
    text-decoration: none;
    color: #0d4475;
  }
  font-weight: bold;
  &:hover {
    background-color: rgba(37, 114, 193, 0.8);
    color: white;
    border-radius: 5px;
    a {
      color: white;
    }
  }
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background: #fff;
`;

const ArticleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const ArticleText = styled.div`
  position: relative;
  z-index: 2;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  background: rgba(0, 0, 0, 0.5);
  padding: 10px;
  border-radius: 10px;
  font-size: 14px;
  max-width: 80%;
  text-align: center;
  overflow-y: auto;
  margin: 1rem auto;
  a,
  p {
    color: white;
  }
`;

const Articles = ({ info }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  useEffect(() => {
    setSelectedArticle(info[0]);
  }, [info]);

  return (
    <GeneralContainer>
      <ArticleContainer>
        <Sidebar>
          {info.map((article, index) => (
            <Title key={index} onMouseOver={() => setSelectedArticle(article)}>
              <a href={article?.link ? article?.link : '#'} target={'_blank'} rel="noreferrer">
                {article.button}
              </a>
            </Title>
          ))}
        </Sidebar>
        <ContentArea>
          <a
            style={{ textDecoration: 'none' }}
            target={'_blank'}
            rel="noreferrer"
            href={selectedArticle?.link ? selectedArticle?.link : '#'}
          >
            <ArticleImage src={selectedArticle?.image} alt={selectedArticle?.button} />
            {selectedArticle?.content && (
              <ArticleText dangerouslySetInnerHTML={{ __html: selectedArticle?.content }} />
            )}
          </a>
        </ContentArea>
      </ArticleContainer>
    </GeneralContainer>
  );
};

export default Articles;
