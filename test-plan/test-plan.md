# Test Plan – Companies House Technical Assessment

## 1. Introduction
This test plan outlines the functional testing and automation approach used for the Companies House Senior Test Engineer technical assessment. The aim is to demonstrate a practical, risk-based approach to quality assurance, covering exploratory testing, prioritisation, targeted automation, and defect identification.

Testing was carried out against the demo website:
https://www.demoblaze.com/index.html  
The site represents a simple e-commerce application with dynamic UI behaviour. Testing focuses on functional areas that directly affect users and core system behaviour.

---

## 2. Testing Objectives
Primary objectives:
- Confirm core, business-critical user journeys
- Ensure functional flows behave as expected
- Identify defects affecting reliability, usability, and confidence
- Reduce risk in high-impact areas
- Provide clear documentation of coverage and issues found
- Produce maintainable and understandable automated tests

---

## 3. Functional Testing Strategy

### 3.1 Types of Functional Tests Prioritised

**Core User Journey Testing**
- User registration (sign-up)
- User authentication (login/logout)
- Product browsing and navigation
- Product detail viewing
- Add-to-cart functionality
- Checkout and order placement

**Regression-Style Testing**
- Automated tests are designed to act as a regression-style safety net for core journeys
- In this assessment, regression is demonstrated conceptually through stable, repeatable automated scenarios
- The demo site is static, but the tests illustrate how regression protection would be applied in a live environment

**Exploratory Testing**
- Manual exploratory testing to uncover defects, inconsistencies, and edge cases
- Investigation of unexpected behaviour observed during normal user flows

**Smoke Testing**
- Lightweight checks to confirm the application loads and core functionality is available

### 3.2 Out-of-Scope Testing Areas
The following areas are intentionally excluded due to assessment scope and time constraints:
- Performance, load, and stress testing
- Security and penetration testing
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
- Core transactional behaviour
- Direct impact on conversion

**Checkout / Order Placement**
- End-to-end transactional flow
- High financial and reputational risk if broken

### 4.2 Medium-Risk Areas
**Product Browsing & Navigation**
- Affects product discovery and overall usability

**Cart Management**
- Impacts conversion and user confidence

### 4.3 Low-Risk Areas
**UI Presentation and Styling**
- Visual inconsistencies without functional impact

**Non-critical Navigation**
- Informational or non-transactional flows

---

## 5. Test Approach

### 5.1 Manual & Exploratory Testing
Manual and exploratory testing was performed first to:
- Understand real application behaviour
- Validate core user journeys
- Identify defects and unstable areas
- Inform which scenarios were suitable for automation

Findings from this phase directly influenced automation scope and defect reporting.

### 5.2 Automation Approach
Automation is applied selectively to:
- High-value, business-critical journeys
- Stable and repeatable scenarios
- Core regression-style flows

Automation is used to build confidence in key behaviour rather than provide broad or exhaustive coverage.

### 5.3 Structure-Based Testing
For clarity and traceability, the application is divided into functional areas:
- Authentication
- Product catalogue
- Product detail pages
- Cart
- Checkout
- Navigation

This mirrors real-world QA practices and supports clear coverage mapping.

### 5.4 Testing Philosophy
- Risk reduction over test quantity
- Business value over technical complexity
- Confidence over coverage metrics
- Maintainability and clarity over speed

---

## 6. Automation Strategy

### 6.1 Automation Objectives
- Validate core user journeys
- Provide fast, repeatable feedback
- Reduce risk in high-impact areas
- Demonstrate a maintainable automation approach

### 6.2 Automation Selection Criteria
Tests are selected based on:
- Business criticality
- User impact
- Functional stability
- Repeatability
- Regression value
- Low flakiness risk

### 6.3 Scope of Automation
Automated coverage includes:
- User registration (sign-up)
- User authentication (login)
- Homepage availability and catalogue render (sanity check)
- Add-to-cart behaviour
- Checkout and order placement

Excluded from automation:
- Visual styling and layout checks
- Non-critical informational flows
- Exploratory scenarios

### 6.4 Automation Tooling
**Playwright** is used for UI automation due to:
- Cross-browser support
- Strong handling of asynchronous UI behaviour
- Fast execution
- Reliable selector strategies
- Built-in reporting and diagnostics

### 6.5 Automation Design Principles
- Readable tests with clear intent
- Stability over breadth
- Independent execution
- Low maintenance overhead

---

## 7. Tools & Frameworks
- **Playwright** – UI automation framework
- **Node.js / npm** – Dependency management
- **JavaScript / TypeScript** – Test implementation
- **GitHub** – Version control and repository hosting
- **Markdown (.md)** – Test documentation and defect reporting

Defects are documented using a structured format aligned with real-world tracking tools (e.g. Jira or Azure DevOps).

---

## 8. Test Environment

### 8.1 Browser Coverage
Testing is executed using mainstream browser engines:
- **Chromium-based browsers** (via Playwright Chromium)
- **Mozilla Firefox**
- **WebKit (Safari equivalent)**

These engines provide broad coverage of real-world user behaviour. Niche browsers are excluded to maintain focus but some are covered due to being Chromium based (Brave, Zen)

### 8.2 Environment Assumptions & Constraints
- Public shared demo environment
- No backend or database access
- No environment reset capability
- No guaranteed test data isolation

Tests are designed with these constraints in mind to minimise flakiness.

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
- User journeys inferred from observed application behaviour
- UI-level testing sufficient for assessment goals
- Observed defects considered valid for reporting

Testing decisions are made with these assumptions in mind to ensure realistic and maintainable outcomes.
