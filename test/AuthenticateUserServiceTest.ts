import { FakeUserRepository } from 'test/fakes/repositories/FakeUserRepository'
import { UserBuilder } from 'test/builders/UserBuilder'
import { _ } from '~/lib'
import { AuthenticateUserService } from '~/app/AuthenticateUserService'
import { Exception } from '~/domain/exceptions/Exception'
import { ExceptionCode } from '~/domain/exceptions/ExceptionMessages'

describe('authenticate()', () => {
    it('returns true when credentials are right', async () => {
        // Arrange
        const password = 'secure123'
        const user = (await new UserBuilder().withPassword(password)).build()
        const userRepository = new FakeUserRepository([user])
        const sut = new AuthenticateUserService(userRepository)

        // Act
        const authSuccess = await sut.authenticate(user.email, password)

        // Assert
        expect(authSuccess).toBe(true)
    })

    it('throws bad credentials error when credentials are wrong', async () => {
        // Arrange
        const user = (await new UserBuilder().withPassword('secure123')).build()
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
        const password = 'secure123'
        const user = (await new UserBuilder().withPassword(password)).build()
        const userRepository = new FakeUserRepository([user])
        const sut = new AuthenticateUserService(userRepository)

        // Act
        let exception
        try {
            await sut.authenticate('nonExistingUser', password)
        } catch (e) {
            exception = e
        }

        // Assert
        expect(exception).toBeInstanceOf(Exception)
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.BAD_CREDENTIALS)
    })
})
