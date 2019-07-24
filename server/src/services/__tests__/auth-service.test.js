import { throws } from 'smid'
import AuthService from 'services/auth-service'

// This test only verify invariants, not interaction with dependencies.
// That is tested with integration tests.
describe('AuthService', () => {
  describe('login', () => {
    it('logs in a user and returns a JWT token', async () => {
      // TODO: Setup tests for Auth
      expect(await service.login()).toEqual('')
    })
  })
})