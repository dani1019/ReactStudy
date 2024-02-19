export default function Profile({image, name, title, newBool}){
    return <div className='profile'>
        <img
            className='photo' 
            src = {image}
            alt="avater"
        />
        {newBool=== "new"? <div class = "new" style="display:block"/>: <div class = "new" style="display:none"/>}
        <h1>{name}</h1>
        <h1>{title}</h1>
    </div>
}