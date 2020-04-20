const Todo = require('../models/Todo');

const users = [
    {name: 'den', age: 25},
    {name: 'max', age: 20}
];

module.exports = {
    test() {
        return {
            count: Math.round(Math.random() * 10),
            users
        }
    },
    random({min, max, count}) {
        const arr = [];
        for (let i = 0; i < count; i++) {
            const n = Math.random() * (max - min) + min;
            arr.push(n);
        }
        return arr;
    },
    addUser({user: {name}}) {
        const user = {
            name,
            age: Math.ceil(Math.random() * 30)
        };
        users.push(user);
        return user
    },
    async getTodos() {
        try {
            return await Todo.findAll();
        } catch (e) {
            throw new Error('Fetch todos is not available')
        }
    },
    async addTodo({todo}) {
        try {
            return await Todo.create({
                title: todo.title,
                done: false
            });
        } catch (e) {
            throw new Error('Title is required');
        }
    },
    async changeTodo({id, done}) {
        try {
            const todo = await Todo.findByPk(+id);
            todo.done = done;
            await todo.save();
            return todo;
        } catch (e) {
            throw new Error('Graphql error');
        }
    },
    async deleteTodo({id}) {
        try {
            const todos = await Todo.findAll({
                where: {id}
            });
            const todo = todos[0];
            await todo.destroy();
            return true;
        } catch (e) {
            throw new Error('Не удалось удалить');
        }
    }
};
