import React, { useEffect, useState } from 'react';
import { useFetchDocumentsQuery } from '../../../redux/services/documentsEDI';
import Loader from '../../../components/Loader';

export default function EDI() {
  const { data: documents, isLoading } = useFetchDocumentsQuery();
  const [groupedArray, setGroupedArray] = useState([]);

  // Функция для форматирования даты в MM.YYYY
  const formatDate = (dateString) => {
    const [year, month] = dateString.split('-');
    return `${month}.${year}`;
  };

  // Группировка по дате
  useEffect(() => {
    if (documents) {
      const array = Object.entries(
        documents?.reduce((acc, item) => {
          const formattedDate = formatDate(item.date);
          if (!acc[formattedDate]) {
            acc[formattedDate] = { date: formattedDate, info: [] };
          }
          acc[formattedDate].info.push(item);
          return acc;
        }, {})
      ).map(([date, { info }]) => ({ date, info }));
      setGroupedArray(array);
    }
  }, [documents]);
  console.log(groupedArray);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {groupedArray?.map((el) => (
            <div style={{ borderRadius: '10px', border: '1px solid #1b3a91', margin: '1rem 0' }}>
              <p style={{ color: '#575757', marginLeft: '1rem' }}>{el.date.slice()}</p>
              <ol>
                {el.info.map((file) => (
                  <li style={{ color: '#0d4475', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                    <a
                      style={{ color: '#0d4475' }}
                      rel="noopener noreferrer"
                      target={'_blank'}
                      href={`https://mingas.by/${file.file}`}
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </React.Fragment>
      )}
    </div>
  );
}
