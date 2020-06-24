import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { JSDOM } from 'jsdom'

Enzyme.configure({ adapter: new Adapter() })


const { window } = new JSDOM('<!doctype html><html><body></body></html>', {
  beforeParse (win) {
    win.scrollTo = () => {}
  },
  pretendToBeVisual: false,
  userAgent: 'mocha',
  url: 'http://localhost'
})
global.window = window
global.document = window.document
global.navigator = window.navigator
