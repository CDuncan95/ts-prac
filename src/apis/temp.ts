
// mock data for local use

export interface APIListItem {
    title: String,
    description?: String,
    startDate: Date,
    duration?: Number
}

export function get() : Promise<Array<APIListItem>> {
    return Promise.resolve([
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "No description",
            startDate: new Date(),
            duration: 2
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        },
        {
            title: "AAAAAAAAAAAAAAAAA",
            description: "this is A",
            startDate: new Date()
        }
    ]);
}

// export default get;