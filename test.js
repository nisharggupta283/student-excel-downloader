const agg = [
    'NAME', 'AGE',
    'GENDER', 'STUDENT_ID',
    'COURSE', 'BATCH',
    'MOBILE', 'DOB',
    'REMARK', 'COLLEGE',
    'YEAR', 'FATHER_NAME',
    'MOTHER_NAME', 'ADMISSION_DATE',
    'PREVIOUS_EXPERIENCE', 'NIN_TYPE',
    'NIN_NUMBER', 'EMAIL',
    'ACTIVE', 'INTERVIEWS'
];
let arr = [];

for(let i=0;i<agg.length;i++){
    const obj={};
    obj["key"]=agg[i];
    obj["header"]=pgg[i];
    arr.push(obj);
}
console.log(arr);
