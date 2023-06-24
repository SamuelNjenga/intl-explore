const formatter = new Intl.PluralRules(undefined); // for translations
console.log(formatter.select(2));

const formatter_two = new Intl.PluralRules(undefined);
console.log(formatter_two.select(1));
