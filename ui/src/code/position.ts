export const collection = "positions"
export const SelectMe = "- Select Position -"
export type type = "SO" | "NSO"

export interface IPosition {
    name: string;
    type: type;
}

export class Position implements IPosition {
    name: string = "";
    type: type = "SO"
    
    constructor(item?: IPosition) {
        if (item) {
            this.name = item.name;
            this.type = item.type;
        }
    }
}
