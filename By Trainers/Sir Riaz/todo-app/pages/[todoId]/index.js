import TodoDetail from "../../components/todos/TodoDetail";
import { useRouter } from "next/router";

function TodoDetails(props) {
    return (
        <TodoDetail 
            title={props.todoData.title}
            description={props.todoData.description}
    />
    )
}

export async function getStaticPaths() {
    // set static paths from external api call (all todos)
    // get all todos
    // return 1 - 100 ids [id]

    return {
        fallback: 'blocking',
        paths: [{
            params: { todoId: 't1' }
        },
        {
            params: { todoId: 't2' }
        }]
    }
}

export async function getStaticProps(context) {
    const todoId = context.params.todoId;
    // make an api call for specific todo

    return {
        props: {
            todoData: {
                id: todoId,
                title: 'Do the Cardio',
                description: 'I have to run 5 kms on Saturday'
            }
        }
    }
}

export default TodoDetails;