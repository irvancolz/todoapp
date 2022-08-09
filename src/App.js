import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Component from './Component';
import { useModal } from './Helper/ModalContext';
import { useForm } from './Helper/FormContext';
const TodoPages = React.lazy(() => import('./Pages/Todo'));
const HomePages = React.lazy(() => import('./Pages/Home'));

function App() {
  const {Header, Modal, FormEdit} = Component();
  const {isOpen} = useModal();
  const {isOpenForm} = useForm();


  return (
    <div className="App">
      <Header />
      {isOpenForm &&<FormEdit />}
      {isOpen && <Modal />}

      <div className='container'>
          <Suspense fallback={<p>loading...</p>}>
            <Routes>
                    <Route path="/" element={<HomePages />}></Route>
                    <Route path={`/Detail/:id`} element={<TodoPages />}></Route>
            </Routes>
          </Suspense>
      </div>
    </div>
  );
}

export default App;
