import { ApiProperty } from '@nestjs/swagger'
import { InformativeResponseDto } from '../../../dtos/informative-response.dto'

export class ImageResponse extends InformativeResponseDto {
  @ApiProperty()
  imageId: string
}