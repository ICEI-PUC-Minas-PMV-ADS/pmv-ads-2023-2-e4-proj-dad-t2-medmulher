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

export const dates = (num: number) => {
  const newArr = [];

  for (let i = 0; i < num; i++) {
    newArr.push(`${i + 1}`);
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
