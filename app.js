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


//Script
console.log()
console.log('Technical testing')
console.log('... ...')
if (readingExcelFile(path) != null) {
    console.log('Successfully saving data in dataExcel')
    console.log()
} else {
    console.log()
    console.log(finalText)
}

console.log(`${finalText}`)
console.log('(by Javier Girón López)')