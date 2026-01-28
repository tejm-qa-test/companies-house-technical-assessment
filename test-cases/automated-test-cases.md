# Automated Test Case Documentation

This document describes the automated test cases implemented as part of the Companies House Senior Test Engineer technical assessment.

Automation is intentionally limited to a small number of stable, high-value scenarios that provide confidence in core system behaviour. Subjective user experience, visual presentation, and content quality checks are deliberately covered through exploratory testing rather than automation.

---

## ATC-01: Sign-up and authentication

### Scenario Description
Verify that a new user can register and then authenticate using the newly created credentials.

### Test Steps
1. Navigate to the application homepage
2. Open the sign-up modal
3. Enter a unique username and password
4. Submit the sign-up form and acknowledge confirmation
5. Open the login modal
6. Log in using the newly created credentials
7. Confirm an authenticated UI state is displayed

### Expected Result
- A sign-up confirmation is displayed (e.g. success message; if the username already exists, an appropriate message is shown)
- The user can successfully log in using the new credentials
- The UI reflects an authenticated state (e.g. “Welcome <username>”)

### Reason for Automation
Account creation and authentication are core access pathways. Automating the full account lifecycle provides regression-style coverage over a high-impact journey and validates that dependent functionality can be exercised reliably.

### Risk Covered
- User onboarding failure
- Authentication availability
- Loss of user confidence if access is unreliable

---

## ATC-02: Login security validation (known risk)

### Scenario Description
Validate login behaviour using a highly guessable credential pair to demonstrate a security weakness identified during exploratory testing.

### Test Steps (High Level)
1. Navigate to the application homepage
2. Open the login modal
3. Enter credentials `admin` / `admin`
4. Submit the login form
5. Confirm an authenticated UI state is displayed

### Expected Result
- The user is able to authenticate using `admin` / `admin`
- The UI reflects an authenticated state (e.g. “Welcome admin”)

### Reason for Automation
This test provides repeatable, automated evidence of a high-risk authentication weakness identified during exploratory testing and documented as **DEF-06**. Automating this behaviour ensures the issue remains visible and verifiable.

### Risk Covered
- Unauthorised access
- Credential guessing / credential stuffing
- Erosion of trust in authentication controls

---

## ATC-03: Homepage navigation sanity check (catalogue renders)

### Scenario Description
Verify that the application homepage loads successfully and that product catalogue content is rendered.

### Test Steps (High Level)
1. Navigate to the homepage
2. Confirm primary navigation elements are present
3. Confirm at least one product card is displayed

### Expected Result
- Homepage loads without error
- Product catalogue content is displayed

### Reason for Automation
This test acts as a lightweight sanity check to confirm basic site availability and rendering before executing deeper functional journeys. Visual styling and subjective UX checks are intentionally excluded.

### Risk Covered
- Application availability failures
- Broken homepage rendering
- Upstream issues affecting all user journeys

---

## ATC-04: Add product to cart

### Scenario Description
Verify that a user can add a product to the shopping cart and that the cart reflects the selected item.

### Test Steps (High Level)
1. Navigate to the homepage
2. Open a product detail page
3. Select **Add to cart** and accept confirmation
4. Navigate to the cart
5. Confirm the product appears in the cart

### Expected Result
- A “Product added” confirmation is displayed
- The cart contains the selected product

### Reason for Automation
Add-to-cart behaviour is a critical step in the purchase journey. Automating this scenario protects a key conversion point and provides confidence in core transactional behaviour.

### Risk Covered
- Cart functionality failure
- Conversion impact
- Revenue risk

---

## ATC-05: Checkout validation (order placement)

### Scenario Description
Verify that a user can place an order using the checkout flow and receives confirmation.

### Test Steps (High Level)
1. Add a product to the cart
2. Navigate to the cart and select **Place Order**
3. Enter order details
4. Submit the purchase
5. Confirm a success message and Order ID are displayed

### Expected Result
- Order is placed successfully
- A confirmation message is displayed, including an Order ID

### Reason for Automation
Checkout represents the highest-value end-to-end journey in the application. Automation focuses on validating transactional integrity and confirmation behaviour, while presentation and broader UX considerations are assessed manually.

### Risk Covered
- Financial impact
- Transaction failures
- User trust and satisfaction
