import { Button, ContainerPagination } from '../../../feedback/styles';
import { useCallback, useState } from 'react';

export default function Pagination({ countOfOperations, page, setPage }) {
  const pageSize = 5;
  const [countOfAllOperations, setCountOfAllOperations] = useState(null);
  const arrayOfPages = countOfOperations && [...Array(Math.floor(countOfOperations / pageSize))];

  const handleNextPage = useCallback(() => {
    setCountOfAllOperations(countOfAllOperations + pageSize);
    setPage(page + 1);
  }, [countOfAllOperations, page, setPage]);

  const handlePrevPage = useCallback(() => {
    setCountOfAllOperations(countOfAllOperations - pageSize);
    setPage(page - 1);
  }, [countOfAllOperations, page, setPage]);

  const paginate = useCallback(
    (isPage) => {
      if (isPage + 1 > page) {
        setCountOfAllOperations(countOfAllOperations + pageSize);
      }
      if (isPage + 1 < page) {
        setCountOfAllOperations(countOfAllOperations - pageSize);
      }
      if (isPage + 1 === page) {
        setCountOfAllOperations(countOfAllOperations);
      }
      setPage(isPage + 1);
    },
    [countOfAllOperations, page, setPage]
  );

  return (
    <ContainerPagination>
      <Button className={'pagination'} onClick={() => handlePrevPage()}>
        Предыдущая
      </Button>
      {!!arrayOfPages?.length && (
        <ul>
          {arrayOfPages?.map((element, index) => (
            <li className={index + 1 === page && 'uk-active'} key={index}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a data-testid={'link'} onClick={() => paginate(index)} href="#">
                {index + 1}
              </a>
            </li>
          ))}
        </ul>
      )}
      <Button className={'pagination'} onClick={() => handleNextPage()}>
        Следущая
      </Button>
    </ContainerPagination>
  );
}
