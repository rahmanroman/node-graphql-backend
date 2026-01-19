export const config = {
  dev: process.env.NODE_ENV === 'development',
  port: Number(process.env.PORT) || 3000,
  logger: {
    level: process.env.LOG_LEVEL ?? 'info',
    disableRequestLogging: true,
  },
}
