function elmThatAppearsMostOften(arr) {
  // Tạo Đối Tượng Đếm
  let count = {};

  //   Duyệt qua mảng
  arr.forEach(function (elm) {
    if (count[elm]) {
      count[elm]++;
    } else {
      count[elm] = 1;
    }
  });

  // Tìm phần tử có số lần xuất hiện nhiều nhất.
  let mostFE;
  let maxCount = 0;

  for (let elm in count) {
    if (count[elm] > maxCount) {
      mostFE = elm;
      maxCount = count[elm];
    }
  }

  return { elm: mostFE, count: maxCount };
}

// Bài 3:Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:
let array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
let result = elmThatAppearsMostOften(array);

console.log(
  `Phần tử xuất hiện nhiều nhất là ${result.elm} với số lần xuất hiện là ${result.count} lần.`
);
