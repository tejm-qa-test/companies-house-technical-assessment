# Test Plan – Companies House Technical Assessment

## 1. Introduction
This test plan outlines the functional testing and automation strategy for the Companies House Senior Test Engineer technical assessment. The objective is to demonstrate a structured, risk-based approach to quality assurance, including test planning, prioritisation, exploratory testing, targeted automation, and defect identification.

Testing is performed against the demo website:
https://www.demoblaze.com/index.html  
This site represents a sample e-commerce application. The plan prioritises high-value functional areas that impact business operations, user experience, and system reliability.

---

## 2. Testing Objectives
Primary objectives:
- Validate core business-critical user journeys
- Ensure key functional flows behave as expected
- Identify defects impacting usability, reliability, and business value
- Reduce risk in high-impact system areas
- Demonstrate a structured and professional testing approach

Secondary objectives:
- Demonstrate clear test reasoning and prioritisation
- Produce maintainable, understandable automated tests
- Provide clear documentation of test coverage and issues found

---

## 3. Functional Testing Strategy

### 3.1 Types of Functional Tests Prioritised

**Core User Journey Testing**
- User registration (sign-up)
- User authentication (login/logout)
- Product browsing and navigation
- Product detail viewing
- Add to cart functionality
- Checkout and order placement

**Regression-Style Testing**
- Core automated tests are designed to act as a regression-style safety net
- In the context of this assessment, regression testing is demonstrated conceptually through automated coverage of critical user journeys
- The demo website is static; however, the tests illustrate how regression protection would be implemented in a live environment

**Exploratory Testing**
- Manual exploratory testing to identify defects, inconsistencies, and edge cases
- Investigation of unexpected behaviour and usability issues

**Smoke Testing**
- Basic validation that the application is accessible and key features are available

### 3.2 Out-of-Scope Testing Areas
The following areas are intentionally excluded due to assessment scope and time constraints:
- Performance, load, and stress testing
- Security testing
- Accessibility testing
- Visual regression testing
- API and backend integration testing

---

## 4. Risk-Based Prioritisation
Testing effort is prioritised based on business impact, user impact, and likelihood of failure.

### 4.1 High-Risk Areas
**User Authentication (Sign-up & Login)**
- Direct impact on user access and trust

**Add to Cart**
- Core transactional functionality
- Direct revenue impact

**Checkout / Order Placement**
- Business-critical flow
- High financial and reputational risk if broken

### 4.2 Medium-Risk Areas
**Product Browsing & Navigation**
- Affects product discovery and user experience

**Cart Management**
- Impacts conversion and usability

### 4.3 Low-Risk Areas
**UI Presentation and Styling**
- Visual issues without functional impact

**Non-critical Navigation Links**
- Informational or non-transactional flows

---

## 5. Test Approach

### 5.1 Manual & Exploratory Testing
Initial manual and exploratory testing is used to:
- Understand application behaviour
- Validate core journeys
- Identify defects and unstable areas
- Inform automation decisions

Findings from exploratory testing are documented and used to prioritise automation effort.

### 5.2 Automation Approach
Automation is applied selectively to:
- High-value, business-critical journeys
- Stable, repeatable scenarios
- Core regression-style flows

Automation is used to build confidence and reduce risk rather than achieve exhaustive coverage.

### 5.3 Structure-Based Testing
The application is logically divided into functional areas:
- Authentication
- Product Catalogue
- Product Detail Pages
- Cart
- Checkout
- Navigation

This supports clear coverage mapping, organisation, and traceability.

### 5.4 Testing Philosophy
- Risk reduction over test quantity
- Business value over technical complexity
- Confidence-building over coverage metrics
- Maintainability and clarity over speed

---

## 6. Automation Strategy

### 6.1 Automation Objectives
- Validate business-critical user journeys
- Provide fast, repeatable feedback
- Reduce risk in high-impact areas
- Demonstrate a maintainable automation approach

### 6.2 Automation Selection Criteria
Tests are selected based on:
- Business criticality
- User impact
- Stability
- Repeatability
- Regression value
- Low flakiness risk

### 6.3 Scope of Automation
Automated coverage includes:
- User registration (sign-up)
- User authentication (login)
- Homepage availability and catalogue render (sanity/smoke check)
- Add to cart
- Checkout / order placement

Excluded from automation:
- Visual styling and layout checks
- Non-critical informational flows
- Exploratory scenarios

### 6.4 Automation Tooling
**Playwright** is used for UI automation due to:
- Cross-browser support
- Reliable handling of asynchronous behaviour
- Fast execution
- Clear selector strategies
- Strong reporting and documentation

### 6.5 Automation Design Principles
- Readability over complexity
- Stability over coverage
- Clear intent per test
- Independent, maintainable tests

---

## 7. Tools & Frameworks
- **Playwright** – UI automation framework
- **Node.js / npm** – Dependency management
- **JavaScript / TypeScript** – Test implementation
- **GitHub** – Version control and repository hosting
- **Markdown (.md)** – Test documentation and defect reporting

Issues are documented in a structured format mirroring real-world defect tracking systems.

---

## 8. Test Environment

### 8.1 Browser Coverage
Testing is executed using mainstream browser engines:
- **Chromium-based browsers** (via Playwright Chromium)
- **Mozilla Firefox**
- **WebKit (Safari equivalent)**

These provide broad market coverage. Niche browsers are excluded to maintain focus.

### 8.2 Environment Assumptions & Constraints
- Public shared demo environment
- No backend or database access
- No environment reset capability
- No guaranteed test data isolation

Test design accounts for these constraints to minimise flakiness.

---

## 9. Entry & Exit Criteria

### Entry Criteria
- Application accessible
- Scope and objectives defined
- Test environment available
- Automation framework configured

### Exit Criteria
- Core user journeys tested
- Automated tests implemented and passing
- Exploratory testing completed
- Defects documented
- Assessment deliverables finalised

---

## 10. Assumptions & Constraints
- No formal requirements or wireframes provided
- User journeys inferred from application behaviour
- UI-level testing sufficient for assessment goals
- Observed defects considered valid for reporting

Testing decisions are made with these assumptions in mind to ensure realistic, maintainable outcomes.
