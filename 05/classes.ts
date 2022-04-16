/** department class */
abstract class Department {
  static fiscilYear = 2020;
  protected employees: string[] = [];

  /**
   * @param {string} id
   * @param {string} name
   */
  constructor(protected readonly id: string, public name: string) {}

  /**
   * @param {string} name
   * @return {{name: string}}
   */
  static createEmployee(name: string): {name: string} {
    return {name: name};
  }

  abstract describe(this: Department): void;

  /**
   * @param {string} employee
   */
  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  /** print employee information method */
  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

/** IT Department class */
class ITDepartment extends Department {
  admins: string[];

  /**
   * @param {string} id
   * @param {string[]} admins
   */
  constructor(id: string, admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }

  /** describe method */
  describe(): void {
    console.log('IT Department - ID: ' + this.id);
  }
}

/** Accounting Department class */
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment;

  /** get most recent report */
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error('No report found.');
  }

  /** @param {string} value */
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in a value value!');
    }
    this.addReport(value);
  }

  /**
   * @param {string} id
   * @param {string[]} reports
   */
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  /**
   * @return {AccountingDepartment}
   */
  static getInstance(): AccountingDepartment {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment('d2', []);
    return this.instance;
  }

  /** describe method */
  describe(): void {
    console.log('Accounting Department - ID: ' + this.id);
  }

  /**
   * add employee method
   * @param {string} name
   * @return {void}
   */
  addEmployee(name: string): void {
    if (name === 'Max') {
      return;
    }
    this.employees.push(name);
  }
  /**
   * add report method
   * @param {string} text
   */
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  /** print report method */
  printReport() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscilYear);
const it = new ITDepartment('d1', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.name = 'NEW NAME';
it.printEmployeeInformation();
console.log(it);

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log(accounting, accounting2);
accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong!');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
accounting.printReport();
accounting.printEmployeeInformation();
accounting.describe();
