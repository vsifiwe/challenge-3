import React from 'react';
import './App.css';
import { Input, List, Card } from 'antd';
import 'antd/dist/antd.css';

const { Search } = Input;

function App() {

  const [data, setData] = React.useState([]);

  const onSearch = (value) => {
    fetch(`/customapi?id=${value}`)
      .then((res) => res.json())
      .then((data) => setData(data.payload))
  };

  return (
    <div className="App">
      <header className="App-header">
        <Search
          className="search-bar"
          type="number"
          placeholder="Input Album ID (E.g: 1)"
          enterButton="Get Album Photos By Id"
          size="large"
          onSearch={onSearch}
        />

        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <Card title={item.name}>
                <img alt="item" src={item.Url}></img>
              </Card>
            </List.Item>
          )}
        />

      </header>
    </div>
  );
}

export default App;
