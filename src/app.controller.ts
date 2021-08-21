import { Controller, Get } from "@nestjs/common"
import { AppService } from "./app.service"
import { LoggerService } from "./logger/logger.service"

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly log: LoggerService) {
    log.setContext(AppController.name)
  }

  @Get()
  getHello(): string {
    this.log.error("mi abuela")
    return this.appService.getHello()
  }
}
