User.destroy_all
List.destroy_all
Task.destroy_all

user1 = User.create(firstname: "Robin", lastname: "Hood", email: "robin@merrymen.org", username: "robinhood", password: "password")
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
task6 = user1.tasks.create(name: "Give to poor", due_date: Date.today, list_id: list3.id, estimate: 5)

task7 = user1.tasks.create(name: "Intercept Sheriff's caravan", due_date: Date.today, list_id: list1.id, estimate: 60)
task8 = user1.tasks.create(name: "Write a new bandit ballad", due_date: Date.today, list_id: list2.id, estimate: 40)
task9 = user1.tasks.create(name: "Train new merry men recruits", due_date: 6.days.from_now, list_id: list1.id, estimate: 60)
task10 = user1.tasks.create(name: "Free Will Scarlet from jail", due_date: 1.days.from_now, list_id: list2.id, estimate: 120)
task11 = user1.tasks.create(name: "Consult with the villagers", due_date: Date.today, list_id: list2.id, estimate: 40)
task12 = user1.tasks.create(name: "Write new chapter in memoir", due_date: 4.days.from_now, list_id: list3.id, estimate: 40)

task13 = user1.tasks.create(name: "File taxes - booooooo", due_date: Date.today, list_id: list1.id, estimate: 60)
task14 = user1.tasks.create(name: "Fill open positions in Merry Men team", due_date: Date.today, list_id: list2.id, estimate: 40)
task15 = user1.tasks.create(name: "Find new fletcher", due_date: 6.days.from_now, list_id: list1.id, estimate: 60)
task16 = user1.tasks.create(name: "Fold laundry", due_date: 1.days.from_now, list_id: list2.id, estimate: 120)
