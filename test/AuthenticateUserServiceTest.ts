import { UserBuilder } from 'test/builders/UserBuilder'
import { AuthenticateUserService } from '~/app/AuthenticateUserService'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { initTestSetup } from 'test/setup/InitTestSetup'
import { mock, instance, verify, when, anything, deepEqual } from 'ts-mockito'
import { UserRepository } from '~/infra/repositories/UserRepository'

beforeAll(() => {
    initTestSetup()
})

describe('authenticate()', () => {
    it('should return id if credentials are right', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const user = userBuilder.withHashedPassword().build()
        const userRepository = mock(UserRepository)
        const sut = new AuthenticateUserService(instance(userRepository))

        when(userRepository.getSensitiveDataByEmail(user.email)).thenResolve(user)

        // Act
        const authResponse = await sut.authenticate(user.email, userBuilder.password)

        // Assert
        expect(authResponse).toBe(user.id)
    })

    it('throws bad credentials error when credentials are wrong', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const user = userBuilder.withHashedPassword().build()
        const userRepository = mock(UserRepository)
        const sut = new AuthenticateUserService(instance(userRepository))

        when(userRepository.getSensitiveDataByEmail(user.email)).thenResolve(user)

        // Act
        let exception
        try {
            await sut.authenticate(user.email, 'wrongPass')
        } catch (e) {
            exception = e
        }

        // Assert
        expect(exception).toBeInstanceOf(Exception)
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.BAD_CREDENTIALS)
    })

    it('throws bad credentials error when user not found', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const userRepository = mock(UserRepository)
        const sut = new AuthenticateUserService(instance(userRepository))

        // Act
        let exception
        try {
            await sut.authenticate('nonExistingUser', userBuilder.password)
        } catch (e) {
            exception = e
        }

        // Assert
        expect(exception).toBeInstanceOf(Exception)
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.BAD_CREDENTIALS)
    })
})
