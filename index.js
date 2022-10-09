// Write your solution in this file!
const employee = {};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee = { ...employee, [key]: value };
  return employee;
};

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
  employee[key] = value;
  return employee;
};

const deleteFromEmployeeByKey = (employee, key) => {
  employee = { ...employee, key };
  delete employee[key];
  return employee;
};

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
  delete employee[key];
  return employee;
}
