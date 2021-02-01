import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: String;

  @Column()
  email: String;

  @Column()
  password: String;
}

export default User;