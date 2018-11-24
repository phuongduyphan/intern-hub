/* eslint-disable */
exports.seed = async function(knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('users').del();

  await knex('users').insert({
    user_id: 1,
    displayname: 'Thanh Tung',
    username: 'thanhtung',
    userpass: '$2a$10$/s5d4SGAggQNOip2Kky6uu.e4tvcvfaZMGuvH715dbsXnPxeAYBwm',
    email: 'tungtoiu@gmail.com',
    phone_number: '123456789',
    role: 'student',
  });

  await knex('users').insert({
    user_id: 2,
    displayname: 'Duy Phan',
    username: 'duyphan',
    userpass: '$2a$10$/s5d4SGAggQNOip2Kky6uu.e4tvcvfaZMGuvH715dbsXnPxeAYBwm',
    email: 'phuongduyphan@gmail.com',
    phone_number: '123456789',
    role: 'student',
  });

  await knex('users').insert({
    user_id: 3,
    displayname: 'Duy Vu',
    username: 'duyvu',
    userpass: '$2a$10$/s5d4SGAggQNOip2Kky6uu.e4tvcvfaZMGuvH715dbsXnPxeAYBwm',
    email: 'vuduy@gmail.com',
    phone_number: '123456789',
    role: 'recruiter',
  });

  await knex('users').insert({
    user_id: 4,
    displayname: 'Trong Nhan',
    username: 'trongnhan',
    userpass: '$2a$10$/s5d4SGAggQNOip2Kky6uu.e4tvcvfaZMGuvH715dbsXnPxeAYBwm',
    email: 'nhandoan@gmail.com',
    phone_number: '123456789',
    role: 'recruiter',
  });
};