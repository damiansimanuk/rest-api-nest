import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { LoggerService } from "./logger/logger.service"

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService()
  })
  app.useLogger(await app.resolve(LoggerService))

  const logger = await app.resolve(LoggerService)
  logger.setContext(bootstrap.name)

  const PORT = 3000
  await app.listen(PORT)
  logger.log(`App Started. Listen port:${PORT}`)
}

// eslint-disable-next-line @typescript-eslint/no-floating-promises
bootstrap()
