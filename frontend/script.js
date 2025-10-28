// Get references to the form and the results area
const form = document.getElementById('calcForm');
const resultsDiv = document.getElementById('results');

// When the form is submitted, stop the page from reloading
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  // Collect input values from the form
  const data = {
    PPF_fixture: parseFloat(document.getElementById('ppf').value),
    quantity: parseInt(document.getElementById('qty').value),
    PPE_baseline: parseFloat(document.getElementById('ppe').value),
    EE_watts: parseFloat(document.getElementById('watts').value),
    hours: parseFloat(document.getElementById('hours').value),
    WHF: parseFloat(document.getElementById('whf').value),
    rate: parseFloat(document.getElementById('rate').value)
  };

  // Send this data to your backend API
  const res = await fetch('http://localhost:3000/api/rebate/calculate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  // Read the JSON response
  const result = await res.json();

  // Display results on the page
  resultsDiv.innerHTML = `
    <h3>Results</h3>
    <p><strong>PPF Total:</strong> ${result.PPF_total}</p>
    <p><strong>kWh Savings:</strong> ${result.kWh_savings}</p>
    <p><strong>Total Incentive:</strong> $${result.incentive}</p>
    <p><strong>Incentive per Fixture:</strong> $${result.incentive_per_fixture}</p>
  `;
});
