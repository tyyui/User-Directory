import React, { useState } from 'react';
import Layout from './components/Layout';
import Header from './components/Header';
import NavBar from './components/Nav';
import EmployeeList from './components/EmployeeList';
import Footer from './components/Footer';
import employees from './data/employeedb.json'

function App() {
  const [search, setSearch] = useState("");
  const [arrange, setArrange] = useState(false);
  const [data, setEmployees] = useState(employees);

  function searchBar(evt) {
    setSearch(evt.target.value)
  }

  function arrbyName() {
    if(!arrange) {
      setEmployees(data.sort((a,b)=>(a.name>b.name) ? 1 : -1));
      setArrange(true);
    }
    else {
      setEmployees(data.sort((a,b)=>(a.name>b.name) ? -1 : 1));
      setArrange(false);
    }
  }

  function arrbyDept() {
    if(!arrange) {
      setEmployees(data.sort((a,b)=>(a.department>b.department) ? 1 : -1));
      setArrange(true);
    }
    else {
      setEmployees(data.sort((a,b)=>(a.department>b.department) ? -1 : 1));
      setArrange(false);
    }
  }

  const filterEmployees = data.filter(employee => employee.name.toLowerCase().startsWith(search.toLowerCase()))

  return (
    <div>
      <Header/>
      <Layout>
        <h1 className='title text-4xl text-blue-900 mt-16'>Employee Directory</h1>
        <p className='mb-16 text-md'>lcs 2020 winner</p>
        <NavBar 
          onSearch={searchBar}
          search={search}
          arrbyName={arrbyName}
          arrbyDept={arrbyDept}
        />
        <EmployeeList data={filterEmployees}/>
      </Layout>
      <Footer/>
    </div>
  );
}

export default App;
