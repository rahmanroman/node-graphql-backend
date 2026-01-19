import { describe, expect, it } from 'vitest'

import { version, environment } from './index'

describe('index', () => {
  it('should get data from package.json', () => {
    expect(version()).toEqual('template-node-basic v1.0.1')
  })

  it('should get data from .env', () => {
    expect(environment()).toEqual('test')
  })
})
