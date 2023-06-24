const formatter = new Intl.DateTimeFormat(undefined); // will use the user's default locale
console.log(formatter.format(new Date()));
