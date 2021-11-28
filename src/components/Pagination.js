import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import '../styles/Pagnation.css'


const Pagination = (props) => {
  const getNumbers = () => {
    let numbers = [];
    let itemsPerPage = props.itemsPerPage;
    let pageNumber = 1;

    for (let i = 0; i < props.count; i += itemsPerPage) {
        const page = pageNumber;
        let style = 'pagination__number';
        let content = null;

        if (props.active === page) {
            style = 'pagination__number pagination__number--active';
            content = (
                <div key={i} className={style}>
                    {pageNumber}
                </div>
            );
        } else {
          content = (
              <div key={i} onClick={() => props.visitPage(page)} className={style}>
                  {pageNumber}
              </div>
          );
      }

      numbers.push(
          content
      );
      pageNumber++;
  }

  return numbers;
};

return (
    
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-end">
        <li className="page-item disabled">
          <Link onClick={() => props.previous()} className="page-link">Previous</Link>
          {getNumbers()}
        </li>

        <li className="page-item"><Link className="page-link" href="#">1</Link></li>
        <li className="page-item"><Link className="page-link" href="#">2</Link></li>
        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
        <li className="page-item">
          <Link  onClick={() => props.next()} className="page-link" to="/">Next</Link>
        </li>
      </ul>
    </nav>
    )
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  active: PropTypes.number.isRequired,
  visitPage: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

export default Pagination