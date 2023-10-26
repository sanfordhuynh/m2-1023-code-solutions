const prices = [42.42, 10, 28.2234, 3.2, 5, 12];

const priceArray = prices.map((x) =>
  console.log(`price: ${x} , salePrice: ${x / 2}`)
);
const formattedArray = prices.map((x) => console.log(`"$${x}"`));
