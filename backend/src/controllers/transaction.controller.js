// Description: Transaction controller
// Author: Sebastián Gámez Ariza

// Importing transaction service
import * as transactionService from '../services/transaction.service.js';


// Get all transactions
export const getAllTransactions = async (req, res) => {
    // Create a response object
    let response;
    // Try to get all transactions
    try {
        // Get all transactions
        const {data: transactions} = await transactionService.getAllTransactionsService();
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found',
            data: transactions
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting transactions',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Get a transaction by id
export const getTransactionById = async (req, res) => {
    // Create a response object
    let response;
    // Try to get a transaction by id
    try {
        // Get the transaction id
        const {id} = req.params;
        // Get the transaction
        const {data: transaction} = await transactionService.getTransactionByIdService(id);
        // Create the response object
        response = {
            status: 200,
            message: 'Transaction found',
            data: transaction
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transaction',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Get all transactions by account
export const getAllTransactionsByAccount = async (req, res) => {
    // Create a response object
    let response;
    // Try to get all transactions by account
    try {
        // Get the account id
        const {accountId} = req.params;
        // Get all transactions by account
        const {data: transactions} = await transactionService.getAllTransactionsByAccountService(accountId);
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found',
            data: transactions
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transactions',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}

// Get all transactions by atm
export const getAllTransactionsByAtm = async (req, res) => {
    // Create a response object
    let response;
    // Try to get all transactions by atm
    try {
        // Get the atm id
        const {atmId} = req.params;
        // Get all transactions by atm
        const {data: transactions} = await transactionService.getAllTransactionsByAtmService(atmId);
        // Create the response object
        response = {
            status: 200,
            message: 'Transactions found',
            data: transactions
        };
    }
    // Catch error
    catch (error) {
        // Log the error
        console.log(error);
        // Create the response object
        response = {
            status: 500,
            message: 'Error getting the transactions',
        };
    }
    // Send the response
    res.status(response.status).send(response);
}