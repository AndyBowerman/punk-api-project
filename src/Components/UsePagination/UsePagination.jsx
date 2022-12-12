const UsePagination = ({totalCount, pageSize, siblingCount=1, currentPage}) => {
    const paginationRange = useMemo(() => {

    }, [totalCount, pageSize, siblingCount, currentPage])

    const totalPageCount = Math.ceil(totalCount / pageSize);

  return paginationRange;
}

export default UsePagination
