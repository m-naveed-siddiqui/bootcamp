import { useRouter } from 'next/router';

import NewTodoForm from '../../components/todos/NewTodoForm';

function NewTodoPage() {
    const router = useRouter()

    async function addTodoHandler(enteredTodoData) {
        // external api calls should be made here
        const response = await fetch('http://localhost:5000/api/todos', {
            method: 'POST',
            body: JSON.stringify(enteredTodoData),
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': localStorage.getItem('userToken')
            }
        })

        const data = await response.json();

        console.log(data)

        router.push('/')
    }

    return (
        <NewTodoForm onAddTodo={addTodoHandler} />
    )
}

export default NewTodoPage;