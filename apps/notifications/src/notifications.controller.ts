import { Controller, Get, UsePipes, ValidationPipe } from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Controller()
export class NotificationsController {

  constructor(private readonly notificationsService: NotificationsService) { }

  @UsePipes(new ValidationPipe())
  @EventPattern('notify_email')
  async notifyEmail(@Payload() data: NotifyEmailDto) {
    try {
      await this.notificationsService.notifyEmail(data);
    } catch (error) {
      throw new Error(`Failed to process email notification: ${error.message}`);
    }
  }
}
