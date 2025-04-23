import { Controller, Get } from '@nestjs/common';


@Controller('ping')
export class pingController {
  @Get('')
  checkStatus() {
    return{
      status:200,
      message:"backend is working fine"
    }

    
  }
}
