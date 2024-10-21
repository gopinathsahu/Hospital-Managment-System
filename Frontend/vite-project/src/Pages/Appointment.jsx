import Hero from "../Component/Hero"
import  AppointmentForm  from "../Component/AppointmentForm"
 const Appointment = () => {
  return (
  <>
    <Hero  title={"Schedule Your Appointment | ZeeCare Medical Institute"}
        imageUrl={"/signin.png"}/>
   <AppointmentForm imageUrl={'/signin.png'}/>
  </>
  )
}
export default Appointment;
