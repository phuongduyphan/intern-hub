/* eslint-disable */
exports.seed = async function(knex, Promise) {
  // Deletes ALL sessions existing entries
  await knex('students').del();

  await knex('students').insert({
    student_id: 1,
    student_major: 'CS',
    student_college: 'IU',
    student_desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus turpis risus, 
    quis efficitur leo vulputate in. Aliquam enim mauris, luctus pellentesque fringilla a, eleifend in eros. 
    Sed volutpat placerat ante, eget convallis nisl molestie ut. Mauris gravida neque quis dictum vestibulum. 
    Vestibulum tincidunt scelerisque elit. Pellentesque dui velit, ornare quis egestas sed, sagittis eu mi. 
    Proin semper congue dolor, dignissim elementum ante sollicitudin nec. Sed rhoncus est lacus, in feugiat 
    turpis aliquam eu. Curabitur nec mi et erat bibendum posuere. Aenean laoreet arcu quam, nec tempus nisl 
    posuere sollicitudin. Morbi quis sagittis justo. Quisque sed lacinia arcu. Etiam vitae dolor sed libero 
    hendrerit elementum. Nulla non nisl lacus. Etiam eu dignissim elit. `,
  });

  await knex('students').insert({
    student_id: 2,
    student_major: 'IT',
    student_college: 'IU01',
    student_desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dapibus turpis risus, 
    quis efficitur leo vulputate in. Aliquam enim mauris, luctus pellentesque fringilla a, eleifend in eros. 
    Sed volutpat placerat ante, eget convallis nisl molestie ut. Mauris gravida neque quis dictum vestibulum. 
    Vestibulum tincidunt scelerisque elit. Pellentesque dui velit, ornare quis egestas sed, sagittis eu mi. 
    Proin semper congue dolor, dignissim elementum ante sollicitudin nec. Sed rhoncus est lacus, in feugiat 
    turpis aliquam eu. Curabitur nec mi et erat bibendum posuere. Aenean laoreet arcu quam, nec tempus nisl 
    posuere sollicitudin. Morbi quis sagittis justo. Quisque sed lacinia arcu. Etiam vitae dolor sed libero 
    hendrerit elementum. Nulla non nisl lacus. Etiam eu dignissim elit. `,
  });
};