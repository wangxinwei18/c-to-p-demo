import React from 'react';
import { Button } from 'semantic-ui-react';

export default function Child({ onSubmit }) {  // props.onSubmit 从 Parent 传下来的函数
    const data = "This is data from Child Component to the Parent Component:";

    return (
        // 点击时执行：() => onSubmit(data) 将data作为参数传递给 parentToChild 函数
        // onSubmit装入并执行的是父组件定义的带参数函数，需要传回父组件的值放在data
        <div>
            <Button primary onClick={() => onSubmit(data)}>Click Child</Button>
        </div>
    )
}