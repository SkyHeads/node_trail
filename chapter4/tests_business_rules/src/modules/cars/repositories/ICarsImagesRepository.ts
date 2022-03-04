import { CarImage } from '../infra/typeorm/entities/CarImage'

interface ICarsImagesRepository {
  list(): Promise<CarImage[]>
  create(car_id: string, image_name: string): Promise<CarImage>
}

export { ICarsImagesRepository }
