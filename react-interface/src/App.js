import { useState, useEffect, useCallback } from 'react'
import { BiCalendar } from "react-icons/bi";
import Search from './components/Search'
import AddAppointment from './components/AddAppointment'
import AppointmentInfo from './components/AppointmentInfo'

function App() {
  let [appointmentList, setAppointmentList] = useState([]);
  let [query, setQuery] = useState("");
  let [sortBy, setSortBy] = useState("petName");
  let [orderBy, setOrderBy] = useState("asc");
  // make a copy of our original list so we don't affect the original
  const filteredAppointments = appointmentList.filter(
    item => {
      return (
        item.petName.toLowerCase().includes(query.toLowerCase()) ||
        item.ownerName.toLowerCase().includes(query.toLowerCase()) ||
        item.aptNotes.toLowerCase().includes(query.toLowerCase())

      )
    }
  ).sort((a,b) => {
    let order = (orderBy === 'asc') ? 1 : -1;
    return (
      a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? -1 * order : 1 * order
    )
  })

  const fetchData = useCallback(
    () => {
      fetch('./data.json') // make the fetch request
        .then(response => response.json())// a promise to get data as json
        .then(data => setAppointmentList(data)) // put the response into data and set the appointmentlist
    }, []
  )

  useEffect(() => {
    fetchData()
  }, [fetchData]);

  return (
    <div className="App container mx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3">
        <BiCalendar className="inline-block text-red-400 align-top" />Your Appointments</h1>
      <AddAppointment onSendAppointment={myAppointment => setAppointmentList([...appointmentList, myAppointment])}
      lastId={appointmentList.reduce((max, item) => Number(item.id) > max ? Number(item.id) : max, 0)}
      />
      <Search 
      // receive the data inputted by the user 
      query = {query}
      onQueryChange = {
        queryValue => setQuery(queryValue)
      }
      orderBy = {orderBy}
      onOrderByChange = {myOrder => setOrderBy(myOrder)}
      sortBy = {sortBy}
      onSortByChange = {mySort => setSortBy(mySort)}/>
      <ul className="divide-y divide-grey-200">
        {
          filteredAppointments.map(appointment => (
            <AppointmentInfo key={appointment.id}
              appointment={appointment}
              // receive the delete appointment method back from AppointmentInfo
              deleteAppointment={
                appointmentId => setAppointmentList( // The method takes in a method Id 
                  appointmentList.filter( // then we set the list to have only the items that don't have that id
                    (appointment) => appointment.id !== appointmentId))
              }
            />
          ))
        }

      </ul>
    </div>
  );
}

export default App;
