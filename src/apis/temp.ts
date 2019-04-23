
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
            title: "Sort out ideas for Edinburgh",
            startDate: new Date(),
            duration: 2,
            description:
`Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
        },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
//         {
//             title: "Sort out ideas for Edinburgh",
//             startDate: new Date(),
//             duration: 2,
//             description:
// `Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
//         },
    ]);
}

// export default get;