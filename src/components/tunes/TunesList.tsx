import React, { useState } from "react";
import { Song } from "../../types";
import "./TunesList.scss";
import TunesSong from "./TunesSong";
import {TransitionGroup, CSSTransition} from 'react-transition-group'
type Props = {
  songs: Song[];
};

const TunesList = (props: Props) => {
  const { songs } = props;
  return (

    <TransitionGroup component="ul" className="tunes-list">
      {songs.map((song) => (
        <CSSTransition key={song.id} timeout={200} classNames="song">
          <li key={song.id}>
            <TunesSong song={song}></TunesSong>
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default TunesList;
