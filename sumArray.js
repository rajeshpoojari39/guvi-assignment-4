var arr = [22, 343, 3434, 12];
let sum = 0;

const sumTotal = () => {
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
};

sumTotal();
