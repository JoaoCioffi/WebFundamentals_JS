const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')


const chinese = emp => emp.pais === 'China'
const woman = emp => emp.genero === 'F'
const minSalary = (employee, currentEmployee) => {
    return employee.salario < currentEmployee.salario ? employee : currentEmployee
}

axios.get(url).then(response => {
    const employees = response.data
    console.log(employees)
    
    // chinese woman with the minimum salary
    const emp = employees
                         .filter(chinese)
                         .filter(woman)
                         .filter(minSalary)
    
    console.log(emp)
})