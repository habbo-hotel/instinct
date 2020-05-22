import {UserEntity} from '../user/user.entity';
import {GangEntity} from '../../gang/gang/gang.entity';
import {BusinessJobEntity} from '../../business/business-job/business-job.entity';
import {Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn} from 'typeorm';

@Entity('rp_stats')
export class UserRPStatsEntity {
  @PrimaryGeneratedColumn({name: 'id'})
  userID?: number;

  @OneToOne(() => UserEntity, user => user.rpStats)
  @JoinColumn({name: 'id'})
  user?: UserEntity;

  @Column({name: 'job_id', type: 'int'})
  jobID!: number;

  @Column({name: 'job_rank', type: 'int'})
  jobRankID!: number;

  @ManyToOne(() => BusinessJobEntity, businessJob => businessJob.businessID)
  @JoinColumn({name: 'job_id'})
  job?: BusinessJobEntity;

  @Column({name: 'curhealth', type: 'int', default: 100})
  currentHealth!: number;

  @Column({name: 'maxhealth', type: 'int', default: 100})
  maxHealth!: number;

  @Column({type: 'int'})
  armor!: number;

  @Column({name: 'armored', type: 'int'})
  armored!: number;

  @Column({type: 'int', default: 100})
  energy!: number;

  @Column({type: 'int'})
  hunger!: number;

  @Column({type: 'int'})
  hygiene!: number;

  @Column({type: 'int'})
  stamina!: number;

  @Column({type: 'int'})
  constitution!: number;

  @Column({type: 'int'})
  intelligence!: number;

  @Column({type: 'int'})
  strength!: number;

  @Column({name: 'st_deaths', type: 'int'})
  totalDeaths!: number;

  @Column({name: 'st_kills', type: 'int'})
  totalKills!: number;

  @Column({name: 'st_punches', type: 'int'})
  totalPunches!: number;

  @Column({name: 'st_arrested', type: 'int'})
  totalArrests!: number;

  @Column({type: 'int'})
  isDead!: number;

  @Column({type: 'int'})
  deadTimer!: number;

  @Column({type: 'int'})
  isJailed!: number;

  @Column({type: 'int'})
  jailTimer!: number;

  @Column({type: 'int'})
  workTimer!: number;

  @Column({name: 'sendhome_timer', type: 'int'})
  sendHomeTimer!: number;

  @Column({name: 'last_x', type: 'int'})
  lastXCoordinate!: number;

  @Column({name: 'last_z', type: 'double'})
  lastZCoordinate!: number;

  @Column({name: 'last_y', type: 'int'})
  lastYCoordinate!: number;

  @Column({name: 'is_gang', type: 'int'})
  isBeginner!: number;

  @Column({name: 'gang_id', type: 'int'})
  gangID!: number;

  @Column({name: 'gang_rank', type: 'int'})
  gangRankID!: number;

  @ManyToOne(() => GangEntity, gang => gang.users)
  @JoinColumn({name: 'gang_id'})
  gang?: GangEntity;

  @Column({name: 'bank', type: 'int'})
  bankBalance!: number;

  @Column({name: 'phone', type: 'int'})
  hasPhone!: number;

  @Column({name: 'phone_credit', type: 'int'})
  phoneCredit!: number;

  @Column({type: 'int'})
  weed!: number;

  @Column({type: 'int'})
  carrots!: number;

  @Column({type: 'int'})
  bullets!: number;

  @Column({type: 'int'})
  vests!: number;

  @Column({type: 'varchar', length: 255})
  class!: string;

  @Column({type: 'int'})
  isWanted!: number;

  @Column({name: 'workout_cur_timer', type: 'int'})
  workoutTimer!: number;

  @Column({name: 'workout_need_timer', type: 'int'})
  workoutNeededTimer!: number;

  @Column({name: 'weightlight_cur_timer', type: 'int'})
  weightLiftTimer!: number;

  @Column({name: 'workout_needed_timer', type: 'int'})
  weightLiftNeededTimer!: number;

  @Column({type: 'int'})
  isRobbing!: number;

  @Column({name: 'robbery_timer', type: 'int'})
  robberyTimer!: number;

  @Column({name: 'learning', type: 'int'})
  isLearning!: number;

  @Column({name: 'learning_timer', type: 'int'})
  learningTimer!: number;

  @Column({name: 'plane', type: 'int'})
  hasPlane!: number;

  @Column({name: 'fuel', type: 'int'})
  engineFuel!: number;

  @Column({name: 'car', type: 'int'})
  hasCar!: number;
}
