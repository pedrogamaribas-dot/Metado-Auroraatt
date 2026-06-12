import { getRouter } from './router'
import { createStartHandler, defaultStreamHandler } from '@tanstack/react-start/server'

const handler = createStartHandler({
  createRouter: getRouter,
  defaultStreamHandler,
})

export default handler
