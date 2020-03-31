import { Rank } from 'fashionkilla-interfaces';
import { UserEntity, userWire } from '../user';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export function rankWire(rankEntity: RankEntity): Rank {
  return {
    id: rankEntity.id!,
    name: rankEntity.name,
    badge: rankEntity.badge,
    users: rankEntity.users!.map(user => userWire(user)),
  };
}

@Entity('permissions')
export class RankEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'rank_name' })
  name!: string;

  @Column()
  badge!: string;

  @Column({ default: 1 })
  level!: number;

  @OneToMany(
    () => UserEntity,
    user => user.rank,
  )
  users?: UserEntity[];
}
