export default interface IRepository<T> {
    create(entity: T): Promise<T>
}