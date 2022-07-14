import React from "react";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <table border="1px">
          <tbody>
          {pageNumbers.map((number) => (
            <tr
              key={number}
              className="page-item"
              style={{ display: "inline-block" }}
            >
              <td>
                <a
                  onClick={() => paginate(number)}
                  href="!#"
                  className="page-link"
                >
                  {number}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </nav>
  );
};

export default Pagination;
