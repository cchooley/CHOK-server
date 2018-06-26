exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('internship').del()
    .then(function () {
      // Inserts seed entries
      return knex('internship').insert([
        {
          name: 'CDOT',
          website: 'https://www.codot.gov/',
          logo: 'http://pagetwo.completecolorado.com//wp-content/uploads/2015/04/CDOTLogo.png',
          description: 'Typical intern assignments include writing, producing multimedia content, coordinating employee and public events, preparing for media interviews, supporting internal communications.  A potential intern should be comfortable working independently but also working with a team and a supervisor.',
          hours: 15,
          paid: true,
          feedback: '',
          location: '2829 W Howard Pl, Denver, CO 80204',
          internshipOffered: ''
        },
        {
          name: 'Denver Fire Department',
          website: 'https://www.denvergov.org/content/denvergov/en/fire-department-home.html',
          logo: 'https://ibb.co/ifrpUo',
          description: 'The Intern will assist and work alongside the Senior Physical Therapist and Wellness Coordinator. The intern will earn experience in all aspects of physical therapy and fitness field while being emerged in the fire department culture.',
          hours: 25,
          paid: false,
          feedback: '',
          location: '4400 Brighton Blvd, Denver, CO 80216',
          internshipOffered: ''
        }
      ]);
    });
};
