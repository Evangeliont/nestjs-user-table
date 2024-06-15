import { MigrationInterface, QueryRunner } from 'typeorm';

export class SeedUsers1633000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO "user" (firstname, lastname, age, gender, hasproblems) VALUES
        ('John', 'Doe', 25, 'male', false),
        ('Jane', 'Doe', 28, 'female', true),
        ('Alice', 'Smith', 30, 'female', false),
        ('Bob', 'Brown', 22, 'male', true),
        ('Charlie', 'Johnson', 35, 'male', false),
        ('Emily', 'Davis', 40, 'female', true),
        ('Frank', 'Miller', 45, 'male', false),
        ('Grace', 'Wilson', 50, 'female', true),
        ('Henry', 'Moore', 55, 'male', false),
        ('Ivy', 'Taylor', 60, 'female', true);
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM "user" WHERE firstName IN ('John', 'Jane', 'Alice', 'Bob', 'Charlie', 'Emily', 'Frank', 'Grace', 'Henry', 'Ivy')
    `);
  }
}
