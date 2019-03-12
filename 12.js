import React, { Component } from 'react';
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            workers: [
                {
                    name: 'Ашот', surname: 'Зурабович', salary: 250000, sex: 'Жен',
                },
                {
                    name: 'Ян', surname: 'Ибрагимович', salary: 2, sex: 'Mуж',
                },
                {
                    name: 'Иван', surname: 'Иванов', salary: 1000, sex: 'Mуж',
                },
                {
                    name: 'Петр', surname: 'Петров', salary: 5000, sex: 'Mуж',
                },
                {
                    name: 'Сергей', surname: 'Сергеев', salary: 3000, sex: 'Жен',
                },
                {
                    name: 'Петр', surname: 'Васильев', salary: 11000, sex: 'Жен',
                },
            ],
            sex: ['Муж', 'Жен'],
            inputName: '',
            inputSurname: '',
            inputSalary: '',
            value: 'Муж',
        };
    }

    onButtonSort(prop) {
        const { workers } = this.state;
        workers.sort((a, b) => {
            if (typeof a[prop] === 'number' && typeof b[prop] === 'number') {
                return a[prop] - b[prop];
            }
            if (a[prop] < b[prop]) {
                return -1;
            }
            if (a[prop] > b[prop]) {
                return 1;
            }
            return 0;
        });
        this.setState({ workers });
    }

    onHandleChange(event, prop) {
        this.setState({ [prop]: event.target.value });
    }

    onSexChange(event) {
        this.setState({value: event.target.value});
    }

    addItem(event) {
        const {workers} = this.state;
        const newTableLine = { name: this.state.inputName, surname: this.state.inputSurname, salary: this.state.inputSalary, sex: this.state.value };
        workers.push(newTableLine);
        this.setState({ workers });
        event.preventDefault();
    }

    render() {
        const lang = this.state.sex.map((item, index) => {
            return (
                <option
                >
                    {item}

                </option>
            );
        });

        const list = this.state.workers.map((item, index) => {
            return (
                <tbody>
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.surname}</td>
                        <td>{item.salary}</td>
                        <td>{item.sex}</td>
                    </tr>
                </tbody>
            );
        });

        return (
            <div>
                <table border="1">
                    <thead>
                        <tr>
                            <th>
                                Имя
                                <button onClick={() => this.onButtonSort('name')}>Sort</button>
                            </th>
                            <th>
                                Фамилия
                                <button onClick={() => this.onButtonSort('surname')}>Sort</button>
                            </th>
                            <th>
                                Зарплата
                                <button onClick={() => this.onButtonSort('salary')}>Sort</button>
                            </th>
                            <th>
                                Пол
                                <button onClick={() => this.onButtonSort('sex')}>Sort</button>
                            </th>
                        </tr>
                    </thead>
                    {list}
                </table>
                <form>
                    <input
                        value={this.state.inputName}
                        onChange={event => this.onHandleChange(event, 'inputName')}
                        size="7"
                    />
                    <input
                        value={this.state.inputSurname}
                        onChange={event => this.onHandleChange(event, 'inputSurname')}
                        size="14"
                    />
                    <input
                        value={this.state.inputSalary}
                        onChange={event => this.onHandleChange(event, 'inputSalary')}
                        size="12"
                    />
                    <select
                        value={this.state.value}
                        onChange={event => this.onSexChange(event)}
                    >
                        {lang}
                    </select>
                    <button onClick={(event) => this.addItem(event)}>Add worker</button>
                </form>
            </div>
        );
    }
}
export default App;
