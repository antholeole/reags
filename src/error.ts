export class ReagsError extends Error {
    constructor(msg: string) {
        super(msg, undefined)
        this.name = "ReagsError"

    }
}
 