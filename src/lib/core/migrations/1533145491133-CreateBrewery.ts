import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class CreateBreweries1533145491133 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      CREATE TABLE brewery (
        id SERIAL PRIMARY KEY,
        name VARCHAR,
        city VARCHAR,
        latitude FLOAT,
        longitude FLOAT
      );
    `)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
      DROP TABLE breweries;
    `)
  }
}
