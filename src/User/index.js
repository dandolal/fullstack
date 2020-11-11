import User from './user'
import {users, problems} from "../globals";
import Problem from "../problem/Problem";

function resolve(x) {
    return new Promise(func => {
        setTimeout(() => {
            func(x);
        }, 1);
    });
}

function reject(error) {
    return new Promise((resolve, func) => {
        setTimeout(() => {
            func(error);
        }, 1);
    });
}

const userService = {
    async login(login, password) {
        if (!users.has(login)) {
            return reject('Нет таких зарегистрированных пользователей');
        } else {
            if (users.get(login).password !== password) {
                return reject('Неверный пароль');
            } else {
                users.get(login).isLogged = true;
                return resolve({user: users.get(login)});
            }
        }
    },

    async logout(login) {
        users.get(login).isLogged = false;
        return resolve({user: null});
    },

    async register(login, password) {
        if (users.has(login)) {
            return reject('Такой пользователь уже существует')
        } else {
            users.set(login, new User(login, password, true))
            return resolve({user: users.get(login)});
        }
    },

    async editProblem(problem) {
        problems.get(problem.id).name = problem.name;
        problems.get(problem.id).task = problem.task;
        problems.get(problem.id).solution = problem.solution;
        problems.get(problem.id).author = problem.author;
        return resolve({problem: problems.get(problem.id)})
    },

    async addProblem(problem) {
        problem.id = problems.size
        problems.set(problem.id, new Problem(problem.name,problem.task,problem.solution,problem.author,problem.user,problem.id))
        return resolve({problem: problems.get(problem.id)})
    },

    async init() {
        return resolve(problems)
    }

}

export default userService