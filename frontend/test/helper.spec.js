const assert = require('assert')
import { getAvatarLetters } from '../src/helper'

describe('helper.js', () => {
  describe('getAvatarLetters()', () => {
    describe('call the function with "   Auchan"', () => {
      it('should return "Au"', () => {
        assert.equal(getAvatarLetters('Auchan'), 'Au');
      })
    })
    describe('call the function with "   Auchan   Paris  "', () => {
      it('should return "AP"', () => {
        assert.equal(getAvatarLetters('   Auchan Paris  '), 'AP');
      })
    })
    describe('call the function with "Auchan Paris Grenoble"', () => {
      it('should return "AP"', () => {
        assert.equal(getAvatarLetters('Auchan Paris Grenoble'), 'AP');
      })
    })
    describe('call the function with "Auchan:Paris:Grenoble"', () => {
      it('should return "AP"', () => {
        assert.equal(getAvatarLetters('Auchan:Paris:Grenoble'), 'AP');
      })
    })
    describe('call the function with an empty string', () => {
      it('should return ""', () => {
        assert.equal(getAvatarLetters(''), '');
      })
    })
  })
})