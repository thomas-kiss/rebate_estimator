// NOT CURRENTLY USED - Import default values for scenarios
import { DEFAULTS } from './rebateData.js';

// This function takes user input and returns rebate results
export function calculateRebate(input) {
  const {
    PPF_fixture,
    quantity,
    PPE_baseline,
    EE_watts,
    hours,
    WHF,
    rate
  } = input;

  // Validate input: ensure all values are provided
  if (
    PPF_fixture === undefined ||
    quantity === undefined ||
    PPE_baseline === undefined ||
    EE_watts === undefined ||
    hours === undefined ||
    WHF === undefined ||
    rate === undefined
  ) {
    throw new Error('All input fields are required.');
  }

  // Total PPF output
  const PPF_total = PPF_fixture * quantity;

  // Convert watts to kilowatts
  const kW_total = (EE_watts * quantity) / 1000;

  // Calculate annual kWh savings using PIEM formula
  const kWh_savings =
    ((PPF_total / (PPE_baseline * 1000)) - kW_total) * hours * WHF;

  // Calculate incentives
  const incentive = kWh_savings * rate;
  const incentive_per_fixture = incentive / quantity;

  // Return results
  return {
    PPF_total: PPF_total.toFixed(2),
    kWh_savings: kWh_savings.toFixed(2),
    incentive: incentive.toFixed(2),
    incentive_per_fixture: incentive_per_fixture.toFixed(2)
  };
}
