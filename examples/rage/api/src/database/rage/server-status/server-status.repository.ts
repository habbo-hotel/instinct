import { EntityRepository, Repository } from 'typeorm';
import { ServerStatusEntity } from './server-status.entity';

@EntityRepository(ServerStatusEntity)
export class ServerStatusRepository extends Repository<ServerStatusEntity> {

}