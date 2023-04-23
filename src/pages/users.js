import React from 'react';
import { Table1 } from '../Components/makets/Table'
import { getData } from "../Components/Data/data";
import { Choice } from "../Components/panel/Panel"
import { Cards } from '../Components/makets/Cards'
import { CardsMaket } from '../Components/makets/Cards.styled';
import { Container, Button } from "./users.styled"

const Users = () => {
  const [showTable, setShowTable] = React.useState(false);
  const [showCards, setShowCards] = React.useState(false);
  const [showGroup, setShowGroup] = React.useState(false);


  let [arr, setArr] = React.useState([]);
  React.useEffect(() => {
    getData().then(
      value => {
        setArr(value);
      }
    )
  }, []);

  const handleTable = () => {
    setShowTable(!showTable);
    setShowCards(false);
    setShowGroup(false);
  };

  const handleCards = () => {
    setShowCards(!showCards);
    setShowTable(false);
    setShowGroup(false);
  };

  const handleGroup = () => {
    setShowGroup(!showGroup);
    setShowTable(false);
    setShowCards(false);
  };

  return (
    <div>
      <Container>
        <Button onClick={handleTable}>Таблица</Button>
        <Button onClick={handleCards}>Карточки</Button>
        <Button onClick={handleGroup}>Группы</Button>
      </Container>
      {showCards ? <Cards arr={arr}/> : null}
      {showTable ? <Table1 arr={arr} />: null}
    </div>
  );
};

export default Users;