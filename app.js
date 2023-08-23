const xlsx = require('xlsx')
const path = 'datos_prueba_tecnica.xlsx'
const finalText = 'END OF SCRIPT'
const dataExcel = (path) => readingExcelFile(path)
//Function that reads and saving data in json format from an xlsx file.
const readingExcelFile = (path) => {
    try {
        const workBook = xlsx.readFile(path);
        const dataExcel = xlsx.utils.sheet_to_json(workBook.Sheets[workBook.SheetNames[0]]);

        return dataExcel

    } catch (error) {
        console.log(error)
        return null
    }
}

//Function showing men and women of the total number of employees
const sexCounter = (dataExcel) => {
    let employeesCounter = 0;
    let sexH = 0;
    let sexM = 0;
    try {
        for (let sexCounter of dataExcel){
            employeesCounter++;
            if(sexCounter['sexo'] == 'M'){
                sexM++;
            }else if(sexCounter['sexo'] == 'H'){
                sexH++;
            }
        }
        console.log(`There are ${sexM} women & ${sexH} men of a total of ${employeesCounter} employees`);
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

//Script
console.log();
console.log('Technical testing');
console.log('... ...');
if (readingExcelFile(path) != null) {
    console.log('Successfully saving data in dataExcel');
    console.log();
}if(readingExcelFile(path) != null){
    console.log('1.- How many men and women are there of the total number of employees')
    sexCounter(readingExcelFile(path))
    console.log();
}if(readingExcelFile(path) != null){
    console.log('1.- How many men and women are there of the total number of employees')
    grossSalary(readingExcelFile(path))
    console.log();
}
else {
    console.log();
    console.log(finalText);
};

console.log(`${finalText}`);
console.log('(by Javier Girón López)');