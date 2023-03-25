import { useState } from "react";

interface ButtonProps {
    onClick(): void;
    children: String;
}
interface User {
    name: string;
    age: number;
}

const Button = (props:ButtonProps) => {
    const a:string = 'a';
    const [name, setName] = useState('');
    const [list, setList] = useState<Array<User>>([]);
    //훅을 쓸 때는 제네릭으로 타입 명시 해야 함.
    return (
        <button onClick = {props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;