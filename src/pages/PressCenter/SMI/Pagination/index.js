import { Button, ContainerPagination } from '../../../feedback/styles';
import { useCallback, useState } from 'react';

export default function Pagination({ page, setPage }) {
  const pageSize = 5;
  const [countOfAllOperations, setCountOfAllOperations] = useState(null);

  const handleNextPage = useCallback(() => {
    setCountOfAllOperations(countOfAllOperations + pageSize);
    setPage(page + 1);
  }, [countOfAllOperations, page, setPage]);

  const handlePrevPage = useCallback(() => {
    setCountOfAllOperations(countOfAllOperations - pageSize);
    setPage(page - 1);
  }, [countOfAllOperations, page, setPage]);

  return (
    <ContainerPagination>
      <Button className={'pagination'} onClick={() => handlePrevPage()}>
        Предыдущая
      </Button>
      <Button className={'pagination'} onClick={() => handleNextPage()}>
        Следущая
      </Button>
    </ContainerPagination>
  );
}
