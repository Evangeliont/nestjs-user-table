import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserAction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  action: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  timestamp: Date;
}
