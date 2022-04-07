import styles from './button.module.scss';

const Button = props => {
    return <button onClick={props.onClick} type={props.type} className={`${styles.button} ${props.className}`}>{props.children}</button>
}

export default Button;