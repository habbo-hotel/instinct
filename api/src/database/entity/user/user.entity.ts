import { ArticleEntity } from '../';
import { User } from 'fashionkilla-interfaces';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export function userWire(userEntity: UserEntity): User {
  return {
    id: userEntity.id!,
    username: userEntity.username,
    motto: userEntity.motto,
    credits: userEntity.credits,
    pixels: userEntity.pixels,
    online: userEntity.online === 1,
    figure: userEntity.figure,
  };
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  username!: string;

  @Column()
  motto!: string;

  @Column({ name: 'mail' })
  email!: string;

  @Column()
  password!: string;

  @Column({ name: 'look' })
  figure!: string;

  @Column({ type: 'integer' })
  credits!: number;

  @Column({ type: 'integer' })
  pixels!: number;

  @Column({ type: 'integer' })
  online!: 0 | 1;

  @OneToMany(
    () => ArticleEntity,
    article => article.author,
  )
  articles?: ArticleEntity[];
}
