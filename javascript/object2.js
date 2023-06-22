let abc = {
  name: "shubham",
  age: 26,
  address: {
    city: "kalyan",
    state: "maharastra",
  },
  tech: ["reactJS", "Java"],
};

let k = { ...abc, ...(addressstate = tech[1]) };

console.log(k);
