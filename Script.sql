/* Tasks:	1. Create table employees
  		2. Insert 70 resord into it*/

/*1*/	create table employees(
		id serial PRIMARY key,
		employee_name varchar(50) NOT NULL)

/*2*/	insert into employees (employee_name)
		values 	('Ильинский Роман Русланович'),
		('Дмитриева Валерия Родионовна'),
		('Матвеев Давид Михайлович'),
		('Горбунов Платон Дмитриевич'),
		('Савельева София Викторовна'),
		('Быкова Вера Ивановна'),
		('Горбачев Леонид Яромирович'),
		('Иванов Андрей Александрович'),
		('Мартынов Иван Петрович'),
		('Авдеева Анна Степановна'),
		('Егорова Елизавета Алексеевна'),
		('Соколова Светлана Павловна'),
		('Мальцева Вероника Михайловна'),
		('Лосев Егор Даниэльевич'),
		('Николаев Фёдор Робертович'),
		('Маркова Кристина Олеговна'),
		('Новикова Лилия Тимофеевна'),
		('Федоров Вячеслав Александрович'),
		('Куприянов Никита Степанович'),
		('Медведева Эмилия Юрьевна'),
		('Федоров Тимур Мирославович'),
		('Астафьева Валерия Дмитриевна'),
		('Калинина Виктория Тиграновна'),
		('Павлова Марта Дмитриевна'),
		('Федоров Максим Алексеевич'),
		('Семина Василиса Матвеевна'),
		('Иванова Марина Вадимовна'),
		('Алексеева Алиса Данииловна'),
		('Смирнова Мира Андреевна'),
		('Климова Арина Михайловна'),
		('Воронкова Анастасия Александровна'),
		('Фомин Владимир Михайлович'),
		('Соколова Марта Артуровна'),
		('Корнеева Арина Дамировна'),
		('Горшкова Валерия Константиновна'),
		('Орлова Элина Ильинична'),
		('Щербакова Анна Артёмовна'),
		('Семенова Василиса Степановна'),
		('Яковлев Григорий Антонович'),
		('Козлов Вадим Дмитриевич'),
		('Артемов Роберт Даниилович'),
		('Соловьева Есения Романовна'),
		('Потапов Иван Григорьевич'),
		('Соболев Артём Дмитриевич'),
		('Николаева Ксения Арсентьевна'),
		('Муратов Николай Александрович'),
		('Федотова Анастасия Павловна'),
		('Попов Платон Владиславович'),
		('Ефимова Алёна Дмитриевна'),
		('Ульянов Сергей Кириллович'),
		('Майоров Александр Георгиевич'),
		('Широков Денис Тимофеевич'),
		('Глебова Василиса Михайловна'),
		('Борисов Михаил Егорович'),
		('Киреева Екатерина Тимуровна'),
		('Баранов Максим Витальевич'),
		('Романов Иван Даниэльевич'),
		('Столярова Екатерина Савельевна'),
		('Алексеев Александр Артёмович'),
		('Фролов Павел Родионович'),
		('Коновалова Алиса Олеговна'),
		('Рыбакова Екатерина Павловна'),
		('Завьялов Артём Демьянович'),
		('Овчинникова Екатерина Михайловна'),
		('Горелова Стефания Ильинична'),
		('Власова Мария Владимировна'),
		('Агафонов Василий Кириллович'),
		('Антонов Александр Эмильевич'),
		('Дубинин Фёдор Георгиевич'),
		('Горбунова Мария Фёдоровна')
		
/* Tasks:	3. Create table salary
  			4. Insert 16 resord into it*/		

/*3*/	create table salary(
		id serial primary key,
		monthly_salary INT not NULL)
	
/*4*/	insert into salary (monthly_salary)
		values 	(1000),
				(1100),
				(1200),
				(1300),
				(1400),
				(1500),
				(1600),
				(1700),
				(1800),
				(1900),
				(2000),
				(2100),
				(2200),
				(2300),
				(2400),
				(2500)