export default function MenuItem({item}){
    return(
        <div className='menu__home'>
            <div className='menu__icon'> 
                {item.icon}
            </div>      
            <span>{item.name}</span>
         </div>
    )
}