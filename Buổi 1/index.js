const nums = [1, 2, 3, 4, 5, 6, 7];

// 1. Sử dụng phương thức array
console.log(nums);

// 2. In ra các phần tử
nums.forEach((element) => console.log(element));

// 3. Tạo mảng mới, phần tử nhân 2
const doubledArray = nums.map((element) => element * 2);
console.log(doubledArray);

// 4. Tìm số đầu tiên lớn hơn 3
const firstElementGreaterThan3 = nums.find((element) => element > 3);
console.log(firstElementGreaterThan3);

// 5. Tìm các số lớn hơn 4
const elementsGreaterThan4 = nums.filter((element) => element > 4);
console.log(elementsGreaterThan4);

// 6. Tính tổng các số
const sum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// 7. Kiểm tra tất cả các phần tử có lớn hơn 3
const allElementsGreaterThan3 = nums.every((element) => element > 3);
console.log(allElementsGreaterThan3);
