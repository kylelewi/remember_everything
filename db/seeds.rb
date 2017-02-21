User.destroy_all
List.destroy_all
Task.destroy_all

user1 = User.create(firstname: "Robin", lastname: "Hood", email: "robin@merrymen.org", username: "robin", password: "password")
user2 = User.create(firstname: "Little", lastname: "John", email: "john@merrymen.org", username: "john", password: "password")
user3 = User.create(firstname: "Maid", lastname: "Marian", email: "marian@merrymen.org", username: "marian", password: "password")

list1 = user1.lists.create(name: "Work")
list2 = user1.lists.create(name: "Personal")
list3 = user1.lists.create(name: "Charities")

task1 = user1.tasks.create(name: "Merry Men Payroll", due_date: 1.days.from_now, list_id: list1.id, estimate: 60)
task2 = user1.tasks.create(name: "Pick flowers for Marian", due_date: Date.today, list_id: list2.id, estimate: 40)
task3 = user1.tasks.create(name: "Archery contest practice", due_date: 1.days.from_now, list_id: list1.id, estimate: 60)
task4 = user1.tasks.create(name: "Build treehouse", due_date: 3.days.ago, list_id: list1.id, estimate: 180)
task5 = user1.tasks.create(name: "Rob from rich", due_date: Date.today, list_id: list1.id, estimate: 5)
