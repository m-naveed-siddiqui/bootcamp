import React from 'react';
import TodoList from '../components/todos/TodoList';

const TODOS = [{
    id: 't1',
    title: 'title',
    description: 'description'
}]

function HomePage() {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        async function getTodos() {
            const response = await fetch('http://localhost:5000/api/todos', {
                headers: {
                    'x-auth-token': localStorage.getItem('userToken')
                }
            })

            const data = await response.json();

            console.log(data)

            setData(data);

        }

        getTodos();
    }, [])

    return (
        <>
        { data.length && <TodoList todos={data} /> }
        </>
    )
}

export async function getStaticProps() {
    // fetch data from an API

    // const response = await fetch('http://localhost:5000/api/todos', {
    //     headers: {
    //         'x-auth-token': token
    //     }
    // })

    // const todos = await response.json();
    
    return {
        // props: {
        //     todos: todos.map((todo) => ({
        //         id: todo._id.toString(),
        //         title: todo.title,
        //         description: todo.description,
        //     }))
        // },
        // revalidate: 1, // make call for new data after 1 seconds

        props: {
            todos: TODOS
        }
    }
}

export default HomePage;