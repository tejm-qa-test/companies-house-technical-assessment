# Issues Found

This document captures issues identified during exploratory testing of the demo site:  
https://www.demoblaze.com/index.html

The application is a public demo and exhibits intentional inconsistencies. Issues are documented in a structured, professional format to support clear communication, prioritisation, and reproducibility. Severity and priority reflect business impact rather than technical effort.

---

## DEF-01: Inconsistent product description truncation on product cards

### Environment
- Site: https://www.demoblaze.com/index.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to the homepage
2. Observe the product cards displayed
3. Compare description text across multiple products

### Expected Result
- Product descriptions should be presented consistently
- Descriptions should either:
  - End at a full sentence boundary, or
  - Be truncated consistently with a uniform length or ellipsis

### Actual Result
- Some product descriptions end cleanly at sentence boundaries
- Others are cut off mid-sentence
- Preview lengths are inconsistent across cards

### Severity
Low

### Priority
P4

### Impact
- Visual inconsistency on the catalogue page
- Reduces perceived polish and professionalism
- Minor negative impact on user experience

### Notes / Evidence
- Observed consistently across multiple homepage products
- Likely caused by inconsistent truncation logic

---

## DEF-02: Product description heading lacks visual hierarchy on product detail pages

### Environment
- Site: https://www.demoblaze.com/prod.html?idp_=3
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to a product detail page (e.g. Nexus 6)
2. Observe the product description section below the price

### Expected Result
- Section headings should have clear visual hierarchy
- Headings should be visually distinct from body text

### Actual Result
- "Product description" appears visually similar to body text
- No clear separation between heading and content

### Severity
Low

### Priority
P4

### Impact
- Reduces readability and scannability
- Diminishes perceived UI quality

### Notes / Evidence
- Observed consistently across product detail pages
- Styling / design consistency issue

---

## DEF-03: Cart table headers are unclear and inconsistent

### Environment
- Site: https://www.demoblaze.com/cart.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Add a product to the cart
2. Navigate to the Cart page
3. Observe the table headers

### Expected Result
- Table headers should be clear and descriptive
- Column labels should accurately describe content

### Actual Result
- "Pic" used instead of "Image" or "Picture"
- "Title" used for product name, which is unclear in this context
- Delete/action column labelled only as "x"

### Severity
Low

### Priority
P4

### Impact
- Reduced clarity and usability
- Increases cognitive load
- Cart UI feels unpolished

### Notes / Evidence
- Observed consistently on the cart page

---

## DEF-04: Cart page lacks price currency and product navigation links

### Environment
- Site: https://www.demoblaze.com/cart.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Add a product to the cart
2. Navigate to the Cart page
3. Observe the price column and product name/image

### Expected Result
- Prices should display a currency indicator
- Product name and/or image should link back to the product detail page

### Actual Result
- Prices are displayed without currency
- Product name and image are not clickable

### Severity
Medium

### Priority
P3

### Impact
- Price ambiguity may reduce user trust
- Users cannot easily return to product details
- Increased friction in the purchase journey

### Notes / Evidence
- Observed for all cart items

---

## DEF-05: Product description contains unintended placeholder text ("REVIEW")

### Environment
- Site: https://www.demoblaze.com/prod.html?idp_=9
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to the Sony vaio i7 product page
2. Observe the description text

### Expected Result
- Product descriptions should contain only final, customer-facing content

### Actual Result
- Description begins with the word "REVIEW"
- Appears to be internal or placeholder content

### Severity
Low

### Priority
P4

### Impact
- Reduces content quality and professionalism
- May reduce user confidence in product information

### Notes / Evidence
- Observed consistently on this product page

---

## DEF-06: Weak authentication allows login using common credential pair (`admin` / `admin`)

### Environment
- Site: https://www.demoblaze.com/index.html
- Area: Login modal
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to the homepage
2. Open the login modal
3. Enter:
   - Username: `admin`
   - Password: `admin`
4. Submit the login form

### Expected Result
- Highly guessable credentials should not authenticate
- Invalid credentials should be rejected with an error message

### Actual Result
- Login succeeds
- User is transitioned to an authenticated state ("Welcome admin")

### Severity
High

### Priority
P1

### Impact
- Enables unauthorised access via guessable credentials
- Increases risk of credential stuffing or brute-force attacks
- Undermines trust in authentication controls

### Notes / Evidence
- Reproduced consistently
- Appears to be customer authentication rather than a protected admin account

---

## DEF-07: Checkout allows order placement with invalid or insufficient customer data

### Environment
- Site: https://www.demoblaze.com/cart.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Add a product to the cart
2. Click **Place Order**
3. Enter a single character for **Name** and **Credit card**
4. Leave remaining fields empty
5. Submit the purchase

### Expected Result
- Required fields should enforce meaningful validation
- Invalid or insufficient data should block order placement

### Actual Result
- Minimal input is accepted
- Order is successfully placed

### Severity
High

### Priority
P2

### Impact
- Orders can be created with meaningless customer data
- Risk of fulfilment issues or fraud
- Reduces trust in checkout integrity

### Notes / Evidence
- Reproduced consistently
- Indicates missing form validation

---

## DEF-08: Multiple purchases can be submitted from a single checkout (duplicate transaction risk)

### Environment
- Site: https://www.demoblaze.com/cart.html
- Flow: Place Order modal → Success confirmation
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Complete checkout and submit an order
2. When the success popup appears, click repeatedly in the area of the underlying **Purchase** button

### Expected Result
- UI should block further interaction after submission
- Only one order should be created per checkout

### Actual Result
- Underlying **Purchase** button remains clickable
- Each click generates a new Order ID

### Severity
Critical

### Priority
P1

### Impact
- Duplicate orders and potential duplicate charges
- Severe financial and reputational risk
- Violates basic transactional integrity

### Notes / Evidence
- Reproduced consistently
- Multiple Order IDs generated from a single checkout attempt

---

## DEF-09: Contact form allows submission with all fields empty

### Environment
- Site: https://www.demoblaze.com/index.html
- Area: Contact modal
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Open the Contact modal
2. Leave all fields empty
3. Submit the form

### Expected Result
- Mandatory fields should be enforced
- Validation errors should be shown

### Actual Result
- Form submits successfully with no input

### Severity
Medium

### Priority
P3

### Impact
- Allows meaningless submissions
- Reduces usefulness of contact messages
- Increases operational noise

### Notes / Evidence
- Reproduced consistently

---

## DEF-10: Logged-in username appears interactive but performs no action

### Environment
- Site: https://www.demoblaze.com/index.html
- Area: Top navigation (logged-in state)
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Log in
2. Hover over and click the displayed username

### Expected Result
- Interactive elements should perform a clear action
- Non-interactive text should not appear clickable

### Actual Result
- Username highlights on hover
- Clicking performs no action

### Severity
Low

### Priority
P4

### Impact
- Misleading UI behaviour
- Minor usability confusion

### Notes / Evidence
- Observed consistently when logged in

---

## DEF-11: Invalid product ID renders broken product page and misleading add-to-cart confirmation

### Environment
- Site: https://www.demoblaze.com/prod.html
- Example URL: https://www.demoblaze.com/prod.html?idp_=16
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to a product page with an invalid ID
2. Observe page content
3. Click **Add to cart**
4. Navigate to the Cart page

### Expected Result
- Invalid product IDs should be handled gracefully
- User should see an error or be redirected
- Add-to-cart should be disabled

### Actual Result
- Product details render as "undefined"
- Add-to-cart shows a success confirmation
- No item appears in the cart

### Severity
High

### Priority
P2

### Impact
- Misleading success messaging
- Broken product pages exposed via URL manipulation
- Undermines trust in data integrity and system reliability

### Notes / Evidence
- Reproduced consistently with out-of-range IDs

## DEF-12: Order confirmation displays incorrect month value (zero-indexed date)

### Environment
- Site: https://www.demoblaze.com/cart.html
- Flow: Checkout → Purchase confirmation
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Add any product to the cart  
2. Navigate to **Cart** and click **Place Order**  
3. Complete the purchase form with valid values  
4. Click **Purchase**  
5. Observe the date displayed in the order confirmation message  

### Expected Result
- The order confirmation date should display a correctly formatted, human-readable date  
- Month values should follow standard calendar conventions (e.g. January = 1)

### Actual Result
- The confirmation date displays an incorrect month value  
- Example observed: `28/0/2026`, where `0` appears to represent January  
- This suggests the month value is zero-indexed and not adjusted for display

### Severity
Low

### Priority
P4

### Impact
- Causes user-facing confusion in order confirmation details  
- Reduces perceived data accuracy and professionalism  
- May undermine user trust in order records or transaction details  

### Notes / Evidence
- Likely caused by displaying a zero-indexed month value directly
- Reproduced consistently during checkout testing  