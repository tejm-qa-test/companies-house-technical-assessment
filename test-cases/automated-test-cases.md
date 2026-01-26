# Automated Test Case Documentation

This document describes the automated test cases implemented as part of the Companies House Senior Test Engineer technical assessment. The selected test cases focus on high-value, business-critical user journeys that provide the greatest confidence and risk reduction when automated.

Automation is intentionally limited to a small number of stable, repeatable scenarios rather than broad functional coverage.

---

## ATC-01: User Sign-Up

### Scenario Description
Verify that a new user can successfully register using the sign-up functionality.

### Test Steps (High Level)
1. Navigate to the application homepage
2. Open the sign-up modal
3. Enter a unique username and password
4. Submit the sign-up form

### Expected Result
- The user account is created successfully
- A confirmation message is displayed
- The user is able to log in with the newly created credentials

### Reason for Automation
User registration is a critical entry point to the application. Automating this scenario ensures that new users can reliably create accounts and reduces risk in a high-impact area.

### Risk Covered
- User access to the system
- User onboarding failure
- Reputational impact if registration is broken

---

## ATC-02: User Login

### Scenario Description
Verify that an existing user can successfully log in using valid credentials.

### Test Steps (High Level)
1. Navigate to the application homepage
2. Open the login modal
3. Enter valid user credentials
4. Submit the login form

### Expected Result
- The user is logged in successfully
- The UI reflects the authenticated state

### Reason for Automation
Authentication is a core system capability. Automating login provides fast regression coverage for a business-critical flow and supports dependent test scenarios.

### Risk Covered
- User access
- Session handling
- Core functionality availability

---

## ATC-03: Product Browsing and Navigation

### Scenario Description
Verify that users can browse the product catalogue and view product details.

### Test Steps (High Level)
1. Navigate to the homepage
2. Select a product category
3. Open a product detail page

### Expected Result
- Product list loads correctly
- Product detail page displays expected information

### Reason for Automation
Product discovery is essential for user engagement. Automating this flow ensures navigation stability and basic catalogue functionality.

### Risk Covered
- Product visibility
- Navigation failures
- User experience degradation

---

## ATC-04: Add Product to Cart

### Scenario Description
Verify that a user can add a product to the shopping cart.

### Test Steps (High Level)
1. Navigate to a product detail page
2. Select "Add to Cart"
3. Accept any confirmation prompts

### Expected Result
- Product is added to the cart
- Cart reflects the selected item

### Reason for Automation
Add-to-cart functionality directly impacts revenue. Automating this scenario protects a core business transaction.

### Risk Covered
- Revenue loss
- Cart functionality failure
- Conversion impact

---

## ATC-05: Checkout and Order Placement

### Scenario Description
Verify that a user can successfully place an order using the checkout flow.

### Test Steps (High Level)
1. Navigate to the cart
2. Initiate the checkout process
3. Enter required order information
4. Submit the order

### Expected Result
- Order is placed successfully
- Confirmation is displayed

### Reason for Automation
Checkout is the highest-value user journey. Automating this scenario provides maximum confidence in revenue-generating functionality.

### Risk Covered
- Financial impact
- Order processing failure
- User trust and satisfaction

