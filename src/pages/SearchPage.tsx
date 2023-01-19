import ImageRotator from "../utils/ImageRotator";
import s from './SearchPage.module.css'
import Search from "../components/Search/Search";
import MoviesList from "../components/MoviesList/MoviesList";
import {useState} from "react";

const SearchPage = () => {
    const [isFocus, setIsFocus] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [inputValue, setInputValue] = useState('')

    const changeFocus = (condition: boolean) => {
        if (inputValue.length > 1 && !condition) {
            setIsFocus(condition)
            onSearch()
        } else setIsFocus(condition)
    }
    const onInputChange = (val: string) => {
        setInputValue(val)
    }
    const onClearInput = () => {
        setInputValue('')
    }

    const onSearch = () => {
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
        }, 800)
    }

    return (
        <div className={s.searchPageContainer}>
            <Search onSearch={onSearch} onClearInput={onClearInput} isLoading={isLoading}
                    inputValue={inputValue} onInputChange={onInputChange} onFocus={changeFocus}/>
            {isFocus || isLoading ? null : <>
                <div className={s.movies}><MoviesList  inputValue={inputValue}/></div>
            </>}
            <div className={s.img}>
                <ImageRotator/>
            </div>

        </div>
    );
};

export default SearchPage;
