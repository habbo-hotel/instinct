import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('server_status')
export class ServerStatusEntity {

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: 'users_online', type: 'int' })
  usersOnline!: number;

  @Column({ name: 'record_connect', type: 'int' })
  recordConnect!: number;

  @Column({ name: 'loaded_rooms', type: 'int' })
  loadedRooms!: number;

  @Column({ name: 'status', type: 'int' })
  status!: number;

  @Column({ name: 'rooms_loaded', type: 'int' })
  roomsLoaded!: number;

  @Column({ name: 'server_ver' })
  serverVersion!: string;

  @Column({ type: 'int' })
  stamp!: number;

  @Column({ name: 'minutesuptime', type: 'int' })
  uptime!: number;

  @Column({ name: 'userpeak', type: 'int' })
  userPeak!: number;

  @Column({ name: 'bannerdata' })
  bannerData!: string;

}