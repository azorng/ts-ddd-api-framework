export interface IRepository<T> {
    create(entities: T[]): Promise<T[]>
}