// Description: Syncs the database with the models
// Author: Sebastián Gámez Ariza

// Import database models
// import BrandModel from '../models/brandModel';

// Sync the database with the models
const syncDatabase = async () => {
	// Try to sync the database
	try {
		// Sync the database model (Example)
		// await BrandModel.sync({alter: true});

		// Log the success message
		console.log('Database synchronized successfully');
	} catch (error) {
		// Log the error message
		console.log(`Error synchronizing the database: ${error}`);
	}
};

// Export the sync database function
export default syncDatabase;