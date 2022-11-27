import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import classes from './App.module.scss'
import Header from './website/Header/Header'
import Navigation from './website/Navigation/Navigation'
import Main from './website/Main/Main'
import Dialogs from './website/Dialogs/Dialogs'
import Music from './website/Music/Music'
import News from './website/News/News'
import Settings from './website/Settings/Settings'

function App(props) {

  return (
    <BrowserRouter>
      <div className={classes.appBlock}>
        <Routes>
          <Route path='*' element={<Header/>}></Route>
        </Routes>
          <div className={classes.wrapper}>
            <Navigation/>
            <Routes>

              <Route path='/' element={<Main postsData={props.state.profilePage.postsData}/>}></Route>

              <Route path='/dialogs/*'element={<Dialogs messagesData={props.state.messagesPage.messagesData} dialogsData={props.state.profilePage.dialogsData}/>} ></Route>
              <Route path='/news' element={<News/>}></Route>
              <Route path='/music' element={<Music/>}></Route>
              <Route path='/settings' element={<Settings/>}></Route>
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  )
}

export default App
