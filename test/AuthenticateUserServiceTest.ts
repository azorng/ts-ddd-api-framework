import { FakeUserRepository } from 'test/fakes/repositories/FakeUserRepository'
import { UserBuilder } from 'test/builders/UserBuilder'
import { AuthenticateUserService } from '~/app/AuthenticateUserService'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'
import { initTestSetup } from 'test/setup/InitTestSetup'

beforeAll(() => {
    initTestSetup()
})

describe('authenticate()', () => {
    it('returns true when credentials are right', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const user = userBuilder.withHashedPassword().build()
        const userRepository = new FakeUserRepository([user])
        const sut = new AuthenticateUserService(userRepository)

        // Act
        const authResponse = await sut.authenticate(user.email, userBuilder.password)

        // Assert
        expect(authResponse).toBe(user.id)
    })

    it('throws bad credentials error when credentials are wrong', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const user = userBuilder.withHashedPassword().build()
        const userRepository = new FakeUserRepository([user])
        const sut = new AuthenticateUserService(userRepository)

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
        const user = userBuilder.withHashedPassword().build()
        const userRepository = new FakeUserRepository([user])
        const sut = new AuthenticateUserService(userRepository)

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
