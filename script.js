const students = [
  { name: "Jorge", firstGrade: 10, secondGrade: 7 },
  { name: "Willian", firstGrade: 3, secondGrade: 8 },
  { name: "Claudia", firstGrade: 8, secondGrade: 7 },
  { name: "Victor", firstGrade: 10, secondGrade: 10 },
  { name: "Jake", firstGrade: 5, secondGrade: 7 },
];
function media(student) {
  let media = (student.firstGrade + student.secondGrade) / 2;
  return media;
}

for (let student of students) {
  let finalGrade = media(student);
  if (finalGrade == 10) {
    alert(
      `A média do(a) aluno(a) ${student.name} foi de ${finalGrade}.\nParabéns, você foi aprovado(a) no concurso com nota máxima!`
    );
  } else if (finalGrade >= 7) {
    alert(
      `A média do(a) aluno(a) ${student.name} foi de ${finalGrade}. \nParabéns, você foi aprovado(a) no concurso!`
    );
  } else {
    alert(
      `A média do(a) aluno(a) ${student.name} foi de ${finalGrade}. \nNão foi desta vez, tente novamente!`
    );
  }
}
