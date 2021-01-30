import React, { useState } from "react";

// Componentes
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import NewTaskInput from "./newTaskInput";
import ListItem from "./listItem";

// Styles
import { Wrapper } from "./styles";

const Home = () => {
  const [tasks, setTasks] = useState([]);

  function addNewTask(task) {
    const itensCopy = Array.from(tasks);
    itensCopy.push({ id: tasks.length, value: task });
    setTasks(itensCopy);
  }

  function updateTask({ target }, index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1, { id: index, value: target.value });
    setTasks(itensCopy);
  }

  function deleteTask(index) {
    const itensCopy = Array.from(tasks);
    itensCopy.splice(index, 1);
    setTasks(itensCopy);
  }

  return (
    <>
      <Header />
      <Wrapper>
        <NewTaskInput onSubmit={addNewTask} />
        {tasks.map(({ id, value }, index) => (
          <ListItem
            key={id}
            value={value}
            onChange={(event) => updateTask(event, index)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </Wrapper>
      <Footer />
    </>
  );
};

export default Home;
