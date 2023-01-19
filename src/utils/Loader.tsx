import s from './Loader.module.css'
const Loader = () => {

    return (
        <div className={s.loader}>
            <svg style={{margin: 'auto', background: 'transparent'}}
                 width="100px" height="100px">
                <path fill="#fff"
                      d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                    <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite"
                                      keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
                </path>
            </svg>
        </div>
    )
}

export default Loader
