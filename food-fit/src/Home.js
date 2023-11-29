import fitness from './assets/fitness.png'
import bigpic from './assets/bigpic.svg'

function Home(){
    return(
        <div className="home">
            <div className="main">
                <img className='bigpic' src={bigpic}></img>
                <h1 className='fit-head'>Your Fitness Expert</h1>
            </div>
            <div className="dashboard center">
                <h1 className='welcome'>Welcome</h1>
                <h2 className='height'>Height: 172 cm</h2>
                <h2 className='weight'>Weight: 60 kg</h2>
                <h2 className='pbmi'>BMI</h2>
                <div className="circle">
                    <h2>22</h2>
                </div>
            </div>
        </div>
    )
}   

export default Home