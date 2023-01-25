function Pagination(currentPage, totalPage) {
  const allPages = [];
  let countFreeCell = 0;
  let foundLastPage = false;

  allPages.push(currentPage);
  if (currentPage === totalPage) {
    countFreeCell = 5;
    foundLastPage = true;
  }

  if (!foundLastPage) {
    allPages.push(currentPage + 1);
    if (currentPage + 1 === totalPage) {
      countFreeCell = 3;
      allPages.push('=>');
      foundLastPage = true;
    }
  }

  if (!foundLastPage) {
    allPages.push(currentPage + 2);
    if (currentPage + 2 === totalPage) {
      countFreeCell = 2;
      allPages.push('=>');
      foundLastPage = true;
    }
  }

  if (!foundLastPage) {
    if (currentPage + 3 === totalPage) {
      countFreeCell = 1;
      allPages.push(currentPage + 3, '=>');
      foundLastPage = true;
    } else {
      allPages.push('...');
    }
  }

  if (!foundLastPage) {
    allPages.push(totalPage, '=>');
    countFreeCell = 0;
    foundLastPage = true;
  }

  console.log(allPages);
}

Pagination(6, 1000);
