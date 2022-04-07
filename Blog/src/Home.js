const Home = () => {
    return ( 
        
        <div>
            <button className="button"> Click Me </button>
                <br />
            <div className="inputFieldStyles" >
                <br/> <br/>
                <label htmlFor="username">Username</label>
                <input type="text"/>
                <br /> <br />
                <label htmlFor="password">Password</label>
                <input type="password" />
            </div>
            
            <div>
                <select name="" id=""></select>
            </div>

            <div className="radioStyles">
                <h1>Gender</h1>
                <br />
                <label htmlFor="radio" >Male</label>
                <input type="radio" name="gender" value="male" />
                <br />
                <label htmlFor="">Female</label>
                <input type="radio" name="gender" value="female"/>
                <br />
            </div>
        </div>
     );
}
 
export default Home;