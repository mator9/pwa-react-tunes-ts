import React, { ChangeEvent, FormEvent, useRef } from "react";
import { debounce } from "lodash-es";
import "./TunesSearchForm.scss";

type Props = {
  onSearch: (query: string) => void;
};

const TunesSearchForm = (props: Props) => {
  const searchInput = useRef<HTMLInputElement>(null);

  //submit form
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    searchForMusic();
  };
  //input element
  const handleInput = debounce((e: ChangeEvent<HTMLInputElement>) => {
    searchForMusic();
  }, 500);

  //search for music
  const searchForMusic = () => {
    let searchString = searchInput.current?.value;
    if (searchString) {
      props.onSearch(searchString);
    }
    // console.log(searchInput.current?.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          onChange={handleInput}
          className="search"
          ref={searchInput}
        />
      </form>
    </div>
  );
};

export default TunesSearchForm;
