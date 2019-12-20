const calcTaxFunctions = {
  helloWorld: () => {
    return "Hello world from here!";
  },

  balanceGreater: objArr => {
    return [2500];
  },

  canFedTax: income => {
    const taxR1 = 0.15;
    const taxR2 = 0.205;
    const taxR3 = 0.26;
    const taxR4 = 0.29;
    const taxR5 = 0.33;

    const taxTopIncomeRange1 = 47630;
    const taxTopIncomeRange2 = 95259;
    const taxTopIncomeRange3 = 147667;
    const taxTopIncomeRange4 = 210371;

    const taxSumTax1 = taxTopIncomeRange1 * taxR1;
    const taxSumTax2 = (taxR2 - taxTopIncomeRange1) * taxR2;
    const taxSumTax3 = (taxTopIncomeRange3 - taxTopIncomeRange2) * taxR3;
    const taxSumTax4 = (taxTopIncomeRange4 - taxTopIncomeRange3) * taxR4;

    console.log("Income is: " + income);
    let tax = 0;

    if (income <= 0) {
      return 0;
    } else if (income > 0 && income <= taxTopIncomeRange1) {
      tax = income * taxR1;
      console.log("Income tax is: " + tax);
      return tax;
    } else if (income > taxTopIncomeRange1 && income <= taxTopIncomeRange2) {
      tax = taxSumTax1 + (income - taxTopIncomeRange1) * taxR2;
      console.log("Income tax is: " + tax);
      return tax;
    } else if (income > taxTopIncomeRange2 && income <= taxTopIncomeRange3) {
      tax = taxSumTax1 + taxSumTax2 + (income - taxTopIncomeRange2) * taxR3;
      console.log("Income tax is: " + tax);
      return tax;
    } else if (income > taxTopIncomeRange3 && income <= taxTopIncomeRange4) {
      tax =
        taxSumTax1 +
        taxSumTax2 +
        taxSumTax3 +
        (income - taxTopIncomeRange3) * taxR4;
      console.log("Income tax is: " + tax);
      return tax;
    } else if (income > taxTopIncomeRange4) {
      tax =
        taxSumTax1 +
        taxSumTax2 +
        taxSumTax3 +
        taxSumTax4 +
        (income - taxTopIncomeRange4) * taxR5;
      console.log("Income tax is " + tax);
      return tax;
    }
  }
};

export default calcTaxFunctions;
