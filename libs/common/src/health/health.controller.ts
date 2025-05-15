import { Controller, Get } from "@nestjs/common";

@Controller('/') // This controller is used to check the health of the application
export class HealthController {
    @Get()
    health() {
        return true;
    }
}