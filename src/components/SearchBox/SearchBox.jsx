import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";
import { initialStateFilter } from "../../redux/constants";

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  const cleanInput = () => {
    dispatch(changeFilter(initialStateFilter.name));
  };

  return (
    <div>
      <p>Find contacts by name</p>
      <div className={css.container}>
        <input
          className={css.input}
          type="text"
          value={searchValue}
          onChange={handelInputSearch}
        />
        <button onClick={cleanInput}>Clear search</button>
      </div>
    </div>
  );
};

export default SearchBox;
