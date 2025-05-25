import { Hono } from 'hono'
import { handle } from 'hono/vercel';
const app = new Hono().basePath('/api/server')
app.get('/hello', (c) => {
  return c.json({
    message: 'Hello Next.js!',
  })
})

const handler = handle(app)
export default  handler