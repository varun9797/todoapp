
import React from 'react'
const layout = (props) => (
    <div>
        <div>Toolbar sideba and backdrop</div>
        <main>
            {props.children}
        </main>
    </div>
)

export default layout;