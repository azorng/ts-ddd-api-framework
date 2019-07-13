import { FakeUserRepository } from 'test/repositories/FakeUserRepository';
import { UserBuilder } from 'test/builders/UserBuilder';
import { _ } from '~/lib';
import { AuthenticateUserService } from '~/app/AuthenticateUserService';
import { RegisterUserService } from '~/app/RegisterUserService';
import { Exception } from '~/domain/exceptions/Exception';
import { ExceptionCode } from '~/domain/exceptions/ExceptionNames';


describe('authenticate()', () => {
    it('returns true when credentials are right', async () => {
        // Arrange
        const userRepository = new FakeUserRepository()
        const registerUser = new RegisterUserService(userRepository)
        const sut = new AuthenticateUserService(userRepository)
        const user = new UserBuilder().build()
        await registerUser.register(_.clone(user))

        // Act
        const authSuccess = await sut.authenticate(user.username, user.password).catch(e => console.log(e))

        // Assert
        expect(authSuccess).toBe(true)
    })

    it('throws bad credentials error when credentials are wrong', async () => {
        // Arrange
        const userRepository = new FakeUserRepository()
        const registerUser = new RegisterUserService(userRepository)
        const sut = new AuthenticateUserService(userRepository)

        const user = new UserBuilder().build()
        await registerUser.register(_.clone(user))

        // Act
        let exception
        try {
            await sut.authenticate(user.username, 'wrongPass')
        } catch (e) {
            exception = e
        }

        // Assert
        expect(exception).toBeInstanceOf(Exception)
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.BAD_CREDENTIALS)
    })

    it('throws bad credentials error when user not found', async () => {
        // Arrange
        const userRepository = new FakeUserRepository()
        const registerUser = new RegisterUserService(userRepository)
        const sut = new AuthenticateUserService(userRepository)

        const user = new UserBuilder().build()
        await registerUser.register(_.clone(user))

        // Act
        let exception
        try {
            await sut.authenticate('nonExistingUser', user.password)
        } catch (e) {
            exception = e
        }

        // Assert
        expect(exception).toBeInstanceOf(Exception)
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.BAD_CREDENTIALS)
    })
})