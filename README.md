# Companies House – Senior Test Engineer Technical Assessment

This repository contains the test artefacts produced for the Companies House Senior Test Engineer technical assessment.

The work demonstrates a structured, risk-based approach to testing, combining:
- Test planning
- Exploratory testing and defect identification
- Targeted UI automation using Playwright

---

## Repository Structure

- `test-plan/`  
  Test strategy, scope, and approach

- `test-cases/`  
  Automated test case documentation

- `issues/`  
  Defects identified during exploratory testing

- `automation/`  
  Playwright UI automation suite

---

## Automation (Playwright)

Automated tests cover a small number of high-value, business-critical user journeys.

### Prerequisites
- Node.js (v18+ recommended)

### Run Tests

From the `automation/` directory:

```bash
npm install
npx playwright test


