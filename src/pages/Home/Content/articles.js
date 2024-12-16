import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { API } from '../../../backend';

const articles = [
  {
    title: 'Article 1',
    content: 'This is the content of Article 1.',
    image: 'https://via.placeholder.com/300x200?text=Article+1',
  },
  {
    title: 'Article 2',
    content: 'This is the content of Article 2.',
    image: 'https://via.placeholder.com/300x200?text=Article+2',
  },
  {
    title: 'Article 3',
    content: 'This is the content of Article 3.',
    image: 'https://via.placeholder.com/300x200?text=Article+3',
  },
  {
    title: 'Article 4',
    content: 'This is the content of Article 4.',
    image: 'https://via.placeholder.com/300x200?text=Article+4',
  },
  {
    title: 'Article 1',
    content: 'This is the content of Article 1.',
    image: 'https://via.placeholder.com/300x200?text=Article+1',
  },
  {
    title: 'Article 2',
    content: 'This is the content of Article 2.',
    image: 'https://via.placeholder.com/300x200?text=Article+2',
  },
  {
    title: 'Article 3',
    content: 'This is the content of Article 3.',
    image: 'https://via.placeholder.com/300x200?text=Article+3',
  },
  {
    title: 'Article 4',
    content: 'This is the content of Article 4.',
    image: 'https://via.placeholder.com/300x200?text=Article+4',
  },
  {
    title: 'Article 1',
    content: 'This is the content of Article 1.',
    image: 'https://via.placeholder.com/300x200?text=Article+1',
  },
  {
    title: 'Article 2',
    content: 'This is the content of Article 2.',
    image: 'https://via.placeholder.com/300x200?text=Article+2',
  },
  {
    title: 'Article 3',
    content: 'This is the content of Article 3.',
    image: 'https://via.placeholder.com/300x200?text=Article+3',
  },
  {
    title: 'Article 4',
    content:
      'В настоящее время происходит поэтапный перевод потребителей газа в единую систему начислений жилищно-коммунальных услуг АИС "Расчет-ЖКУ" (ЕРИП) для начисления платы за услуги газоснабжения..При оплате за услугу газоснабжения необходимо перейти на новую ветку ЕРИП: В случае отсутствия информации по Вашему лицевому счету либо в случае ошибки в новой ветке ЕРИП просим Вас повторить попытку оплаты в старой ветке по следующему алгоритму: Система «Расчет» (ЕРИП) - Коммунальные платежи - Газоснабжение - Минск - Мингаз - Газоснабжение - № Вашего лицевого счета.',
    image: 'https://via.placeholder.com/300x200?text=Article+4',
  },
];
const GeneralContainer = styled.div`
  width: 100%;
  background-color: rgba(14, 78, 129, 0.1);
  margin: 147px auto 0;
`;
const ArticleContainer = styled.div`
  display: flex;
  width: 80%;
  height: 400px;
  margin: 0 auto;
  border: 1px solid #ddd;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Sidebar = styled.div`
  width: 30%;
  overflow-y: auto;
  border-right: 1px solid #ddd;
  background: #f9f9f9;
`;

const Title = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #e0e0e0;
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
  padding: 20px;
  border-radius: 10px;
  font-size: 18px;
  max-width: 80%;
  text-align: center;
`;

const Articles = () => {
  const [info, setInfo] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);
  useEffect(() => {
    axios
      .get(`${API}/articles`)
      .then((res) => {
        setInfo(res.data);
        setSelectedArticle(res.data[0])
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(info);
  return (
    <GeneralContainer>
      <ArticleContainer>
        <Sidebar>
          {articles.map((article, index) => (
            <Title key={index} onMouseEnter={() => setSelectedArticle(article)}>
              {article.title}
            </Title>
          ))}
        </Sidebar>
        <ContentArea>
          <ArticleImage src={selectedArticle?.image} alt={selectedArticle?.button} />
          <ArticleText>{selectedArticle?.content}</ArticleText>
        </ContentArea>
      </ArticleContainer>
    </GeneralContainer>
  );
};

export default Articles;
