import Button from './Button'

const Header = () => {
    const onClick=()=>{
        console.log('clicked1')
    }
    return (
        <header class="header">
            <h1>Task Tracker</h1>
            <Button color='green' Text='Add' onClick={onClick}/>
            <Button color='red' Text='Delete'/>
        </header>
    )
}

export default Header
