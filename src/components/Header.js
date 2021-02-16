import Button from './Button'

const Header = ({onAdd , showAdd}) => {
   
    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button color={showAdd?'red':'green'} Text= {showAdd?'Close':'Add'} onClick={onAdd}/>
            
        </header>
    )
}

export default Header
