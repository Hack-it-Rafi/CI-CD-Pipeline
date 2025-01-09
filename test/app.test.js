const request = require('supertest');
const express = require('express');
const app = require('..');

describe('Express App', () => {
    // Test the root route
    test('GET / should return a greeting message and app version', async () => {
        const response = await request(app).get('/');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({
            msg: 'Hello World2!',
            app_version: '4',
        });
    });

    // Test the add route with valid numbers
    test('GET /add/5/10 should return the sum of 5 and 10', async () => {
        const response = await request(app).get('/add/5/10');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ sum: 15 });
    });

    // Test the add route with invalid inputs
    test('GET /add/abc/10 should return "Invalid Input"', async () => {
        const response = await request(app).get('/add/abc/10');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ sum: 'Invalid Input' });
    });

    test('GET /add/10/xyz should return "Invalid Input"', async () => {
        const response = await request(app).get('/add/10/xyz');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ sum: 'Invalid Input' });
    });

    // Test the add route with mixed valid and invalid inputs
    test('GET /add/abc/xyz should return "Invalid Input"', async () => {
        const response = await request(app).get('/add/abc/xyz');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({ sum: 'Invalid Input' });
    });
});
