import { Entity, Column, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WebTranslation {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ unique: true })
  value: string;
}
