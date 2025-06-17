const ReportService = require("../services/report.service");
const { AppDataSource } = require("../config/data-source");

const reportsRepository = AppDataSource.getRepository("Report");
const service = new ReportService(reportsRepository);

module.exports = {
    createReport: async (request, response) => {
        try {
            const { title, content, description } = request.body;

            const reports = await service.create({
                title, content, description
            })

            return response.json(reports)
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },

    getReports: async (request, response) => {
        try {
            const reports = await service.list()

            return response.json(reports)
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }

    }


}