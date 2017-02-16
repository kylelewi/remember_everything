# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## tasks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
due_date    | date      | default: never
estimate    | integer   |
notes       | text      |
complete    | boolean   | default: false
author_id   | integer   | not null, foreign key (references users), indexed
list_id     | integer   | not null, foreign key (references lists), indexed
archived    | boolean   | not null, default: false

## lists
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null
description | string    |
