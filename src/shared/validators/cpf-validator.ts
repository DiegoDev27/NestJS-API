export class Cpf {
 public value: string;
 public isValid: boolean;

 public create(value: string): Cpf {
  value = value.replace('.', '').replace('-', '');

  if (value.length === 11) {
   if (this.validate(value)) {
    this.value = value;
    this.isValid = true;
    return this;
   }
  }
  this.isValid = false;
  return this;
 }

 private validate(value: string): boolean {
  const cpfArray: string[] = value.split('');
  const mapToNumber = cpfArray.map(x => parseInt(x, 10));
  let sum = 0;
  let multiplicator = 10;
  for (let index = 0; index < mapToNumber.length - 2; index++) {
   sum += mapToNumber[index] * multiplicator;
   multiplicator--;
  }

  if (sum % 11 < 2 && mapToNumber[9] !== 0) {
   return false;
  }
  if (sum % 11 >= 2 && mapToNumber[9] !== 11 - sum % 11) {
   return false;
  }

  sum = 0;
  multiplicator = 11;
  for (let index = 0; index < mapToNumber.length - 1; index++) {
   sum += mapToNumber[index] * multiplicator;
   multiplicator--;
  }

  if (sum % 11 < 2 && mapToNumber[10] !== 0) {
   return false;
  }
  if (sum % 11 >= 2 && mapToNumber[10] !== 11 - sum % 11) {
   return false;
  }
  return true;
 }

 public formatCpf(value: string) {
  return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
 }
}