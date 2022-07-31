// 此算法主要处理数值过大的精度处理 也就是经典的大数相加

/**
 * 输入：num1 = "11", num2 = "123"
 * 输出："134"
 *
 * 输入：num1 = "456", num2 = "77"
 * 输出："533"
 *
 * 输入：num1 = "0", num2 = "0"
 * 输出："0"
 */
// const num1 = "12345678910";
// const num2 = "987654321099";
const num1 = "11";
const num2 = "123";
const addStrings = (num1: string, num2: string): string => {
  const arr1 = num1.split("").reverse();
  const arr2 = num2.split("").reverse();
  const len = Math.max(arr1.length, arr2.length);

  let result: string = "";

  let sum = 0;
  for (let i = 0; i < len; i++) {
    let temp1 = parseInt(arr1[i]) || 0;
    let temp2 = parseInt(arr2[i]) || 0;
    sum += temp1 + temp2;
    if (sum >= 10) {
      result += sum % 10;
      sum = 1;
    } else {
      result += sum;
      sum = 0;
    }
  }
  if (sum !== 0) {
    result += sum;
  }

  return result.split("").reverse().join("");
};

console.log(addStrings(num1, num2));

export {};
