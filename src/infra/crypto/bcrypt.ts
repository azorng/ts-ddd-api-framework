import bcryptNode from 'bcrypt'

export class bcrypt {
    static async hash(data: string) {
        return bcryptNode.hash(data, 2)
    }

    static async compare(plainText: string, hashedText: string): Promise<boolean> {
        return bcryptNode.compare(plainText, hashedText)
    }
}
