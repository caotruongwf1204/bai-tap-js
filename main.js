const arr = [1, 2, 2, 3, 4, 4, 5];

const arrEle = arr.filter((value, index) => {
  // Chỉ giữ lại các phần tử xuất hiện lần đầu tiên trong mảng
  return arr.indexOf(value) === index;
});

console.log(arrEle);
