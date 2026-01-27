# Issues Found

This document captures issues identified during exploratory testing of the demo site:
https://www.demoblaze.com/index.html

The website is intentionally inconsistent in places. Issues are documented in a structured format to support clear communication and reproducibility.

---

## DEF-01: Inconsistent product description truncation on product cards

### Environment
- Site: https://www.demoblaze.com/index.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to the homepage
2. Observe the product cards displayed on the index page
3. Compare the product description text across multiple products

### Expected Result
- Product descriptions should be displayed consistently across all product cards
- Descriptions should either:
  - End at a full sentence boundary, or
  - Be truncated consistently with a uniform length or ellipsis

### Actual Result
- Some product descriptions end at a complete sentence
- Other product descriptions begin a new sentence which is cut off mid-way
- This results in inconsistent preview lengths and non-uniform presentation

### Severity
Low

### Priority
P4

### Impact
- Visual inconsistency on the product listing page
- Reduces perceived polish and professionalism of the UI
- May negatively impact user experience and brand perception

### Notes / Evidence
- Observed consistently across multiple products on the homepage
- Issue appears to be related to inconsistent content truncation logic

---

## DEF-02: Product description heading lacks visual hierarchy on product detail page

### Environment
- Site: https://www.demoblaze.com/prod.html?idp_=3
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to a product detail page (e.g. Nexus 6)
2. Observe the product description section below the price

### Expected Result
- Section headings (e.g. "Product description") should have clear visual hierarchy
- Heading should be visually distinct from body text (e.g. font size, weight, spacing)

### Actual Result
- "Product description" appears visually similar to body text
- Lack of clear hierarchy makes the section appear unstructured

### Severity
Low

### Priority
P4

### Impact
- Reduces readability and visual clarity
- Makes product information harder to scan
- Diminishes perceived UI quality and professionalism

### Notes / Evidence
- Observed consistently across product detail pages
- Appears to be a styling / design consistency issue

---

## DEF-03: Cart table headers are unclear and inconsistent

### Environment
- Site: https://www.demoblaze.com/cart.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Add a product to the cart
2. Navigate to the Cart page
3. Observe the table headers displayed above the cart items

### Expected Result
- Table headers should be clear, descriptive, and user-friendly
- Column headings should accurately describe the content (e.g. "Image", "Product name", "Price", "Actions")

### Actual Result
- "Pic" is used instead of a clearer label such as "Image" or "Picture"
- "Title" is displayed as a column header for the product name, which is confusing in this context
- The delete/action column header is represented only by "x", which lacks clarity

### Severity
Low

### Priority
P4

### Impact
- Reduces clarity and usability of the cart table
- Increases cognitive load for users
- Makes the cart appear unpolished and less intuitive

### Notes / Evidence
- Observed consistently when viewing the cart page
- Issue relates to content labelling and UX clarity rather than functionality

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
- Prices should clearly display a currency (e.g. $, £)
- Product name and/or image should act as a link back to the product detail page

### Actual Result
- Prices are displayed as numeric values without a currency indicator
- Product name and image are plain text/images and are not clickable

### Severity
Medium

### Priority
P3

### Impact
- Price ambiguity may cause user confusion or mistrust
- Users cannot easily navigate back to the product page from the cart
- Increases friction in the purchase journey

### Notes / Evidence
- Observed for all products added to the cart
- Navigation limitation affects overall user experience and efficiency


---

## DEF-05: Product description contains unintended placeholder text ('REVIEW')

### Environment
- Site: https://www.demoblaze.com/prod.html?idp_=9
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to the Sony vaio i7 product detail page
2. Observe the product description text

### Expected Result
- Product description should contain only customer-facing, finalised content
- No placeholder, review, or editorial text should be visible to users

### Actual Result
- The product description begins with the word "REVIEW"
- This appears to be internal or placeholder text unintentionally exposed to users

### Severity
Low

### Priority
P4

### Impact
- Reduces content quality and professionalism
- May reduce user trust in product information
- Suggests incomplete or unreviewed content

### Notes / Evidence
- Observed consistently on the Sony vaio i7 product page


---

## DEF-06: Weak authentication – common credential pair (`admin` / `admin`) allows successful login

### Environment
- Site: https://www.demoblaze.com/index.html
- Area: Customer login modal (“Log in” in top navigation)
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to the homepage
2. Click **Log in** in the top navigation
3. Enter the following credentials:
   - Username: `admin`
   - Password: `admin`
4. Click **Log in**

### Expected Result
- Login should validate credentials against a securely managed user account
- Highly guessable or weak credential pairs should not authenticate
- Invalid credentials should be rejected with a clear error message

### Actual Result
- Login succeeds using the highly guessable credential pair `admin` / `admin`
- The application transitions to a logged-in state (e.g. “Welcome admin” is displayed)

### Severity
High

### Priority
P1

### Impact
- Highly guessable credentials allow unauthorised access to an authenticated user session
- Increases risk of account compromise through credential stuffing or brute-force attacks
- Undermines trust in the application’s authentication controls

### Notes / Evidence
- Reproduced consistently using the credential pair `admin` / `admin`
- No evidence of role-based access; appears to be a customer account rather than a dedicated admin area
- Issue relates specifically to customer authentication security



---

## DEF-07: Checkout allows order placement with invalid or insufficient customer data

### Environment
- Site: https://www.demoblaze.com/cart.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Add a product to the cart
2. Navigate to the Cart page
3. Click **Place Order**
4. Enter a single character (e.g. `1`) for **Name** and **Credit card**
5. Leave all other fields empty
6. Click **Purchase**

### Expected Result
- Mandatory fields should enforce meaningful validation
- Required fields should not accept clearly invalid values
- Order placement should be blocked with validation errors

### Actual Result
- Only Name and Credit card fields are required
- Single-character input is accepted as valid data
- Order is successfully placed with insufficient customer information

### Severity
High

### Priority
P2

### Impact
- Orders can be placed with invalid or meaningless customer data
- Risk of unusable orders, failed fulfilment, or fraud
- Reduces data integrity and trust in the checkout process

### Notes / Evidence
- Reproduced consistently using minimal input values
- Indicates missing input validation on checkout fields

---

## DEF-08: Multiple purchases can be submitted by clicking underlying Purchase button (duplicate transaction risk)

### Environment
- Site: https://www.demoblaze.com/cart.html
- Flow: Place Order modal → Success confirmation popup
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Add any product to the cart
2. Navigate to **Cart** and click **Place Order**
3. Complete the form with any values and click **Purchase**
4. When the success confirmation popup appears, click repeatedly in the area where the **Purchase** button exists on the underlying modal (behind the popup)

### Expected Result
- After submitting a purchase, the UI should prevent duplicate submissions
- The underlying modal should be disabled/blocked (true modal behaviour)
- Only a single order should be created per checkout attempt

### Actual Result
- The underlying **Purchase** button remains clickable beneath the success popup
- Each additional click submits another purchase
- A **new Order ID is generated for each click**, resulting in multiple orders being created from a single checkout flow

### Severity
Critical

### Priority
P1

### Impact
- High risk of duplicate orders and charges
- Severe financial and reputational impact
- Enables abuse of the checkout process
- Violates basic transactional integrity expectations

### Notes / Evidence
- Reproduced consistently
- Screen recording demonstrates multiple Order IDs being generated from repeated clicks


---

## DEF-09: Contact form allows submission with all fields empty

### Environment
- Site: https://www.demoblaze.com/index.html
- Area: Contact modal ("Contact" in top navigation)
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to the homepage
2. Click **Contact** in the top navigation
3. Leave all fields empty (Email, Name, Message)
4. Click **Send message**

### Expected Result
- Mandatory fields should be enforced
- Form submission should be blocked when required fields are empty
- User should be shown clear validation messages

### Actual Result
- Form submits successfully with all fields empty
- No validation or error messaging is displayed

### Severity
Medium

### Priority
P3

### Impact
- Allows meaningless or empty messages to be submitted
- Reduces usefulness of contact requests
- Increases noise and operational overhead

### Notes / Evidence
- Reproduced consistently with all fields left blank

---

## DEF-10: Logged-in username appears interactive but performs no action

### Environment
- Site: https://www.demoblaze.com/index.html
- Area: Top navigation bar (logged-in state)
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Log in as any user
2. Observe the top navigation displaying "Welcome <username>"
3. Hover over the username text
4. Click the username

### Expected Result
- If the username appears interactive, clicking it should perform a clear action (e.g. open profile, account page)
- Alternatively, non-interactive text should not present hover or clickable affordances

### Actual Result
- Username text highlights on hover, implying interactivity
- Clicking the username performs no action

### Severity
Low

### Priority
P4

### Impact
- Misleading UI behaviour
- Reduces clarity and usability
- Creates minor user confusion

### Notes / Evidence
- Observed consistently when logged in


---

## DEF-11: Invalid product ID renders undefined product page and allows add-to-cart action

### Environment
- Site: https://www.demoblaze.com/prod.html
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Manually navigate to a product URL with an out-of-range ID (e.g. https://www.demoblaze.com/prod.html?idp_=16)
2. Observe the product detail page content
3. Click **Add to cart**
4. Navigate to the Cart page

### Expected Result
- Invalid or non-existent product IDs should be handled gracefully
- User should be shown an error message or redirected (e.g. 404 / product not found)
- Add-to-cart action should be disabled for invalid products

### Actual Result
- Product detail page renders with values displayed as "undefined" (name, price, description, image)
- User can click **Add to cart** and receives a success confirmation ("Product added")
- No corresponding item appears in the cart

### Severity
High

### Priority
P2

### Impact
- Broken product pages are exposed to users via URL manipulation
- Add-to-cart confirmation is misleading, indicating success when no product is actually added
- Undermines trust in product data integrity and system reliability
- Indicates missing validation and error handling for invalid product IDs

### Notes / Evidence
- Tested with valid IDs (1–15) and invalid ID (16)
- Behaviour confirmed does not affect existing valid cart items


---

## DEF-11: Invalid product ID displays "undefined" product page and allows add-to-cart confirmation

### Environment
- Site: https://www.demoblaze.com/prod.html
- Example URL: https://www.demoblaze.com/prod.html?idp_=16
- Browser(s): Chrome, Safari
- OS: macOS

### Steps to Reproduce
1. Navigate to a product detail page with an invalid/non-existent product ID (e.g. `idp_=16`)
2. Observe the page content (title, price, description)
3. Click **Add to cart**
4. Observe the confirmation message
5. Navigate to **Cart**

### Expected Result
- Invalid product IDs should be handled gracefully
- User should see a clear "Product not found" message or be redirected to the catalogue
- Add-to-cart should be disabled or blocked for invalid products

### Actual Result
- Product page renders with "undefined" values (title/price/description)
- Clicking **Add to cart** shows a success confirmation ("Product added")
- No corresponding item appears in the cart

### Severity
High

### Priority
P2

### Impact
- Confusing and misleading user experience (success message without actual cart change)
- Indicates missing validation/handling for invalid product IDs
- Potential risk of data integrity issues if backend/cart behaviour changes

### Notes / Evidence
- Reproduced consistently with `idp_` values beyond the product range (e.g. 16)
- Screenshot evidence captured showing "undefined" product details and add-to-cart confirmation

