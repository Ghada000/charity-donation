// In campaignmodel.js

const db = require('../database/index2');

const Campaigns = {
    create: async (name, goal) => {
        try {
            const result = await db.query('INSERT INTO Campaigns (name, goal) VALUES (?, ?)', [name, goal]);
            return result.insertId;
        } catch (error) {
            console.error('Error creating campaign:', error);
            throw error;
        }
    },
    getAll: async () => {
        try {
            const result = await db.query('SELECT * FROM Campaigns');
            return result;
        } catch (error) {
            console.error('Error getting campaigns:', error);
            throw error;
        }
    },
    getById: async (id) => {
        try {
            const result = await db.query('SELECT * FROM Campaigns WHERE id = ?', [id]);
            return result;
        } catch (error) {
            console.error('Error getting campaign by id:', error);
            throw error;
        }
    },
    update: async (id, name, goal) => {
        try {
            await db.query('UPDATE Campaigns SET name = ?, goal = ? WHERE id = ?', [name, goal, id]);
            return;
        } catch (error) {
            console.error('Error updating campaign:', error);
            throw error;
        }
    },
    delete: async (id) => {
        try {
            await db.query('DELETE FROM Campaigns WHERE id = ?', [id]);
            return;
        } catch (error) {
            console.error('Error deleting campaign:', error);
            throw error;
        }
    },
   

};

async function updateProgress(id, donationAmount) {
    try {
        const parsedDonationAmount = parseFloat(donationAmount);

        // Validate donation amount
        if (isNaN(parsedDonationAmount) || parsedDonationAmount <= 0) {
            throw new Error('Invalid donation amount');
        }

        // Get the current progress of the campaign from the database
        const currentProgressResult = await db.query('SELECT progress, goal FROM Campaigns WHERE id = ?', [id]);
        const currentProgress = parseFloat(currentProgressResult[0].progress);
        const goal = parseFloat(currentProgressResult[0].goal);

        // Calculate the new progress by adding the parsed donation amount
        const newProgress = currentProgress + parsedDonationAmount;

        // Validate new progress
        if (isNaN(newProgress) || newProgress < 0 || newProgress > goal) {
            throw new Error('Invalid progress value');
        }

        // Update the progress of the campaign in the database
        await db.query('UPDATE Campaigns SET progress = ? WHERE id = ?', [newProgress, id]);
        return;
    } catch (error) {
        console.error('Error updating campaign progress:', error);
        throw error;
    }
}


module.exports = {
    updateProgress,
    Campaigns // Exporting both updateProgress and Campaigns as properties of a single object
};
