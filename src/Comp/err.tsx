import style from './err.module.css'

const Err = () => {
    return (
        <div>
                <img className={style.pic}
                src={'http://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sunglasses_cool_emoji_grande.png?v=1571606093'} 
                alt='No tast to do' 
                />
                <h4 style={{textAlign:'center'}}>No Pending Task</h4>
        </div>
    )
}

export default Err;