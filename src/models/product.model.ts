import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

@Entity('product')
export class ProductModel {
  @PrimaryColumn({ type: 'varchar', unique: true, nullable: false })
  public uuid!: string

  @Column({ type: 'varchar', nullable: false })
  public name!: string

  @Column({ type: 'varchar', nullable: false })
  public description!: string

  @Column({ type: 'int', nullable: false })
  public price!: number

  @Column({ type: 'int', nullable: false })
  public stock!: number

  @CreateDateColumn({ name: 'created_at' })
  public createdAt?: Date

  @UpdateDateColumn({ name: 'updated_at' })
  public updatedAt?: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  public deletedAt?: Date
}