import React from 'react';
import UserCard from './lab7Files/UserCard';
import State from './lab7Files/State';
import Reducer from './lab7Files/Reducer'; 
import Effect from './lab7Files/Effect';
import Context from './lab7Files/Context';
import Ref from './lab7Files/Ref';
import UserProfile from './lab7Files/Context';
import './App.css';

function Lab7(){
    return(
        <div>
      <h1>React Hooks</h1>

      <section>
        <h2>Lista Użytkowników - Zad 1</h2>
        <UserCard name="Jan" surname="Kowalski" email="jan.kowalski@example.com" />
        <UserCard name="Anna" surname="Nowak" email="anna.nowak@example.com" />
        <UserCard name="Piotr" surname="Wiśniewski" email="piotr.wisniewski@example.com" />
      </section>

      <section>
        <h2>useState - zad 2</h2>
        <State />
      </section>

      <section>
        <h2>useReducer - zad 2</h2>
        <Reducer />
      </section>

      <section>
        <h2>useEffect - zad 2</h2>
        <Effect />
      </section>

      <section>
        <h2>useContext - zad 2</h2>
        <Context>
          <UserProfile />
        </Context>
      </section>

      <section>
        <h2>useRef - zad 2</h2>
        <Ref />
      </section>
    </div>
  );
}
export default Lab7;