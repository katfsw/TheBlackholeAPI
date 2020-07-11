exports.up = function(knex) {
    return knex.schema.createTableIfNotExists('submissions',submission => {
        submission
        .increments(); 

        submission
        .time('created_at')
        
        submission
        .string('title', 128)
        .notNullable()

        submission
        .string('message', 256)
        .notNullable()

        submission
        .integer('color')
        .notNullable()

        submission
        .integer('feeling')
        .notNullable()

        // title - 
        // message -
        // color -
        // feeling -

    });
  };

  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('submission');
  };