const dataSourceInfo = {
    stateOrDistrictWiseEnrollments: {
        multiBarChart: {
            pathToFile: 'nishtha/Enrollments And Completion.json',
            defaultLevel: "User District_Correct",
            mainFilter: "State Code",
            columns: [
                {
                    name: "Location",
                    key: true
                },
                {
                    name: "Total Enrollments",
                    property: "Total Enrollments",
                    aggegration: "SUM"
                },
                {
                    name: "Total Certifications",
                    property: "Total Certifications",
                    aggegration: "SUM"
                }
            ],
            filters: [
                {
                    name: 'Program',
                    column: 'Program',
                    includeAll: true
                }
            ]
        }
    }
}

module.exports = dataSourceInfo;