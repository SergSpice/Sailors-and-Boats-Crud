/* Tabla Sailors */
insert into sailors (id, sname, rating, age) values (22, 'Dustin', 7, 45.0);
insert into sailors (id, sname, rating, age) values (29, 'Brutus', 1, 33.0);
insert into sailors (id, sname, rating, age) values (31, 'Lubber', 8, 55.5);
insert into sailors (id, sname, rating, age) values (32, 'Andy', 8, 25.5);
insert into sailors (id, sname, rating, age) values (58, 'Rusty', 10, 35.0);
insert into sailors (id, sname, rating, age) values (64, 'Horatio', 7, 35.0);
insert into sailors (id, sname, rating, age) values (71, 'Zorba', 10, 16.0);
insert into sailors (id, sname, rating, age) values (74, 'Horatio', 9, 35.0);
insert into sailors (id, sname, rating, age) values (85, 'Art', 3, 25.5);
insert into sailors (id, sname, rating, age) values (95, 'Bob', 3, 63.5);
/* Tabla Boats */
insert into boats (id, bname, color) values (101, 'Interlake', 'blue');
insert into boats (id, bname, color) values (102, 'Interlake', 'red');
insert into boats (id, bname, color) values (103, 'Clipper', 'green');
insert into boats (id, bname, color) values (104, 'Marine', 'red');
/* Tabla Reserves */
insert into reserves (sid, bid, day) values (22, 101, '907988400000');
insert into reserves (sid, bid, day) values (22, 102, '907988400000');
insert into reserves (sid, bid, day) values (22, 103, '907815600000');
insert into reserves (sid, bid, day) values (22, 104, '907729200000');
insert into reserves (sid, bid, day) values (31, 102, '910666800000');
insert into reserves (sid, bid, day) values (31, 103, '910321200000');
insert into reserves (sid, bid, day) values (31, 104, '910839600000');
insert into reserves (sid, bid, day) values (64, 101, '904968000000');
insert into reserves (sid, bid, day) values (64, 102, '905227200000');
insert into reserves (sid, bid, day) values (74, 103, '905227200000');