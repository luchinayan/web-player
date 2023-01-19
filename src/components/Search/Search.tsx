import s from "./Search.module.css";
import Loader from "../../utils/Loader";
import {MdClose} from "react-icons/md";
import {FC} from "react";
interface SearchProps{
    onFocus: (condition:boolean)=>void,
    onInputChange: (str:string)=>void,
    onSearch: ()=>void,
    isLoading: boolean,
    inputValue:string,
    onClearInput: ()=>void
}
const Search:FC<SearchProps> = ({onFocus, onInputChange, onSearch, isLoading, inputValue, onClearInput}) => {
    return (
        <div>
            <div className={s.inputContainer}>
                <input onFocus={() => onFocus(true)}
                       onBlur={() => onFocus(false)}
                       onInput={(e) => {
                           onInputChange((e.target as HTMLTextAreaElement).value)
                       }}
                       value={inputValue}
                       className={s.input} type="text" placeholder={'Search'}/>
                {inputValue && <button onClick={onClearInput} className={s.close}><MdClose/></button>}
                <button onClick={onSearch} className={s.searchBtn}>search</button>
                {isLoading && <Loader/>}
            </div>
        </div>
    );
};

export default Search;
