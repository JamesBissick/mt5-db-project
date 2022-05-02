import { Pagination, Row } from 'react-bootstrap';
import React from 'react';


export default function CustomPagination({ page, length, pageItemNumber, handlePageChange }) {

  return (
    <div style={ { width: '100%', textAlign: 'center', display: 'flex' } }>
      <Pagination className='mx-auto' style={ { marginBottom: '75px' } }>
        { page > 0 && <Pagination.First onClick={ () => handlePageChange(0) } /> }
        { page > 0 && <Pagination.Prev onClick={ () => handlePageChange(page - pageItemNumber) } /> }
        { page > 0 && <Pagination.Ellipsis /> }

        { Array.from({ length: Math.ceil(length / pageItemNumber) }).map((_, index) => {
          if ((index * pageItemNumber) >= page - 80 && (index * pageItemNumber) <= page + 80) {
            return (
              <Pagination.Item
                key={ index }
                onClick={ () => handlePageChange(index * pageItemNumber) }
                active={ index * pageItemNumber === page }
                disabled={ index * pageItemNumber === page }
              >
                { index + 1 }
              </Pagination.Item>
            );
          }
        }) }

        { page < length - pageItemNumber && <Pagination.Ellipsis /> }
        { page < length - pageItemNumber &&
          <Pagination.Next onClick={ () => handlePageChange(page + pageItemNumber) } /> }
        { page < length - pageItemNumber &&
          <Pagination.Last onClick={ () => handlePageChange(length - pageItemNumber) } /> }
      </Pagination>
    </div>
  );
}
