import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Card, CardsMaket } from "./Cards.styled"
import { Search } from "./Table.styled";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

export const Cards = ({ arr }) => {
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

    const renderArrow = () => {
        if (sorted.reversed) {
            return <FaArrowUp />;
        }
        return <FaArrowDown />;
    };

    const renderUsers = () => {
        return users.map((a) => {
            return (
                <Card className="card">
                    <img src={require('./avatar.jpg')} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{
                            fontSize: '1.5em', color: '#ffd503',
                            textAlign: 'center', width: '100%'
                        }}>{`${a.first_name} ${a.last_name}`}</h5>
                        <p className="card-text" style={{
                            fontSize: '1.5em',
                            color: '#b8a546', textAlign: 'center'
                        }}>{a.group}
                        </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" style={{ textAlign: 'center' }}>{a.phone}</li>
                    </ul>
                </Card>
            );
        });
    };

    return (
        <div>
            <Search className="form-select text-bg-dark p-3">
                <input type="text" placeholder="Поиск" value={searchPhrase} onChange={search} />
                <button style={{background: 'white', borderRadius: '0.1em', cursor: 'pointer'}} onClick={sortByName}>
                            <span style={{ marginRight: 10 }}>По имени</span> </button>
            </Search>
            {renderUsers()}
        </div>
    );
}