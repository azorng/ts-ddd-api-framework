import { v4 as uuidv4 } from 'uuid'

export class Uuid {
    public static generate() {
        return uuidv4()
    }
}
