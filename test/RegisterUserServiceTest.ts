import { RegisterUserService } from '~/app/RegisterUserService';
import { FakeUserRepository } from 'test/repositories/FakeUserRepository';
import { UserBuilder } from 'test/builders/UserBuilder';
import { _ } from '~/lib';
import { ExceptionCodes } from '~/domain/exceptions/ExceptionMessages';
import { Exception } from '~/domain/exceptions/Exception';


describe('register()', () => {
  it('registers a user and saves to db', async () => {
    // Arrange
    const userRepository = new FakeUserRepository()
    const sut = new RegisterUserService(userRepository)
    const user = new UserBuilder().build()

    // Act
    await sut.register(_.clone(user))

    // Assert
    const savedUser = userRepository.entities[0]
    expect(savedUser.username).toBe(user.username)

    // Encrypts password
    expect(savedUser.password).not.toBe(user.password)
  })

  it('throws duplicate entity error when username already exists', async () => {
    // Arrange
    const userRepository = new FakeUserRepository()
    const sut = new RegisterUserService(userRepository)
    const existingUser = new UserBuilder().build()
    await sut.register(existingUser)
    
    const user = _.clone(existingUser)

    // Act
    let exception
    try {
      await sut.register(user)
    } catch (e) {
      exception = e
    }

    // Assert
    expect(exception).not.toBeUndefined()
    expect(exception).toBeInstanceOf(Exception)
    expect(ExceptionCodes[exception.name]).toBe(ExceptionCodes.DUPLICATE_ENTRY)
  })
})

