// Import the default values
import { DEFAULTS } from './rebateData.js';

// This function takes user input and returns rebate results
export function calculateRebate(input) {
  // Read user data (use defaults if not provided)
  const {
    PPF_fixture = 835,                // µmol/s per fixture
    quantity = 52,                    // number of fixtures
    PPE_baseline = DEFAULTS.PPE_BASELINE,
    EE_watts = DEFAULTS.EE_WATTS,
    hours = DEFAULTS.HOURS,
    WHF = DEFAULTS.WHF,
    rate = DEFAULTS.RATE
  } = input;

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
