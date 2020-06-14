import React from 'react';
import Layout from './comonents/layout/layout';
import TodoBuilder from './conatiner/todobuilder/todobuilder'
import './App.css';

function App() {
  return (
    <div>
        <Layout>
            <TodoBuilder></TodoBuilder>
        </Layout>
    </div>
  );
}

export default App;
