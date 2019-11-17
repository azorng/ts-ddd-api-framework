import bcryptNode from 'bcrypt'

export class bcrypt {
    static hash(data: string) {
        return bcryptNode.hashSync(data, 2)
    }

    static compare(plainText: string, hashedText: string): boolean {
        return bcryptNode.compareSync(plainText, hashedText)
    }
}
