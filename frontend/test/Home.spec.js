import React from 'react'
import { shallow } from 'enzyme'
const assert = require('assert')
import Home from '../src/container/Home.jsx'

describe('<Home />', () => {
  const wrapper = shallow(<Home/>)

  describe('an error occurred', () => {
    wrapper.setState({ anErrorOccurred: true })
    it('error message should be displayed', () => {
      assert.equal(wrapper.find('.home__errorMessage').length, 1)
    })
  })
})
