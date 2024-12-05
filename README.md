# Express.js Application

This project is a simple Express.js application with two main routes: a root endpoint (`/`) and an addition endpoint (`/add/:a/:b`). The project includes a test suite implemented using **Jest** and **Supertest**.

---

## Features

1. **Root Endpoint**  
   - **Route:** `/`  
   - **Method:** GET  
   - **Response:** A greeting message with the application version.

2. **Addition Endpoint**  
   - **Route:** `/add/:a/:b`  
   - **Method:** GET  
   - **Response:** Returns the sum of two numbers or an error message for invalid inputs.

3. **Validation:**  
   - Ensures inputs are numeric.
   - Returns "Invalid Input" for non-numeric values.

4. **Test Suite**  
   - Validates all routes and input scenarios.

---

## Prerequisites

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Hack-it-Rafi/CI-CD-Pipeline
2. Navigate to the project directory:
   ```bash
   cd CI-CD-Pipeline
3. Install dependencies
   ```bash
   npm install

## Run the Server
1. ```bash
   node app.js
2. ```bash
   npm test


## Test Results

1. **The tests verify:**  
   - The root endpoint returns the correct message and version.  
   - The addition endpoint works with valid inputs. 
   - The addition endpoint returns appropriate error messages for invalid inputs.



