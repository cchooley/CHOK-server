
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student').del()
    .then(function () {
      // Inserts seed entries
      return knex('student').insert([
        {
          name: 'Hayley Zulkoski',
          picture: 'https://files.slack.com/files-pri/T1T555TL0-FBDKT8A9W/21833_1280477406589_1878666_n.jpg',
          school: 'Rock Canyon High School',
          email: 'hlzulkoski@gmail.com',
          password: '1234password',
          interests: 'theater',
          hours: 0
        },
        {
          name: 'Conor Hooley',
          picture: 'https://ibb.co/cgOKC8',
          school: 'Wheat Ridge High School',
          email: 'cchooley@gmail.com',
          password: 'chromedome420lol',
          interests: 'music',
          hours: 0
        },
        {
          name: 'Kyle Kuberra',
          picture: '',
          school: '',
          email: '',
          password: '',
          interests: '',
          hours: 0
        },
        {
          name: 'Onder Gunacan',
          picture: '',
          school: 'Çaglayan High School',
          email: 'ondergunacan@gmail.com',
          password: 'iloveturkey123',
          interests: 'communications',
          hours: 0
        },        
      ]);
    });
};
