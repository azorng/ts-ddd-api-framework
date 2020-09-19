import { RegisterUserService } from '~/app/RegisterUserService'
import { UserBuilder } from 'test/builders/UserBuilder'
import { _ } from '~/lib'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'
import { Exception } from '~/infra/exceptions/Exception'
import { initTestSetup } from 'test/setup/InitTestSetup'
import { mock, instance, verify, when, anything, deepEqual } from 'ts-mockito'
import { UserRepository } from '~/infra/repositories/UserRepository'

beforeAll(() => {
    initTestSetup()
})

describe('register()', () => {
    it('registers a user and saves to db', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const userRepository = mock(UserRepository)
        const sut = new RegisterUserService(instance(userRepository))
        const user = userBuilder.build()

        // Act
        const registeredUser = await sut.register(user)

        // Assert
        expect(registeredUser.email).toBe(user.email)
        expect(registeredUser.password).not.toBe(userBuilder.password) // Encrypts password
    })

    it('throws duplicate entity error when email already exists', async () => {
        // Arrangex
        const existingUser = new UserBuilder().build()
        const userRepository = mock(UserRepository)
        const sut = new RegisterUserService(instance(userRepository))
        when(userRepository.find(deepEqual({ email: existingUser.email }))).thenResolve(existingUser)

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
