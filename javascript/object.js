let abc = {
  name: "shubham",
  age: 26,
  address: {
    city: "kalyan",
    state: "maharastra",
  },
  tech: ["reactJS", "Java"],
};
console.log(abc);

let d = abc;
d["name"] = "bhushan";
d["address"]["city"] = "Nampur";
d.age = 23;
console.log(abc.address.city);
d.tech.reverse();

d["at"] = d["address"];
delete d["address"];

console.log(d);
