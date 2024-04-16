class UserProfileManager {
	constructor() {
		this.users = [];
		this.nextId = 1;
	}

	addUser(userInfo) {
		const newUser = {
			id: this.nextId++,
			name: userInfo.name,
			email: userInfo.email,
		};
		this.users.push(newUser);
	}

	removeUser(userId) {
		this.users = this.users.filter(user => user.id !== userId);
	}

	updateUser(userId, newInfo) {
		const user = this.users.find(user => user.id === userId);
		if (user) {
			user.name = newInfo.name || user.name;
			user.email = newInfo.email || user.email;
		}
	}

	findUserByName(name) {
    return this.users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()));
 }

 getAllUsers() {
    return this.users;
 }
}

const profileManager = new UserProfileManager();

profileManager.addUser({ name: "Alice", email: "alice@example.com" });
profileManager.addUser({ name: "Bob", email: "bob@example.com" });

console.log(profileManager.getAllUsers()); // Выводит информацию о Alice и Bob

profileManager.updateUser(1, { name: "Alicia" }); // Обновляет имя Alice на Alicia
profileManager.removeUser(2); // Удаляет Bob

console.log(profileManager.findUserByName("Ali")); // Находит Alicia