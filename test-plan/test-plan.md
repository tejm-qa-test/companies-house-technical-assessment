# Test Plan – Companies House Technical Assessment

## 1. Introduction
This test plan outlines the functional testing and automation strategy for the Companies House Senior Test Engineer technical assessment. The objective of this assessment is to demonstrate a structured approach to quality assurance, including test planning, prioritisation, risk-based testing, automation strategy, and defect identification.

The scope of testing is focused on the demo website: https://www.demoblaze.com/index.html, which represents a sample e-commerce application. The test plan is designed to prioritise high-value functional areas that impact business operations, user experience, and system reliability.

---

## 2. Testing Objectives
The primary objectives of testing are:
- To validate core business-critical user journeys
- To ensure key functional flows behave as expected
- To identify defects that impact usability, reliability, and business value
- To reduce risk in high-impact system areas
- To demonstrate a structured and professional testing approach

Secondary objectives include:
- Demonstrating clear test reasoning and prioritisation
- Producing maintainable and understandable automated tests
- Providing clear documentation of test coverage and issues found

---

## 3. Functional Testing Strategy
### 3.1 Types of Functional Tests Prioritised
The following functional test types are prioritised for this assessment:

**Core User Journey Testing**
- User registration (sign-up)
- User authentication (login/logout)
- Product browsing and navigation
- Product selection and detail viewing
- Add to cart functionality
- Checkout and order placement

**Regression Testing**
- Core automated tests are designed to act as a regression suite
- In the context of this assessment, regression testing is demonstrated through automated coverage of critical user journeys
- This represents how functionality would be protected against future changes in a live environment


**Exploratory Testing**
- Manual exploratory testing to identify inconsistencies, defects, and usability issues
- Investigation of edge cases and unexpected behaviour

**Smoke Testing**
- Basic validation that the application is accessible and key features are available

### 3.2 Out-of-Scope Testing Areas
The following areas are intentionally out of scope for this assessment due to time constraints and assessment focus:
- Performance testing
- Load and stress testing
- Security testing
- Accessibility testing
- Visual regression testing
- API and backend integration testing

These areas are excluded to maintain focus on functional quality and business value.

---

## 4. Risk-Based Prioritisation
Risk-based testing is used to prioritise testing effort based on business impact, user impact, and likelihood of failure. The focus is on areas where defects would cause the most harm to users or the business.

### 4.1 High-Risk Areas
The following areas are considered high risk and high priority:

**User Authentication (Sign-up & Login)**
- Impacts user access to the system
- Directly affects user trust and usability
- High business impact if broken

**Add to Cart Functionality**
- Core e-commerce functionality
- Direct impact on revenue
- Critical user journey

**Checkout / Order Placement**
- Business-critical flow
- Revenue generation path
- High reputational and financial impact if broken

### 4.2 Medium-Risk Areas
**Product Browsing & Navigation**
- Impacts user experience
- Affects product discovery
- Medium business impact

**Cart Management**
- Affects user experience
- Impacts conversion rates
- Medium business risk

### 4.3 Low-Risk Areas
**UI Presentation and Styling**
- Visual issues without functional impact

**Non-critical Navigation Links**
- Informational pages
- Non-transactional flows

### 4.4 Prioritisation Rationale
Testing effort is prioritised based on:
- Business impact
- User impact
- Likelihood of failure
- Complexity of functionality
- Criticality of the user journey

High-risk, high-impact areas are prioritised for both manual and automated testing to maximise confidence and risk reduction.

---

## 5. Test Approach
The testing approach for this assessment follows a layered strategy combining manual testing, exploratory testing, and targeted automation. This approach ensures both breadth of coverage and depth of quality assurance while remaining time-efficient and risk-focused.

### 5.1 Manual Testing
Initial manual testing is used to:
- Understand application behaviour
- Identify obvious functional defects
- Explore user flows
- Validate core journeys
- Discover inconsistencies and usability issues

Manual testing provides fast feedback and supports informed decisions on what should be automated.

### 5.2 Exploratory Testing
Exploratory testing is performed prior to automation to:
- Identify unstable areas of the application
- Discover defects not covered by scripted tests
- Understand real user behaviour patterns
- Identify edge cases and unexpected behaviour

Exploratory testing outputs are documented as defects and used to guide automation prioritisation. This ensures automation effort is focused on stable, high-value, and business-critical flows rather than fragile or inconsistent functionality.

### 5.3 Automation Approach
Automation is applied selectively and strategically rather than attempting broad coverage. The automation focus is on:
- High-value business-critical user journeys
- Stable functional paths
- Repeatable scenarios
- Core regression flows

Automation is used to provide confidence, regression protection, and fast feedback, rather than exhaustive test coverage.

### 5.4 Structure-Based Testing
The application is logically divided into functional sections to support structured and systematic testing. This mirrors real-world QA practices where systems are validated against designs, requirements, or wireframes.

The site is broken into the following functional areas:
- Authentication (Sign-up / Login)
- Product Catalogue
- Product Detail Pages
- Cart
- Checkout
- Navigation

This structure-based approach enables:
- Clear test coverage mapping
- Logical test grouping
- Traceability between user journeys and system areas
- Improved test organisation
- Scalable test design

### 5.5 Testing Philosophy
The overall testing philosophy is based on:
- Risk reduction over test quantity
- Business value over technical complexity
- Confidence-building over coverage metrics
- Maintainability over short-term speed
- Clarity and readability of tests

This approach ensures testing effort is aligned with quality goals and business impact.

---

## 6. Automation Strategy
Automation is applied selectively and strategically to maximise value, stability, and confidence while minimising maintenance overhead and test flakiness.

### 6.1 Automation Objectives
The objectives of automation are to:
- Validate business-critical user journeys
- Provide fast regression feedback
- Reduce risk in high-impact system areas
- Ensure repeatability of core functional tests
- Build confidence in core system stability

Automation is not intended to provide full coverage of all functionality, but rather targeted confidence in key areas.

### 6.2 Automation Selection Criteria
Tests are selected for automation based on the following criteria:
- Business criticality
- High user impact
- Stability of functionality
- Repeatability of scenarios
- Regression value
- Low flakiness risk

This ensures automation effort is invested in high-value, reliable scenarios.

### 6.3 Scope of Automation
The following areas are prioritised for automation:
- User registration (sign-up)
- User authentication (login)
- Product browsing and navigation
- Add to cart
- Checkout / order placement

The following areas are intentionally excluded from automation:
- Visual styling and UI layout
- Non-critical informational flows
- Experimental or unstable features
- Exploratory test scenarios

### 6.4 Automation Tooling
**Playwright** is selected as the automation framework for this assessment.

Reasons for selection:
- Modern, industry-adopted automation framework
- Cross-browser support
- Strong handling of asynchronous web behaviour
- Fast execution performance
- Reliable selector strategies
- Simple setup and configuration
- Good reporting capabilities
- Active community and documentation

Playwright supports scalable, maintainable, and reliable UI automation while remaining accessible for rapid development.

### 6.5 Automation Design Principles
Automated tests are designed to follow these principles:
- Readability over complexity
- Maintainability over speed
- Stability over coverage
- Clear intent per test
- Independent test execution
- Minimal coupling between tests

This ensures the automation suite remains robust, understandable, and easy to maintain.

---

## 7. Tools & Frameworks
This assessment uses a lightweight, practical toolset focused on clarity, accessibility, and professional presentation rather than enterprise tooling.

### 7.1 Automation Tools
- **Playwright** – UI automation framework for browser-based testing
- **Node.js / npm** – Dependency and project management
- **JavaScript / TypeScript** – Test implementation language

### 7.2 Version Control & Repository
- **GitHub** – Source control and project hosting
- Public/private repository access provided to assessors
- Structured repository layout for clarity and navigation

### 7.3 Test Documentation
- **Markdown (.md) documentation** for:
  - Test plan
  - Automated test case documentation
  - Automation strategy
  - Issues found

Markdown is used to ensure:
- Easy readability
- Version control compatibility
- Professional documentation structure
- Accessibility without specialist tools

### 7.4 Issue Reporting Approach
Issues are documented using a structured defect report format within the repository rather than spreadsheets or external tools.

Each issue includes:
- Unique ID
- Title / Summary
- Environment
- Steps to reproduce
- Expected result
- Actual result
- Severity
- Priority
- Impact
- Notes / observations

This approach reflects modern QA practices where defects are:
- Clearly structured
- Traceable
- Reproducible
- Communicable
- Professionally documented

This format mirrors real-world defect tracking systems (e.g. Jira, Azure DevOps) without requiring external platforms.

---

## 8. Test Environment
Testing is performed against the publicly available demo environment:
https://www.demoblaze.com/index.html

### 8.1 Browser Coverage
Testing is executed across commonly used mainstream browsers to reflect real-world user behaviour:
- **Google Chrome**
- **Mozilla Firefox**
- **Microsoft Edge**
- **Apple Safari**

These browsers provide broad market coverage and represent the majority of user traffic in real production environments.

Niche or alternative browsers (e.g. Brave, Opera) are excluded from scope to maintain focus on high-impact, widely used platforms.

### 8.2 Environment Assumptions
- The demo site is treated as a production-like environment
- No access to backend services or databases
- No control over test data state
- No environment configuration capabilities
- No environment reset mechanisms

### 8.3 Test Data Strategy
- Test data is created dynamically during test execution
- User accounts are generated as part of test flows
- Product data is treated as static and read-only

### 8.4 Environment Constraints
- Public shared environment
- No test isolation guarantees
- Potential data collisions
- Limited control over application state

These constraints are considered during test design to avoid flakiness and instability in automated tests.

---

## 9. Entry & Exit Criteria

### 9.1 Entry Criteria
Testing activities begin when the following conditions are met:
- Test website is accessible
- Test environment is available
- Test scope is defined
- Test objectives are agreed
- Test plan is approved
- Automation framework is set up
- Test data strategy is defined

### 9.2 Exit Criteria
Testing is considered sufficient for this assessment when:
- All prioritised functional areas have been tested
- Core business-critical flows are validated
- Automated test cases are implemented and passing
- Automated test coverage meets defined scope
- Exploratory testing has been performed
- Defects are documented
- Test documentation is complete
- Assessment deliverables are finalised

Exit criteria focuses on confidence and risk reduction rather than exhaustive coverage.

---

## 10. Assumptions & Constraints

### 10.1 Assumptions
The following assumptions are made for this assessment:
- The demo website represents a production-like system
- Core functionality is expected to be available during testing
- No formal requirements or wireframes are provided
- User journeys are inferred from application behaviour
- UI-based testing is sufficient to validate core functionality
- Defect behaviour observed is considered valid for reporting

### 10.2 Constraints
The following constraints apply to this assessment:
- Time-limited assessment scope
- Public shared test environment
- No control over backend services
- No environment reset capability
- No access to logs or monitoring tools
- No access to test management or defect tracking systems

Testing strategy and automation design decisions are made with these assumptions and constraints in mind to ensure realistic, maintainable, and stable test outcomes.

