import { RegisterUserService } from '~/app/RegisterUserService';
import { FakeUserRepository } from 'test/repositories/FakeUserRepository';
import { UserBuilder } from 'test/builders/UserBuilder';
import { _ } from '~/lib';


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
})

