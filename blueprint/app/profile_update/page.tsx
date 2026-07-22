
import {saveProfile} from './action'

export default function Profile(){
    return(
        <section className="flex flex-col w-full  justify-center items-center">
            <div className="flex w-full justify-center items-center"> 
                <h1>Profile Info</h1>
            </div>
            <form action= {saveProfile}>     
            <div className='info-edit-box'>
                <p>Full Name: </p>
                <input type="text" name="full_name" placeholder="John Doe"required />
            </div>
            <div>
                <p>University: </p>
                <input type="text" name="university" placeholder="Federal University, Lokoja" />
            </div>
            <div>
                <p>Department: </p>
                <input type="text" name="department" placeholder="Computer Engineering" />
            </div>
            <div>
                <p>CGPA: </p>
                <input type="number" name="cgpa" placeholder="4.00" />
            </div>
            <div>
                <p>Country of Residence: </p>
                <input type="text" name="country" placeholder="USA" />
            </div>
            <div>
                <p>Preffered Country: </p>
                <input type="text" name="preferred_country" placeholder="USA" />
            </div>
            <div>
                <p>Level </p>
                <input type="text" name="level" placeholder="400" />
            </div>
            <div>
                <p>Faculty: </p>
                <input type="text" name="faculty" placeholder="Engineering" />
            </div>
            <button type="submit">
                Save Changes
            </button>
            </form>
            
        </section>
    )
}