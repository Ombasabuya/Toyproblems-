/*
Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

NB: Use KRA, NHIF, and NSSF values provided in the link below.

- https://www.aren.co.ke/payroll/taxrates.htm Links to an external site.

 Links to an external site.-  Links to an external site.Links to an external site.

- www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.


*/

//enter basic salary

function salary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    let payee = grossSalary * 0.03;

    let nssfDeductions = grossSalary * 0.86;

    let nhifDeductions = grossSalary * 0.0025;

    let totalDeductions = payee + nssfDeductions + nhifDeductions
    let netSalary = grossSalary - totalDeductions;

}
 
//enter basic salary

   console.log(10000,20000);
   