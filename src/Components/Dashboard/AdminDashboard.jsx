import PropTypes from 'prop-types'
import AllTask from '../Other/AllTask'
import CreateTask from '../Other/CreateTask'
import Header from '../Other/Header'

const AdminDashboard = (props) => {
    const username = "Admin";
    return (
        <div className='h-screen p-10 w-full'>
            <Header changeUser={props.changeUser} username={username}/>
            <CreateTask/>
            <AllTask/>
        </div>
    )
}

AdminDashboard.propTypes = {
    changeUser: PropTypes.func.isRequired
}

export default AdminDashboard
