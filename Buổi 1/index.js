const nums = [1, 2, 3, 4, 5, 6, 7];
console.log(nums);

// 2. In ra các phần tử
nums.forEach((elm) => console.log(elm));

// 3. Tạo mảng mới, phần tử nhân 2
const doubledArray = nums.map((elm) => elm * 2);
console.log(doubledArray);

// 4. Tìm số đầu tiên lớn hơn 3
const firstEGT3 = nums.find((elm) => elm > 3);
console.log(firstEGT3);

// 5. Tìm các số lớn hơn 4
const eGT4 = nums.filter((elm) => elm > 4);
console.log(eGT4);

// 6. Tính tổng các số
const sum = nums.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum);

// 7. Kiểm tra tất cả các phần tử có lớn hơn 3
const allEGT3 = nums.every((elm) => elm > 3);
console.log(allEGT3);
