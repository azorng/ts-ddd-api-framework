import { RegisterUserService } from '~/app/RegisterUserService'
import { FakeUserRepository } from 'test/fakes/repositories/FakeUserRepository'
import { UserBuilder } from 'test/builders/UserBuilder'
import { _ } from '~/lib'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { Exception } from '~/domain/exceptions/Exception'
import { initTestSetup } from 'test/setup/InitTestSetup'

beforeAll(() => {
    initTestSetup()
})

describe('register()', () => {
    it('registers a user and saves to db', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const userRepository = new FakeUserRepository()
        const sut = new RegisterUserService(userRepository)
        const user = userBuilder.build()

        // Act
        await sut.register(user)

        // Assert
        const savedUser = userRepository.entities[0]
        expect(savedUser.email).toBe(user.email)
        expect(savedUser.password).not.toBe(userBuilder.password) // Encrypts password
    })

    it('throws duplicate entity error when email already exists', async () => {
        // Arrangex
        const existingUser = new UserBuilder().build()
        const userRepository = new FakeUserRepository([existingUser])
        const sut = new RegisterUserService(userRepository)

        // Act
        let exception
        try {
            await sut.register(existingUser)
        } catch (e) {
            exception = e
        }

        // Assert
        expect(exception).not.toBeUndefined()
        expect(exception).toBeInstanceOf(Exception)
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.DUPLICATE_ENTRY)
    })
})
