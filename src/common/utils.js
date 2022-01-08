export const toggleSort = (array, isAsc, setIsAsc) => {
  setIsAsc(!isAsc);
  return isAsc
    ? array.sort((a, b) => a?.name?.first?.localeCompare(b?.name?.first))
    : array.reverse();
};
