const formatter = new Intl.DateTimeFormat(undefined, { year: "2-digit" });
console.log(formatter.format(new Date()));
const formatter_two = new Intl.DateTimeFormat(undefined, { dateStyle: "full" });
console.log(formatter_two.format(new Date()));
const formatter_three = new Intl.DateTimeFormat(undefined, {
  dateStyle: "short",
});
console.log(formatter_three.format(new Date()));
const formatter_four = new Intl.DateTimeFormat(undefined, {
  dateStyle: "long",
});
console.log(formatter_four.format(new Date()));
const formatter_five = new Intl.DateTimeFormat("es", {
  dateStyle: "long",
});
console.log(formatter_five.format(new Date()));
