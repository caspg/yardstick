import { MigrationInterface, QueryRunner, Table, TableIndex } from 'typeorm'

export class createUsers1532892540357 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE SEQUENCE user_id_seq;
    `)

    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          default: `nextval('user_id_seq'::regclass)`,
        },
        {
          name: 'email',
          type: 'varchar(255)',
        },
        {
          name: 'firstName',
          type: 'varchar(255)',
        },
        {
          name: 'lastName',
          type: 'varchar(255)',
        },
      ],
    }))

    await queryRunner.createIndex('user', new TableIndex({
      name: 'IDX_USER_EMAIL',
      columnNames: ['email'],
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('user', 'IDX_USER_EMAIL')
    await queryRunner.dropTable('user')
    await queryRunner.query(`
      DROP SEQUENCE user_id_seq;
    `)
  }
}
