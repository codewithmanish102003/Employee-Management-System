
const Header = (props ) => {
  console.log(props)


  const logOutUser=()=>{
     localStorage.setItem("loggedInUser"," ")
    props.changeUser('')
  }

  return (
    <div className='flex items-end justify-between'>
      <h1 className="text-2xl font-medium">Hello <br /><span className='text-3xl font-semibold'>{props.username}👋</span></h1>
      <button onClick={logOutUser} className='bg-red-600 text-lg font-medium text-white px-5 py-3 rounded-lg'>Logout</button>
    </div>
  )
}

export default Header