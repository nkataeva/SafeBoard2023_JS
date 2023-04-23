import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Table, Search } from "./Table.styled";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";


class Checkbox extends React.Component {
    constructor() {
        super();
        this.state = { checkboxChecked: false };

    }
    static render(name) {
        return (
            <th scope="col">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox"
                        value="" name={name} onChange={this.handleCheckboxChange}
                        id="flexCheckDefault" checked={this.state} />
                    <label className="form-check-label" for="flexCheckDefault" />
                </div>
            </th>
        )
    }

    static handleCheckboxChange(event) {
        const target = event.target;
        const checked = target.checked;
        const name = target.name;
        if (name == 'master') {

        } else if (name == 'slave') {

        };
    }
}

export const Table1 = ({ arr }) => {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        setUsers(arr);
    }, [arr]);

    const [sorted, setSorted] = React.useState({ sorted: "name", reversed: false });
    const [searchPhrase, setSearchPhrase] = React.useState("");

    const sortByName = () => {
        const usersCopy = [...users];
        usersCopy.sort((userA, userB) => {
            const fullNameA = `${userA.first_name} ${userA.last_name}`;
            const fullNameB = `${userB.first_name} ${userB.last_name}`;
            if (sorted.reversed) {
                return fullNameB.localeCompare(fullNameA);
            }
            return fullNameA.localeCompare(fullNameB);
        });
        setUsers(usersCopy);
        setSorted({ sorted: "name", reversed: !sorted.reversed });
    };

    const search = (event) => {
        const matchedUsers = arr.filter((user) => {
            return `${user.first_name} ${user.last_name}`
                .toLowerCase()
                .includes(event.target.value.toLowerCase());
        });

        setUsers(matchedUsers);
        setSearchPhrase(event.target.value);
    };

    const renderUsers = () => {
        return users.map((a) => {
            return (
                <tr>
                    {Checkbox.render("slave")}
                    <td>{`${a.first_name} ${a.last_name}`}</td>
                    <td>{a.account}</td>
                    <td>{a.email}</td>
                    <td>{a.group}</td>
                    <td>{a.phone}</td>
                </tr>
            );
        });
    };

    const renderArrow = () => {
        if (sorted.reversed) {
            return <FaArrowUp />;
        }
        return <FaArrowDown />;
    };

    return (
        <div >
            <Search className="form-select text-bg-dark p-3">
                <input type="text" placeholder="Поиск" value={searchPhrase} onChange={search} />
            </Search>

            <Table className="table table-striped table-dark">
                <thead style={{ background: 'white' }} >
                    <tr>
                        {Checkbox.render("master")}
                        <th scope="col" onClick={sortByName} style={{cursor: 'pointer'}}>
                            <span style={{ marginRight: 10 }}>Name</span>
                            {sorted.sorted === "name" ? renderArrow() : null}</th>
                        <th scope="col">Учетная запись</th>
                        <th scope="col">Электронная почта</th>
                        <th scope="col">Группа</th>
                        <th scope="col">Номер телефона</th>
                    </tr>
                </thead>
                <tbody> {renderUsers()} </tbody>
            </Table>
        </div>
    )
}