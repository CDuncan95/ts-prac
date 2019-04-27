
// mock data for local use

export interface APIListItem {
    title: String,
    description?: String,
    startDate: Date,
    duration?: Number
}


export class ListApi {

    private items : Array<APIListItem> 

    constructor() {
        this.items = [
            {
                title: "Sort out ideas for Edinburgh",
                startDate: new Date(),
                duration: 2,
                description:
`Need to think of things to do on Wednesday evening, all day Thursday night, and daytime Friday`
            },
        ]
    }

    public getItems() : Promise<Array<APIListItem>> {
        return Promise.resolve(this.items);
    }

    public addItem(item : APIListItem = {
        title: 'Place Holder Item',
        startDate: new Date
    }) : Promise<Array<APIListItem>> {
        this.items.push(item);
        return Promise.resolve(this.items);
    }
}

