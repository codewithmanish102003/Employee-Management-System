import PropTypes from 'prop-types'
import Header from '../Other/Header'
import TasklistNumber from '../Other/TasklistNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {

  console.log(props);
  
  const username = props.data.firstname;
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen '>
    <Header changeUser={props.changeUser} username={username}/>
    <TasklistNumber data={props.data}/>
    <TaskList data={props.data}/>
    </div>
  )
}

EmployeeDashboard.propTypes = {
  changeUser: PropTypes.func.isRequired,
  data: PropTypes.shape({
    firstname: PropTypes.string.isRequired
  }).isRequired
}

export default EmployeeDashboard
