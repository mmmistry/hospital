import '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock'
import mockFetch from 'jest-fetch-mock'

mockFetch.enableMocks()

beforeEach(() => {
  // if you have an existing `beforeEach` just add the following line to it
  fetchMock.doMock()
})

global.window.matchMedia =
  global.window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener() {},
      removeListener() {},
    }
  }

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}))

jest.isolateModules(() => {
  const preloadAll = require('jest-next-dynamic')
  beforeAll(async () => {
    await preloadAll()
  })
})