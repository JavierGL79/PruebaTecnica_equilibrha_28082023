const xlsx = require('xlsx')
const path = 'datos_prueba_tecnica.xlsx'
const finalText = 'END OF SCRIPT'

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

const dataExcel = readingExcelFile(path)

//Function showing men and women of the total number of employees
const sexCounter = (dataExcel) => {
    let employeesCounter = 0;
    let sexH = 0;
    let sexM = 0;
    try {
        for (let dataSex of dataExcel){
            employeesCounter++;
            if(dataSex['sexo'] == 'M'){
                sexM++;
            }else if(dataSex['sexo'] == 'H'){
                sexH++;
            }
        }
        console.log(`There are ${sexM} women & ${sexH} men of a total of ${employeesCounter} employees`);
        
    } catch (error) {
        console.log(error);
        return null;
    }
}
//Gross annual salaries of the employees
const grossSalary = (dataExcel) => {
    let totalGrossSalary = 0;
    for (let dataSalary of dataExcel){
        if(dataSalary['ID Empresa'] == 1){
            totalGrossSalary += dataSalary['salario bruto anual']
        }
    }
    console.log(`Total gross annual salaries is: ${totalGrossSalary} €`)
}

//List of employees who earn more than 28,000€ and belong to Equilibra RRHH.
const employeesList = (dataExcel) => {
    for (let dataEmployeesList of dataExcel){
        if(dataEmployeesList['salario bruto anual'] > 28000 && dataEmployeesList['ID Empresa'] == 2){
            console.log(`${dataEmployeesList['id empleado']}, ${dataEmployeesList['nombre']}, ${dataEmployeesList['apellido1']} ${dataEmployeesList['apellido2']}, ${dataEmployeesList['salario bruto anual']}, ${dataEmployeesList['Nombre empresa']}`)
        }
    }
}

//Script
console.log();
console.log('Technical testing');
console.log('... ...');
if (dataExcel != null) {
    console.log('Successfully saving data in dataExcel');
    console.log();

    console.log('1.- How many men and women are there of the total number of employees')
    sexCounter(dataExcel)
    console.log();

    console.log('2.- Gross annual salaries of the employees of Equilibra IT and the work center CT2 (Alovera)')
    grossSalary(dataExcel)
    console.log();

    console.log('3.- List of employees who earn more than 28,000€ and belong to Equilibra RRHH.')
    employeesList(dataExcel)
    console.log();
}else {
    console.log();
    console.log(finalText);
};

console.log(`${finalText}`);
console.log('(by Javier Girón López)');