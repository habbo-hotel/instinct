import { Rank } from 'fashionkilla-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export function rankWire(rankEntity: RankEntity): Rank {
  return {
    id: rankEntity.id!,
    name: rankEntity.name,
    badge: rankEntity.badge,
    users: [],
  };
}

@Entity('permissions')
export class RankEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'rank_name' })
  name!: string;

  @Column({ name: 'badge' })
  badge!: string;
}
