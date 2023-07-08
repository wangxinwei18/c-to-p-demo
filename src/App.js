import React from 'react';
import { useState } from 'react';
import Child from './Child';

function Parent() {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    const childToParent = (childData) => {
        /* childData作为参数是从Parent传至子组件，最后由子组传回来值的参数  */

        setData(childData); /* 将子组件childData传回的值赋给data */
        setCount(count + 1);  // 父组件数据加一
    }

    return (
        <div>
            <div>
                {/* onSubmit 是props，childToParent是props的带参数函数  */}
                {/* 调用Child组件，将函数“childToParent”作为prop.onSubmit的参数传给Child  */}
                <Child onSubmit={childToParent} />
            </div>
            {`${data} ${count} times.`}  {/* 显示数据 */}

        </div>
    );
}

export default Parent;