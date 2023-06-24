const formatter = new Intl.NumberFormat(undefined, {
  currency: "USD",
  style: "currency",
});
console.log(formatter.format(23456));

const formatter_two = new Intl.NumberFormat(undefined, {
  currency: "KSH",
  style: "currency",
});
console.log(formatter_two.format(2345600));

const formatter_three = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
});
console.log(formatter_three.format(3456));

const formatter_four = new Intl.NumberFormat(undefined, {
  unit: "liter",
  style: "unit",
});
console.log(formatter_four.format(133456));

const formatter_five = new Intl.NumberFormat(undefined, {
  unit: "liter",
  style: "unit",
  unitDisplay: "long",
});
console.log(formatter_five.format(233456));

const formatter_six = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
console.log(formatter_six.format(233456));

const formatter_seven = new Intl.NumberFormat(undefined, {
  notation: "engineering",
});
console.log(formatter_seven.format(233456));

const formatter_eight = new Intl.NumberFormat(undefined, {
  notation: "scientific",
});
console.log(formatter_eight.format(233456));

const formatter_nine = new Intl.NumberFormat(undefined, {
  notation: "standard",
});
console.log(formatter_nine.format(233456));

// YouTube views
const formatter_ten = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
console.log(formatter_ten.format(2374564567));

const formatter_eleven = new Intl.NumberFormat(undefined, {
  minimumFractionDigits: 2,
});
console.log(formatter_eleven.format(233456.99888));

const formatter_twelve = new Intl.NumberFormat(undefined, {
  maximumFractionDigits: 2,
});
console.log(formatter_twelve.format(233456.12888));
