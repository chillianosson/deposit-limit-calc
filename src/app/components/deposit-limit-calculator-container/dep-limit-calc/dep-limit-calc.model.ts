export interface DepositLimitCalcFormValue {
  data: {
    amount: string;
    date: string;
    time: string;
  };
}

export interface DepositLimitCalculatorResult {}
export enum DepositLimitCalculatorType {
  date = 'date',
  amount = 'amount',
}

export const InformationalTooltip: string = `Once you’ve reached your deposit limits, it might be tricky to understand when and how much you can deposit again.
This tool will allow you to know exactly when and up to what amount you will be able to make your next deposit.`;
