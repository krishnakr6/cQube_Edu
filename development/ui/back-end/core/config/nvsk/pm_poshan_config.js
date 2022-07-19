const dataSourceInfo = {
    PM_poshan_access: {
        map: {
            pathToFile: 'pm_poshan/PM_poshan_access.json',
            overallMetricsOption: false,
            locations: [
                {
                    name: "Location",
                    property: "State Name",
                    level: "state",
                    isState: true,
                    tooltip: {
                        name: "State Name"
                    }
                },
                {
                    name: "Location",
                    property: "District Name",
                    level: "district",
                    tooltip: {
                        name: "District Name"
                    }
                }
            ],
            dimensions: [
                {
                    name: "Total Enrolled",
                    property: "Enrolled In July",
                    tooltip: {
                        name: "Total Enrolled"
                    },
                    aggegration: {
                        type: "SUM"
                    },
                    includeAsMetricFilter: true,
                },
                {
                    name: "Meal Served",
                    property: "MealServed(02/July/2022)",
                    tooltip: {
                        name: "Meal Served"
                    },
                    aggegration: {
                        type: "SUM"
                    },
                    includeAsMetricFilter: true,
                },
                {
                    name: "Total Schools",
                    property: "Total Schools",
                    tooltip: {
                        name: "Total Schools"
                    },
                    aggegration: {
                        type: "SUM"
                    },
                    includeAsMetricFilter: true,
                }
            ],
            filters: [
                {
                    name: 'State',
                    column: 'State Name',
                    optionValueColumn: "State Code"
                }
            ],
            levels: [
                {
                    name: "State",
                    value: "state",
                    property: "State Name"
                },
                {
                    name: "District",
                    value: "district",
                    property: "District Name"
                }
            ],
            options: {
                legend: {
                    title: 'PM Poshan Access'
                }
            }
        }
    },
    state_onboarded: {
        map: {
            pathToFile: 'pm_poshan/state_onboarded.json',
            locations: [
                {
                    name: "Location",
                    property: "State",
                    level: "state",
                    isState: true,
                    tooltip: {
                        name: "State Name"
                    }
                }
            ],
            dimensions: [
                {
                    name: "indicator",
                    property: "Onboarded on PM Poshan",
                    tooltip: {
                        name: "Onboarded on PM Poshan"
                    }
                }
            ],
            filters: [],
            options: {
                legend: {
                    title: 'States onboarded on PM Poshan'
                }
            }
        }
    }
}

module.exports = dataSourceInfo;