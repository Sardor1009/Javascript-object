// let person = {
//     firstName: "Abdulaziz",
//     lastName: "Toshpulatov",
//     age: 30,
//     subjects: ["math", "physics", "history"],
//     isMarried: false,
//     isDiplom: NaN,
//     test: undefined,
//       2019: "Enter to the university",
//     2011: "Olympiads first position",
//     university: {
//       name: "TATU",
//       course: 4,
//       GPA: 4.72,
//     },
//     symbol: Symbol(),
//     fullName: function () {
//       return person.firstName + " " + person.lastName;
//     },
//   };
  

//   person.firstName = "sardor"
//   person.lastName = "islomov"

//   console.log(person.fullName())

//  delete person.age
  

//   console.log(person)


// function createobject(firstName, lastName, age){
//     let person = {
//         firstName: firstName,
//         lastName: lastName,
//         age: age,
//     }
//     return person
// }

// let res = createobject("abdulaziz", "Toshpulatov", 24 )
// console.log(res)



// Object 1
// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// const output = Object.keys(me).map(key => {
//   if (Array.isArray(me[key])) {
//     return `${key}: ${me[key].join(",")}`;
//   } else {
//     return `${key}: ${me[key]}`;
//   }
// }).join("\n");

// console.log(me);

// object 2
// function createSquaredObject(n) {
//   const result = {};

//   for (let i = 1; i <= n; i++) {
//     result[i] = i * i;
//   }

//   return result;
// }

// const inputNumber = 5;
// const outputObject = createSquaredObject(inputNumber);

// console.log(outputObject);

// Object 3
// function createSquaredObject(n) {
//   const result = {};

//   for (let i = 1; i <= n; i++) {
//     result[i] = i * i;
//   }

//   return result;
// }

// const inputNumber = 5;
// const outputObject = createSquaredObject(inputNumber);

// // Obyektning kalitlari va qiymatlari yig'indisini hisoblash
// const keysSum = Object.keys(outputObject).reduce((sum, key) => sum + Number(key), 0);
// const valuesSum = Object.values(outputObject).reduce((sum, value) => sum + value, 0);

// console.log("Squared Object:", outputObject);
// console.log("Keys Sum:", keysSum);
// console.log("Values Sum:", valuesSum);

// Object 4
// function createLengthObject(strings) {
//   const result = {};

//   for (let i = 0; i < strings.length; i++) {
//     const key = strings[i];
//     const value = key.length;
//     result[key] = value;
//   }

//   return result;
// }

// const inputArray = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// const outputObject = createLengthObject(inputArray);

// console.log(outputObject);

// Object 5
// const products = {"Apelsin": 10000, "Olma": 12000, "Mandarin": 8000, "Banan": 20000};

// const totalProductCount = Object.values(products).reduce((sum, price) => sum + price, 0);

// console.log("Barcha mahsulotlar soni:", totalProductCount);

// Object 6
// function defineObject(obj) {
//   const keys = Object.keys(obj);

//   for (let key of keys) {
//     if (typeof key !== "string") {
//       return false;
//     }
//   }

//   return true;
// }

// const inputObject = {abc: 1, 123: 2, d: 5};
// const result = defineObject(inputObject);

// console.log(result);

// Object 7
// function removeFalsyValues(obj) {
//   const result = {};

//   Object.keys(obj).forEach(key => {
//     if (obj[key]) {
//       result[key] = obj[key];
//     }
//   });

//   return result;
// }

// const inputObject = { a: false, b: 12, c: true, d: 0 };
// const outputObject = removeFalsyValues(inputObject);

// console.log(outputObject);


// Object 8
// function createCountObject(arr) {
//   const result = {};

//   for (let i = 0; i < arr.length; i++) {
//     const key = arr[i];

//     if (result[key]) {
//       result[key]++;
//     } else {
//       result[key] = 1;
//     }
//   }

//   return result;
// }

// const inputArray = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const outputObject = createCountObject(inputArray);

// console.log(outputObject);

// Object 9
// function createNumberObject(number) {
//   const result = {};
//   const numberString = number.toString();

//   const units = ["birlar", "minglar", "millionlar", "milliardlar", "trilionlar"];

//   for (let i = 0; i < units.length; i++) {
//     const unit = units[i];
//     const startIndex = Math.max(numberString.length - (i + 3) * 3, 0);
//     const endIndex = numberString.length - i * 3;

//     result[unit] = Number(numberString.slice(startIndex, endIndex));
//   }

//   return result;
// }

// const inputNumber = 8945472985629;
// const outputObject = createNumberObject(inputNumber);

// console.log(outputObject);


// Object 10
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const status = book.alreadyRead ? "o'qilgan" : "o'qilmagan";
//   console.log(`${i + 1}. ${book.author}ning "${book.title}" kitobi ${status};`);
// }

// Object 11
// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let totalAmount = 0;

// for (let i = 0; i < products.length; i++) {
//   const product = products[i];
//   const discountedPrice = product.price - (product.price * product.discount) / 100;
//   const subtotal = discountedPrice * product.quantity;
//   totalAmount += subtotal;
// }

// console.log("Umumiy summa:", totalAmount);


// Object 12
// const obj = {
//   "it": 20,
//   "mushuk": 10,
//   "sigir": 200,
//   "tovuq": 2
// };

// const resultArray = [];

// for (const key in obj) {
//   resultArray.push(key, obj[key]);
// }

// console.log(resultArray);

// Object 13
// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// function calculateGPA(grades) {
//   let totalGradePoints = 0;
//   let totalCredits = 0;

//   for (let i = 0; i < grades.length; i++) {
//     const grade = grades[i];
//     totalGradePoints += grade.grade * grade.kredit;
//     totalCredits += grade.kredit;
//   }

//   const gpa = totalGradePoints / totalCredits;
//   return gpa;
// }

// const resultGPA = calculateGPA(grades);

// console.log("GPA:", resultGPA);


// Object 14
// const rightAnswers = { 1: "B", 2: "A", 3: "C", 4: "D", 5: "B", 6: "C", 7: "A", 8: 'D', 9: "A", 10: "B" };
// const myAnswers = {1: "C", 2: "A", 3: "D", 4: "D", 5: "B", 6: "C", 7: "B", 8: "C", 9: "A", 10: "C"};

// function checkAnswers(rightAnswers, myAnswers) {
//   const result = { correct: 0, incorrect: 0, correctList: [], incorrectList: [] };

//   for (const questionNumber in rightAnswers) {
//     const rightAnswer = rightAnswers[questionNumber];
//     const myAnswer = myAnswers[questionNumber];

//     if (rightAnswer === myAnswer) {
//       result.correct++;
//       result.correctList.push(questionNumber);
//     } else {
//       result.incorrect++;
//       result.incorrectList.push(questionNumber);
//     }
//   }

//   return result;
// }

// const result = checkAnswers(rightAnswers, myAnswers);

// console.log("To'g'ri javoblar:", result.correct, "ta - ", result.correctList);
// console.log("Noto'g'ri javoblar:", result.incorrect, "ta - ", result.incorrectList);


// Object 15
// function getMultipleValues(n, obj) {
//   const result = {};

//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       result[key] = obj[key] * n;
//     } else {
//       result[key] = obj[key];
//     }
//   }

//   return result;
// }

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };
// const res = getMultipleValues(n, obj);

// console.log(res);

// Object 16
// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// const {
//   name,
//   company: {
//     name: companyName,
//     price,
//     founder: {
//       firstName: founderFirstName,
//       lastName: founderLastName,
//       birthDate,
//     },
//   },
// } = product;

// console.log("Product Name:", name);
// console.log("Company Name:", companyName);
// console.log("Company Price:", price);
// console.log("Founder First Name:", founderFirstName);
// console.log("Founder Last Name:", founderLastName);
// console.log("Founder Birth Date:", birthDate);

// Object 17
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// // O'rtacha protsentni hisoblash
// const averagePercentage = pupils.reduce((sum, pupil) => sum + pupil.protcent, 0) / pupils.length;

// // Yangi massivni yaratish
// const updatedPupils = pupils.map(pupil => ({
//   ...pupil,
//   averagePercentage,
//   evaluation: pupil.protcent >= 80 ? "A" : pupil.protcent >= 70 ? "B" : "C",
// }));

// console.log("O'rtacha protsent:", averagePercentage);
// console.log("Yangi massiv:", updatedPupils);


// Object 18
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// const updatedPupils = pupils.map(pupil => ({
//   ...pupil,
//   grade: pupil.protcent >= 90 ? 5 : pupil.protcent >= 80 ? 4 : pupil.protcent >= 70 ? 3 : 2,
// }));

// console.log("Yangi massiv:", updatedPupils);

// Object 19
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// const updatedPupils = pupils.map(pupil => ({
//   ...pupil,
//   isPassed: pupil.protcent >= 70,
// }));

// console.log("Yangi massiv:", updatedPupils);


// Object 20
// const pupils = [
//   {
//     name: "Elbek",
//     protcent: 95,
//   },
//   {
//     name: "Zafar",
//     protcent: 78,
//   },
//   {
//     name: "Aziz",
//     protcent: 83,
//   },
//   {
//     name: "Jasur",
//     protcent: 88,
//   },
//   {
//     name: "Bobur",
//     protcent: 66,
//   },
//   {
//     name: "Kamron",
//     protcent: 75,
//   },
// ];

// const passedCount = pupils.filter(pupil => pupil.protcent >= 70).length;
// const failedCount = pupils.length - passedCount;

// console.log("O'tganlar soni:", passedCount);
// console.log("O'tmaganlar soni:", failedCount);