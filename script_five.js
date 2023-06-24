const formatter = new Intl.RelativeTimeFormat("en-US");
console.log(formatter.format(43, "minutes"));

const formatter_two = new Intl.RelativeTimeFormat("en-US");
console.log(formatter_two.format(-43, "minutes"));

const formatter_three = new Intl.RelativeTimeFormat("en-US");
console.log(formatter_three.format(3, "hour"));

const formatter_four = new Intl.RelativeTimeFormat("en-US");
console.log(formatter_four.format(2, "day"));

const formatter_five = new Intl.RelativeTimeFormat("en-US");
console.log(formatter_five.format(-2, "day"));

const formatter_six = new Intl.RelativeTimeFormat("en-US", {
  style: "short",
});
console.log(formatter_six.format(1, "day"));

const formatter_seven = new Intl.RelativeTimeFormat("en-US", {
  numeric: "auto",
});
console.log(formatter_seven.format(1, "day"));

const formatter_eight = new Intl.RelativeTimeFormat("en-US", {
  numeric: "always",
});
console.log(formatter_eight.format(1, "day"));

const formatter_nine = new Intl.RelativeTimeFormat("en-US", {
  numeric: "always",
});
console.log(formatter_nine.format(-1, "minute"));

const formatter_ten = new Intl.RelativeTimeFormat("en-US", {
  numeric: "always",
});
console.log(formatter_ten.format(-1, "second"));
