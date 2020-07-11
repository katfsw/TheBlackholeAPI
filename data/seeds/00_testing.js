
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('submissions').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('submissions').insert([
        { title:'I Love You', message:'I will always love you, you forever complete me.', color:'1', feeling:'1'},
        { title:'I haTE YOU', message:'YOU RUINED ME', color:'1', feeling:'2'},
        { title:'Just proud', message:'Im just proud of myself', color:'3', feeling:'2'},
        { title:'Dogs are better than Cats', message:'dogs are way better than cats', color:'4', feeling:'5'},
        { title:'i miss you', message:'just, come home...', color:'5', feeling:'1'},
      ]);
    });
};


        // title - 
        // message -
        // color -
        // feeling - 