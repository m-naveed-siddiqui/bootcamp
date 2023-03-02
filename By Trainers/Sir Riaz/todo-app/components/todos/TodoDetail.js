import classes from './TodoDetail.module.css';

function TodoDetail(props) {
    return (
        <section className={classes.detail}>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </section>
    )
}

export default TodoDetail;