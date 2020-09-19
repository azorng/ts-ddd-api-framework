import { UserBuilder } from 'test/builders/UserBuilder'
import { UserAuthenticationService } from '~/app/UserAuthenticationService'
import { Exception } from '~/infra/exceptions/Exception'
import { mock, instance, verify, when, anything, deepEqual } from 'ts-mockito'
import { UserRepository } from '~/infra/repositories/UserRepository'
import { Session } from '~/infra/Session'
import { FakeSessionNamespace } from 'test/fakes/FakeSession'
import { ExceptionCode } from '~/app/exceptions/ExceptionCodes'

beforeEach(() => {
    Session.namespace = new FakeSessionNamespace()
})

describe('requireAuth()', () => {
    it('should throw exception when there is no auth session', async () => {
        // Arrange
        let exception

        // Act
        try {
            UserAuthenticationService.requireAuth()
        } catch (e) {
            exception = e
        }

        // Assert
        expect(ExceptionCode[exception.name]).toBe(ExceptionCode.NO_SESSION)
    })

    it('should return user id when there is a session', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const user = userBuilder.withHashedPassword().build()
        const userRepository = mock(UserRepository)
        when(userRepository.getSensitiveDataByEmail(user.email)).thenResolve(user)
        await new UserAuthenticationService(instance(userRepository)).authenticate(
            user.email,
            userBuilder.password
        )

        // Act
        const userId = UserAuthenticationService.requireAuth()

        // Assert
        expect(userId).toBe(user.id)
    })
})

describe('authenticate()', () => {
    it('should set session if credentials are right', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const user = userBuilder.withHashedPassword().build()
        const userRepository = mock(UserRepository)
        const sut = new UserAuthenticationService(instance(userRepository))

        when(userRepository.getSensitiveDataByEmail(user.email)).thenResolve(user)

        // Act
        await sut.authenticate(user.email, userBuilder.password)

        // Assert
        expect(Session.auth).toBe(user.id)
    })

    it('throws bad credentials error when credentials are wrong', async () => {
        // Arrange
        const userBuilder = new UserBuilder()
        const user = userBuilder.withHashedPassword().build()
        const userRepository = mock(UserRepository)
        const sut = new UserAuthenticationService(instance(userRepository))

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
        const sut = new UserAuthenticationService(instance(userRepository))

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
