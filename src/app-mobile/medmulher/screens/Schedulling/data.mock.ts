export const DATA = [
  {
    mounth: "janeiro",
    days: 31,
  },
  {
    mounth: "fevereiro",
    days: 28,
  },
  {
    mounth: "março",
    days: 31,
  },
  {
    mounth: "abril",
    days: 30,
  },
  {
    mounth: "maio",
    days: 31,
  },
  {
    mounth: "junho",
    days: 30,
  },
  {
    mounth: "julho",
    days: 31,
  },
  {
    mounth: "agosto",
    days: 31,
  },
  {
    mounth: "setembro",
    days: 30,
  },
  {
    mounth: "outubro",
    days: 31,
  },
  {
    mounth: "novembro",
    days: 30,
  },
  {
    mounth: "dezembro",
    days: 31,
  },
];

export const listDays = [
  "domingo",
  "segunda-feira",
  "terça-feira",
  "quarta-feira",
  "quinta-feira",
  "sexta-feira",
  "sábado",
];

export const day = (name: string) => {
  switch (name) {
    case "Monday":
      return "segunda-feira";
    case "Tuesday":
      return "terça-feira";
    case "Wednesday":
      return "quarta-feira";
    case "Thursday":
      return "quinta-feira";
    case "Friday":
      return "sexta-feira";
    case "Saturday":
      return "sábado";
    default:
      return "domingo";
  }
};

export const dayConvert = (name: string) => {
  switch (name) {
    case "segunda-feira":
      return "Monday";
    case "terça-feira":
      return "Tuesday";
    case "quarta-feira":
      return "Wednesday";
    case "quinta-feira":
      return "Thursday";
    case "sexta-feira":
      return "Friday";
    case "sábado":
      return "Saturday";
    default:
      return "Sunday";
  }
};

export const monthConvert = (name: string) => {
  switch (name) {
    case "janeiro":
      return "01";
    case "fevereiro":
      return "02";
    case "março":
      return "03";
    case "abril":
      return "04";
    case "maio":
      return "05";
    case "junho":
      return "06";
    case "julho":
      return "07";
    case "agosto":
      return "08";
    case "setembro":
      return "09";
    case "outubro":
      return "10";
    case "novembro":
      return "11";
    default:
      return "12";
  }
};

export const dates = (num: number) => {
  const newArr = [];

  for (let i = 0; i < num; i++) {
    if (i < 9) {
      newArr.push(`0${i + 1}`);
    } else {
      newArr.push(`${i + 1}`);
    }
  }

  return newArr;
};

export const hours = [
  "07:00",
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];
