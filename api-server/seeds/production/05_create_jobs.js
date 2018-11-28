/* eslint-disable */
exports.seed = async function (knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('jobs').del();

  await knex('jobs').insert({
    job_id: 1,
    recruiter_id: 3,
    job_title: '03 Javascript / NodeJS Developers',
    job_desc: `• Working in product development team about Blockchain
    • Research, join code and support team members
    • Gather and address technical requirements. `,
    location: 'HCMC, VN',
  });

  await knex('jobs').insert({
    job_id: 2,
    recruiter_id: 3,
    job_title: 'Test Automation Engineer (Java/ NodeJS)',
    job_desc: `• Developing and implementing test automation frameworks and automation scripts for Web application, Mobile application and API
    • Researching new technology, testing methods to share knowledge with other team members and apply to incoming projects
    • Getting requirements and proposing techniques, strategies to achieve the requirements
    • Sharing knowledge and conducting training in order to increase skills for other members`,
    location: 'Hanoi, VN',
  });

  await knex('jobs').insert({
    job_id: 3,
    recruiter_id: 4,
    job_title: 'Junior Developer (.Net, NodeJS, C#)',
    job_desc: `• Day-to-day management of data integration across multiple modules
    • Development of Sport data systems
    • Software Development
    • Database Administration`,
    location: 'Da Nang, VN',
  });

  await knex('jobs').insert({
    job_id: 4,
    recruiter_id: 4,
    job_title: 'Sr Fullstack (NodeJS/ReactJS/JavaScript) ',
    job_desc: `• Architect and develop stable and high available web service
    • Lead technical vision across Front-end and Back-end
    • Rapidly build, iterate, test and deploy new features and products
    • Maintain a high-quality robust codebase
    • Manage and contribute code to large scale projects from inception to completion
    • Inspire engineers to explore and learn the latest technologies in the industry`,
    location: 'Nha Trang, VN',
  });
};